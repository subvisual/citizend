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
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [foundry, arbitrumSepolia]
      : []),
  ],
  transports: {
    [arbitrum.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM),
    [arbitrumSepolia.id]: http(
      process.env.NEXT_PUBLIC_ALCHEMY_ARBITRUM_SEPOLIA,
    ),
    [mainnet.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_MAINNET),
    [sepolia.id]: http(process.env.NEXT_PUBLIC_ALCHEMY_SEPOLIA),
  },
  ssr: true,
});
