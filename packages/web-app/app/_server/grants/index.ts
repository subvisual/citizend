'use server';

import {
  Hash,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import { grantsAbi } from './abi';

const serverAccount =
  '0xb217fdfe3b8bbf98da8cda18b1cef6f422187feffca83289d715f46bc62abbd1';
const account = privateKeyToAccount(serverAccount);

const client = createWalletClient({
  account,
  chain: sepolia,
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
}: TInsertGrantBySignature): Promise<Hash | null> => {
  try {
    const { request } = await contract.simulate.insertGrantBySignature([
      owner,
      grantee,
      dataId,
      expiration,
      signature,
    ]);

    if (!request) {
      return null;
    }
    const hash = await client.writeContract(request);

    return hash;
  } catch (error) {
    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      error,
    );
    return null;
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
