'use server';

import { ctzndSaleAbi, ctzndSaleAddress } from '@/wagmi.generated';
import { headers } from 'next/headers';
import { createWalletClient, getContract, http, publicActions } from 'viem';
import { sepolia } from 'viem/chains';
import { TProjectSaleDetails, TProjectStatus } from '../_types';

const client = createWalletClient({
  chain: sepolia,
  transport: http(),
}).extend(publicActions);

const contract = getContract({
  address: ctzndSaleAddress[sepolia.id],
  abi: ctzndSaleAbi,
  client,
});

const projectStatus = async (): Promise<TProjectStatus> => {
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

export const saleDetails = async (): Promise<TProjectSaleDetails[] | Error> => {
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
      contract.read.startRegistration(),
      contract.read.endRegistration(),
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
        startRegistration: contractResults[9],
        endRegistration: contractResults[10],
        url: `https://${host}/projects/citizend`,
        logo: `https://${host}/project-citizend-logo.svg`,
        background: `https://${host}/citizend-card-desktop.png`,
        backgroundMobile: `https://${host}/citizend-card-mobile.png`,
      },
    ];
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return error;
    }

    return new Error('Error fetching sale details from contract');
  }
};
