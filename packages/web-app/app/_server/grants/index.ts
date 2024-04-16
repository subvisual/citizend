'use server';

import {
  Hash,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import { grantsAbi } from './abi';
import { TInternalError } from '../types';

const account = privateKeyToAccount(
  process.env.NEXT_CITIZEND_WALLET_PRIVATE_KEY,
);

const client = createWalletClient({
  account,
  chain: arbitrumSepolia,
  transport: http(),
}).extend(publicActions);

const contract = getContract({
  address: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS,
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

export const getProjectGrants = async (granteeAddress: string) => {
  try {
    const result = await contract.read.grantsFor([
      granteeAddress,
      WILDCARD_DATA_ID,
    ]);

    return result;
  } catch (error) {
    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      error,
    );

    return error;
  }
};
