import {
  arbitrum,
  arbitrumSepolia,
  foundry,
  mainnet,
  sepolia,
} from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';

export const wagmiConfig = getDefaultConfig({
  appName: 'Citizend',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID,
  chains: [
    mainnet,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [foundry, sepolia, arbitrumSepolia]
      : []),
  ],
  transports: {
    [mainnet.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_MAINNET),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA),
  },
  ssr: true,
});
