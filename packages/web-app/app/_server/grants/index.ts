'use server';

import {
  Hash,
  createWalletClient,
  getContract,
  http,
  publicActions,
  zeroAddress,
} from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import { grantsAbi } from './abi';
import { TInternalError } from '../types';
import { z } from 'zod';
import { Grant } from '@/app/_types/idos';

const account = privateKeyToAccount(
  process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY,
);

const client = createWalletClient({
  account,
  chain: arbitrumSepolia,
  transport: http(),
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

const grantSchema = z.object({
  owner: z.string(),
  grantee: z.string(),
  dataId: z.string(),
  lockedUntil: z.bigint(),
});
const grantsSchema = z.array(grantSchema);

export const getGrants = async ({
  owner,
  grantee,
  dataId,
}: {
  owner: string;
  grantee?: string;
  dataId?: string;
}) => {
  try {
    const result = await contract.read.findGrants([
      owner,
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
