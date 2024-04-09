'use server';

import { ctzndSaleAbi, ctzndSaleAddress } from '@/wagmi.generated';
import { headers } from 'next/headers';
import { createWalletClient, getContract, http, publicActions } from 'viem';
import { sepolia } from 'viem/chains';

const client = createWalletClient({
  chain: sepolia,
  transport: http(),
}).extend(publicActions);

const contract = getContract({
  address: ctzndSaleAddress[sepolia.id],
  abi: ctzndSaleAbi,
  client,
});

export type TProjectStatus = 'completed' | 'upcoming' | 'live';

const projectStatus = async () => {
  const start = await contract.read.start();
  const end = await contract.read.end();
  const current = Date.now();

  if (current > end) {
    return 'completed';
  }

  if (current < start) {
    return 'upcoming';
  }

  return 'live';
};

export type TProjectSaleDetails = {
  project: string;
  status: TProjectStatus;
  url: string;
  logo: string;
  background: string;
  backgroundMobile: string;
  rate: BigInt;
  minTarget: BigInt;
  maxTarget: BigInt;
  start: BigInt;
  end: BigInt;
  minContribution: BigInt;
  maxContribution: BigInt;
  totalTokensForSale: BigInt;
};

export const saleDetails = async (): Promise<
  TProjectSaleDetails[] | unknown
> => {
  try {
    const headersList = headers();
    const host = headersList.get('host');

    // run requests in parallel
    const contractResults = await Promise.all([
      await projectStatus(),
      contract.read.rate(),
      contract.read.minTarget(),
      contract.read.maxTarget(),
      contract.read.start(),
      contract.read.end(),
      contract.read.minContribution(),
      contract.read.maxContribution(),
      contract.read.totalTokensForSale(),
    ]);

    return [
      {
        project: 'Citizend',
        status: contractResults[0],
        rate: contractResults[1],
        minTarget: contractResults[2],
        maxTarget: contractResults[3],
        start: contractResults[4],
        end: contractResults[5],
        minContribution: contractResults[6],
        maxContribution: contractResults[7],
        totalTokensForSale: contractResults[8],
        url: `https://${host}/projects/citizend`,
        logo: `https://${host}/project-citizend-logo.svg`,
        background: `https://${host}/citizend-card-desktop.png`,
        backgroundMobile: `https://${host}/citizend-card-mobile.png`,
      },
    ];
  } catch (error) {
    return error;
  }
};
