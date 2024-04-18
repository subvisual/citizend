// adapted from https://github.dev/idos-network/idos-sdk-js/tree/main/apps/idos-example-dapp

import * as Base64Codec from '@stablelib/base64';
import { ethers } from 'ethers';
import nacl from 'tweetnacl';
import { ServerPublicInfo } from '../types';
import { hexToBytes } from 'viem';
import { getGrants, getProjectApplicants } from './grants';
import { addressesListSchema, grantsSchema } from '../../_types/schemas';
import { isValidGrant } from '@/app/_lib/utils';
import { blockedCountries } from '../blocked-countries';
import { idOSGrantee } from './idos-grantee';

export interface idOSGrant {
  content: string;
  encryption_public_key: string;
}

const ENCRYPTION_SECRET_KEY = hexToBytes(
  process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY,
);

const EVM_GRANTEE_PRIVATE_KEY = process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY;
const ENCRYPTION_KEY_PAIR = nacl.box.keyPair.fromSecretKey(
  ENCRYPTION_SECRET_KEY,
);

const EVM_NODE_URL = 'https://ethereum-sepolia.publicnode.com';
const evmGrantee = new ethers.Wallet(
  EVM_GRANTEE_PRIVATE_KEY,
  new ethers.JsonRpcProvider(EVM_NODE_URL),
);

const userFilter = async (grantee: idOSGrantee, userAddress: string) => {
  const grantsResult = await getGrants({
    owner: userAddress,
    grantee: evmGrantee.address,
  });
  const grants = grantsSchema
    .parse(grantsResult)
    ?.filter((grant) => isValidGrant(grant.lockedUntil));

  if (!grants.length) throw new Error('No valid grants found');

  const country = await grantee.fetchUserCountryFromSharedCredential(
    grants[0].dataId,
  );

  if (!country) throw new Error('No country found');

  const isBlockedCountry = blockedCountries.some(
    (blockedCountry) => blockedCountry === country,
  );

  if (isBlockedCountry) return null;

  return userAddress;
};

export const getAllowedProjectApplicants = async (projectAddress: string) => {
  try {
    const applicantsResult = await getProjectApplicants(projectAddress);
    const addresses = addressesListSchema.parse(applicantsResult);
    const grantee = await idOSGrantee.init({
      granteeSigner: evmGrantee,
      encryptionSecret: ENCRYPTION_SECRET_KEY,
    });

    const result = await Promise.all(
      addresses.map(async (address) => userFilter(grantee, address)),
    ).then((results) => results.filter((element) => element !== null));

    return result as string[];
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
