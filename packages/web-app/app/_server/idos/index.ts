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

    if (!grants.length) return null;

    const { residentialCountry, idDocumentCountry } =
      await grantee.fetchUserCountriesFromSharedPlusCredential(
        grants[0].dataId,
      );

    if (!residentialCountry || !idDocumentCountry) return null;

    const isBlockedCountry = blockedCountries.some(
      (blockedCountry) =>
        blockedCountry === residentialCountry ||
        blockedCountry === idDocumentCountry,
    );

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
    const addresses = addressesListSchema.parse(applicantsResult);
    const grantee = await idOSGrantee.init({
      granteeSigner: evmGrantee,
      encryptionSecret: ENCRYPTION_KEY_PAIR.secretKey,
      dbId:
        process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
          ? undefined
          : 'x44250024a9bf9599ad7c3fcdb220d2100357dbf263014485174a1ae3',
    });
    const allowed = [];

    for (const address of addresses) {
      const result = await userFilter(grantee, address);
      if (result !== null) {
        allowed.push(result);
      }
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
