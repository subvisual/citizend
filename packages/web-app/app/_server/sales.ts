'use server';

import { ctzndSaleAbi, ctzndSaleAddress } from '@/wagmi.generated';
import {
  createWalletClient,
  formatEther,
  getContract,
  http,
  publicActions,
} from 'viem';
import { mainnet, sepolia } from 'viem/chains';
import { TProjectSaleDetails, TProjectStatus } from '../_types';
import { TInternalError } from './types';

const config = process.env.NEXT_PUBLIC_ENABLE_TESTNETS
  ? {
      chain: sepolia,
      transport: http(process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA),
    }
  : {
      chain: mainnet,
      transport: http(process.env.NEXT_PUBLIC_ALCHEMY_MAINNET),
    };

const client = createWalletClient(config).extend(publicActions);

const contract = getContract({
  address: ctzndSaleAddress[sepolia.id],
  abi: ctzndSaleAbi,
  client,
});

const projectStatus = async (): Promise<TProjectStatus> => {
  const start = (await contract.read.start()) * 1000n;
  const end = (await contract.read.end()) * 1000n;
  const current = Date.now();

  if (current > end) {
    return 'completed';
  }

  if (current < start) {
    return 'upcoming';
  }

  return 'live';
};

export const saleDetails = async (): Promise<
  TProjectSaleDetails[] | TInternalError
> => {
  try {
    const host = process.env.NEXT_PUBLIC_DAPP_HOST;

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
        address: '0x2d49d75Ca03041051a7488e28fc98906ac711873',
        publicKey: 'hPMGAtHXQlHhv30U8k8vQ7dyW70nm9OFLdA9lskwdRQ=',
        project: 'citizend',
        status: contractResults[0],
        rate: contractResults[1],
        minTarget: contractResults[2],
        maxTarget: contractResults[3],
        start: contractResults[4] * 1000n,
        end: contractResults[5] * 1000n,
        minContribution: formatEther(contractResults[6]),
        maxContribution: formatEther(contractResults[7]),
        totalTokensForSale: contractResults[8],
        startRegistration: contractResults[9] * 1000n,
        endRegistration: contractResults[10] * 1000n,
        url: `${host}/projects/citizend`,
        logo: `${host}/project-citizend-logo.svg`,
        background: `${host}/citizend-card-desktop.png`,
        backgroundMobile: `${host}/citizend-card-mobile.png`,
      },
    ];
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      return { error: error.message };
    }

    return { error: 'Error fetching sale details from contract' };
  }
};
