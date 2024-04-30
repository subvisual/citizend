import * as Base64Codec from '@stablelib/base64';
import { ServerPublicInfo } from '../types';
import { getGrants, getProjectApplicants } from './grants';
import { addressesListSchema, grantsSchema } from '../../_types/schemas';
import { isValidGrant } from '@/app/_lib/utils';
import { blockedCountries } from '../blocked-countries';
import { idOSGrantee } from './idos-grantee';
import { ENCRYPTION_KEY_PAIR, evmGrantee } from '../wallet';

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
    const grants = grantsSchema
      .parse(grantsResult)
      ?.filter((grant) => isValidGrant(grant.lockedUntil));

    if (!grants.length) return null;

    const country = await grantee.fetchUserCountryFromSharedPlusCredential(
      grants[0].dataId,
    );

    if (!country) return null;

    const isBlockedCountry = blockedCountries.some(
      (blockedCountry) => blockedCountry === country,
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
  encryptionPublicKey: Base64Codec.encode(ENCRYPTION_KEY_PAIR.publicKey),
  lockTimeSpanSeconds: 3600 * 24 * 365, // one year?
};
