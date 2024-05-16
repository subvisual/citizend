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
    if (isBlockedCountry) return null;

    return userAddress;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  return null;
};

export const getAllowedProjectApplicants = async (projectAddress: string) => {
  try {
    const applicantsResult = await getProjectApplicants(projectAddress);
    const addressesFull = addressesListSchema.parse(applicantsResult);
    //first 20 addresses
    const addresses = ['0xFbc53B2C5516e8d0765C9BC9711DbD27aab38F40'];
    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      addresses.length,
    );

    const grantee = await idOSGrantee.init({
      granteeSigner: evmGrantee,
      encryptionSecret: ENCRYPTION_KEY_PAIR.secretKey,
      dbId:
        process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
          ? undefined
          : 'x44250024a9bf9599ad7c3fcdb220d2100357dbf263014485174a1ae3',
    });

    // const number of batches with 10 addresses
    const batches = Math.ceil(addresses.length / 10);
    let currentBatch: string[] = [];
    const allowed: string[] = [];
    let notAllowed: string[] = [];
    for (let i = 0; i < batches; i++) {
      console.log(
        '%c==>BATCH',
        'color: green; background: yellow; font-size: 20px',
        i,
      );

      currentBatch = addresses.slice(i * 10, i * 10 + 10);

      for (const address of currentBatch) {
        const result = await userFilter(grantee, address);
        if (result !== null) {
          allowed.push(result);
        } else {
          console.log(
            '%c==>Failed',
            'color: green; background: yellow; font-size: 20px',
            address,
          );
          notAllowed.push(address);
        }
      }
      // sleep for 200ms
      // await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // retry not allowed addresses for 5 times
    // remove addresses from notAllowed array if they are allowed
    let retry = 5;
    while (retry > 0 && notAllowed.length > 0) {
      console.log(
        '%c==>RETRY',
        'color: green; background: yellow; font-size: 20px',
        retry,
      );

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
      // sleep for 200ms
      // await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // const allowed = [];

    // for (const address of addresses) {
    //   const result = await userFilter(grantee, address);
    //   if (result !== null) {
    //     allowed.push(result);
    //   }
    // }

    console.log(
      '%c==>NotAllowed',
      'color: green; background: yellow; font-size: 20px',
      notAllowed.length,
    );

    console.log(
      '%c==>Allowed',
      'color: green; background: yellow; font-size: 20px',
      allowed.length,
    );

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
