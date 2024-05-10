'use server';

import {
  Hash,
  createWalletClient,
  getContract,
  http,
  publicActions,
  zeroAddress,
} from 'viem';
import { arbitrumSepolia, arbitrum } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import { grantsAbi } from './abi';
import { TInternalError } from '../../types';
import { Grant } from '@/app/_types/idos';
import { grantsSchema } from '@/app/_types/schemas';

const account = privateKeyToAccount(
  process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY,
);

const config =
  process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
    ? {
        chain: arbitrumSepolia,
        transport: http(process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_SEPOLIA),
      }
    : {
        chain: arbitrum,
        transport: http(process.env.NEXT_PUBLIC_AlCHEMY_ARBITRUM),
      };

const client = createWalletClient({
  account,
  ...config,
}).extend(publicActions);

const contract = getContract({
  address: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS_ARBITRUM,
  abi: grantsAbi,
  client,
});

const WILDCARD_DATA_ID = '0';

type TInsertGrantBySignature = {
  owner: string;
  grantee: string;
  dataId: string;
  expiration: number;
  signature: string;
};

export const insertGrantBySignature = async ({
  owner,
  grantee,
  dataId,
  expiration,
  signature,
}: TInsertGrantBySignature): Promise<Hash | TInternalError> => {
  try {
    const { request } = await contract.simulate.insertGrantBySignature([
      owner,
      grantee,
      dataId,
      expiration,
      signature,
    ]);

    if (!request) {
      return { error: 'Error simulating insert grant' };
    }
    const hash = await client.writeContract(request);

    return hash;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Error inserting grant' };
  }
};

export const getGrants = async ({
  owner,
  grantee,
  dataId,
}: {
  owner?: string;
  grantee?: string;
  dataId?: string;
}) => {
  try {
    if (!owner && !grantee)
      throw new Error('Owner or grantee must be provided');

    const result = await contract.read.findGrants([
      owner || zeroAddress,
      grantee || zeroAddress,
      dataId || WILDCARD_DATA_ID,
    ]);

    const grants: Grant[] = grantsSchema.parse(result);

    return grants;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Error retrieving grant' };
  }
};

export const getProjectApplicants = async (projectAddress: string) => {
  try {
    const getGrantsResult = await getGrants({ grantee: projectAddress });
    const projectGrants: Grant[] = grantsSchema.parse(getGrantsResult);
    const userAddresses = projectGrants.map((grant) => grant.owner);

    return userAddresses;
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Error retrieving applied addresses' };
  }
};
