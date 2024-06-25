'use server';

import { ctzndSaleAbi, ctzndSaleAddress } from '@/wagmi.generated';
import {
  createWalletClient,
  formatEther,
  formatUnits,
  getContract,
  http,
  publicActions,
} from 'viem';
import { arbitrumSepolia, arbitrum } from 'viem/chains';
import { TProjectSaleDetails, TProjectStatus } from '../_types';
import { TInternalError } from './types';
import { evmGrantee, evmGranteePublicKey } from './wallet';
import { calculateTokenPrice } from '../_ui/utils/calculateTokenPrice';

const config =
  process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
    ? {
      chain: arbitrumSepolia,
      transport: http(),
    }
    : {
      chain: arbitrum,
      transport: http(),
    };

const client = createWalletClient(config).extend(publicActions);

const contract = getContract({
  address: ctzndSaleAddress[config.chain.id],
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
      contract.read.minTokensForSale(),
      contract.read.maxTokensForSale(),
      contract.read.startRegistration(),
      contract.read.endRegistration(),
      contract.read.totalUncappedAllocations(),
    ]);

    const usdc = await contract.read.tokenToPaymentToken([contractResults[11]]);
    const currentPrice = calculateTokenPrice(Number(formatUnits(usdc, 6)));

    return [
      {
        address: contract.address,
        publicKey: evmGranteePublicKey,
        project: 'citizend',
        description: 'The community-curated token launch platform of web3.',
        status: contractResults[0],
        rate: contractResults[1],
        minTarget: contractResults[2],
        maxTarget: contractResults[3],
        start: contractResults[4] * 1000n,
        end: contractResults[5] * 1000n,
        minContribution: formatUnits(contractResults[6], 6),
        maxContribution: formatUnits(contractResults[7], 6),
        minTokensForSale: formatEther(contractResults[8]),
        maxTokensForSale: formatEther(contractResults[9]),
        startRegistration: contractResults[10] * 1000n,
        endRegistration: contractResults[11] * 1000n,
        url: `${host}/projects/citizend`,
        logo: `${host}/project-citizend-logo.svg`,
        background: `${host}/citizend-card-desktop.png`,
        backgroundMobile: `${host}/citizend-card-mobile.png`,
        supplyPercentage: '2.5%',
        currentPrice: currentPrice,
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
