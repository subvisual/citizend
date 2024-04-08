'use server';

import { ctzndSaleAbi, ctzndSaleAddress } from '@/wagmi.generated';
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

export const saleDetails = async () => {
  try {
    return [
      {
        project: 'Citizend',
        rate: await contract.read.rate(),
        minTarget: await contract.read.minTarget(),
        maxTarget: await contract.read.maxTarget(),
        start: await contract.read.start(),
        end: await contract.read.end(),
        minContribution: await contract.read.min_contribution(),
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
