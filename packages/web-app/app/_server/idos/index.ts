import { ServerPublicInfo } from '../types';
import { getGrants, getProjectApplicants } from './grants';
import { addressesListSchema, grantsSchema } from '../../_types/schemas';
import { blockedCountries } from '../blocked-countries';
import { idOSGrantee } from './idos-grantee';
import {
  ENCRYPTION_KEY_PAIR,
  evmGrantee,
  evmGranteePublicKey,
} from '../wallet';

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
      console.log('Blocked country found for user', userAddress);
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

const populateLists = async (addresses: string[], grantee: idOSGrantee) => {
  const allowed: string[] = [];
  const notAllowed: string[] = [];
  const batches = Math.ceil(addresses.length / 2);

  for (let i = 0; i < batches; i++) {
    console.log(
      '%c==>BATCH',
      'color: green; background: yellow; font-size: 20px',
      i,
    );

    const batch = addresses.slice(i * 2, (i + 1) * 2);
    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      'MANDOU',
    );

    const promises = batch.map(async (address): Promise<string | null> => {
      return new Promise(() => userFilter(grantee, address));
    });

    const results = await Promise.all(promises);

    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      'CHEGOU',
    );

    results.forEach((result, index) => {
      console.log(
        '%c==>RESULT',
        'color: green; background: yellow; font-size: 20px',
        result,
      );

      if (result !== null) {
        allowed.push(result);
      } else {
        console.log(
          '%c==>FAILED',
          'color: green; background: yellow; font-size: 20px',
          result,
        );

        notAllowed.push(batch[index]);
      }
    });
  }

  return { allowed, notAllowed };
};

export const getAllowedProjectApplicants = async (projectAddress: string) => {
  try {
    const applicantsResult = await getProjectApplicants(projectAddress);
    const addresses = addressesListSchema.parse(applicantsResult);

    const grantee = await idOSGrantee.init({
      granteeSigner: evmGrantee,
      encryptionSecret: ENCRYPTION_KEY_PAIR.secretKey,
      dbId:
        process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
          ? undefined
          : 'x44250024a9bf9599ad7c3fcdb220d2100357dbf263014485174a1ae3',
    });
    // number of batches of 5 addresses
    let { allowed, notAllowed } = await populateLists(addresses, grantee);

    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      'DEU MERDA',
    );

    // for (const address of addresses) {
    //   const result = await userFilter(grantee, address);
    //   if (result !== null) {
    //     allowed.push(result);
    //   } else {
    //     notAllowed.push(address);
    //   }
    // }

    let retry = 5;
    while (retry > 0 && notAllowed.length > 0) {
      for (const address of notAllowed) {
        const result = await userFilter(grantee, address);
        if (result !== null) {
          allowed.push(result);
        } else {
          console.log(
            '%c==>Failed Retry',
            'color: green; background: yellow; font-size: 20px',
            address,
          );
        }
      }

      notAllowed = notAllowed.filter((address) => !allowed.includes(address));
      retry--;
    }

    return allowed as string[];
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Error retrieving applied addresses' };
  }
};

export const serverPublicInfo: ServerPublicInfo = {
  grantee: evmGrantee.address,
  encryptionPublicKey: evmGranteePublicKey,
  lockTimeSpanSeconds: 3600 * 24 * 365, // one year?
};
