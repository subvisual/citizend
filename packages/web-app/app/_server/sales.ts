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

export const saleDetails = async () => {
  try {
    const headersList = headers();
    const host = headersList.get('host');

    return [
      {
        project: 'Citizend',
        status: await projectStatus(),
        url: `https://${host}/projects/citizend`,
        logo: `https://${host}/project-citizend-logo.svg`,
        background: `https://${host}/citizend-card-desktop.png`,
        backgroundMobile: `$https://{host}/citizend-card-mobile.png`,
        rate: await contract.read.rate(),
        minTarget: await contract.read.minTarget(),
        maxTarget: await contract.read.maxTarget(),
        start: await contract.read.start(),
        end: await contract.read.end(),
        minContribution: await contract.read.minContribution(),
        maxContribution: await contract.read.maxContribution(),
        totalTokensForSale: await contract.read.totalTokensForSale(),
      },
    ];
  } catch (error) {
    console.log(
      '%c==>',
      'color: green; background: yellow; font-size: 20px',
      error,
    );

    return error;
  }
};
