import { ServerPublicInfo, TApplications } from '../types';
import { getGrants, getProjectApplicants } from './grants';
import { addressesListSchema, grantsSchema } from '../../_types/schemas';
import { blockedCountries } from '../blocked-countries';
import { idOSGrantee } from './idos-grantee';
import {
  ENCRYPTION_KEY_PAIR,
  evmGrantee,
  evmGranteePublicKey,
} from '../wallet';
import { createClient } from '../supabase/server';
import { compareAddresses } from '@/app/_lib/utils';

export interface idOSGrant {
  content: string;
  encryption_public_key: string;
}

const userFilter = async (grantee: idOSGrantee, userAddress: string) => {
  try {
    const grantsResult = await getGrants({
      owner: userAddress,
      grantee: evmGrantee.address,
    });
    const grants = grantsSchema.parse(grantsResult);

    if (!grants.length) {
      console.log('No grants found for user', userAddress);
      return null;
    }

    const { residentialCountry, idDocumentCountry } =
      await grantee.fetchUserCountriesFromSharedPlusCredential(
        grants[0].dataId,
      );

    if (!residentialCountry || !idDocumentCountry) {
      console.log(
        'No residential or idDocument country found for user',
        userAddress,
      );
      return null;
    }

    const isBlockedCountry = blockedCountries.some(
      (blockedCountry) =>
        blockedCountry === residentialCountry ||
        blockedCountry === idDocumentCountry,
    );

    //expected scenario
    if (isBlockedCountry) {
      console.log('Blocked country for user', userAddress);
      return null;
    }

    return userAddress;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  return null;
};

const filterApplicants = async (addresses: string[], grantee: idOSGrantee) => {
  const allowed = new Set<string>();
  const notAllowed = new Set<string>();
  const batches = addresses?.length > 10 ? Math.ceil(addresses.length / 10) : 1;

  // run in batches of 10
  for (let i = 0; i < batches; i++) {
    console.log('==>BATCH', i);

    let batch = addresses.slice(i * 10, (i + 1) * 10);
    let promises = batch.map(
      async (address): Promise<string | null> =>
        new Promise((resolve) => resolve(userFilter(grantee, address))),
    );

    let results = await Promise.all(promises);

    results.forEach((result, index) => {
      if (result !== null) {
        allowed.add(result);
      } else {
        notAllowed.add(batch[index]);
      }
    });
  }

  return { allowed, notAllowed };
};

const retryFailed = async (
  allowed: Set<string>,
  notAllowed: Set<string>,
  grantee: idOSGrantee,
) => {
  for (const address of notAllowed) {
    const result = await userFilter(grantee, address);
    if (result !== null) {
      allowed.add(result);
      notAllowed.delete(address);
    }
  }
};

type TAddress = Pick<TApplications, 'address'>;

export const getAllowedProjectApplicants = async (projectAddress: string) => {
  const supabase = createClient();
  const { error, data } = await supabase
    .from('applications')
    .select('address')
    .eq('project', projectAddress);

  if (error) {
    return {
      error: error.message,
    };
  }

  return data.map((row: TAddress) => row.address);
};

export const updateAllowedProjectApplicants = async (
  projectAddress: string,
) => {
  try {
    const applicantsResult = await getProjectApplicants(projectAddress);
    const parsedApplicants = addressesListSchema.parse(applicantsResult);
    const currentAllowedList =
      await getAllowedProjectApplicants(projectAddress);

    if (
      typeof currentAllowedList === 'object' &&
      'error' in currentAllowedList
    ) {
      throw new Error(currentAllowedList.error);
    }

    // remove already allowed addresses
    const addresses = parsedApplicants.filter(
      (address) =>
        !currentAllowedList.some((allowed) =>
          compareAddresses(allowed, address),
        ),
    );

    console.log('==>Current Applicants', parsedApplicants.length);
    console.log('==>Allowed', currentAllowedList.length);
    console.log('==>To Process', addresses.length);

    const grantee = await idOSGrantee.init({
      granteeSigner: evmGrantee,
      encryptionSecret: ENCRYPTION_KEY_PAIR.secretKey,
      dbId:
        process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
          ? undefined
          : 'x44250024a9bf9599ad7c3fcdb220d2100357dbf263014485174a1ae3',
    });

    // first run to populate the lists
    const { allowed, notAllowed } = await filterApplicants(addresses, grantee);

    // retry 2 times failed addresses
    let retry = 2;
    while (retry > 0 && notAllowed.size > 0) {
      await retryFailed(allowed, notAllowed, grantee);
      retry--;
    }

    console.log('==>', 'NOT ALLOWED:');
    console.log(notAllowed);

    return Array.from(allowed);
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Error uppdated applied addresses' };
  }
};

export const serverPublicInfo: ServerPublicInfo = {
  grantee: evmGrantee.address,
  encryptionPublicKey: evmGranteePublicKey,
  lockTimeSpanSeconds: 3600 * 24 * 365, // one year?
};
