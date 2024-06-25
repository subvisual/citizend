import { ctzndSaleAddress } from '@/wagmi.generated';
import { TProjectsPublicInfo } from '../types';
import { evmGranteePublicKey } from '../wallet';
import { arbitrum, arbitrumSepolia } from 'viem/chains';

const chainId =
  process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
    ? arbitrumSepolia.id
    : arbitrum.id;
const saleContractAddress = ctzndSaleAddress[chainId];

export const projectsInfo: TProjectsPublicInfo = {
  citizend: {
    id: 'citizend',
    address: saleContractAddress,
    publicKey: evmGranteePublicKey,
  },
};
