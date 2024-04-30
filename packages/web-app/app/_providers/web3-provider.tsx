'use client';

import { WagmiProvider } from 'wagmi';
import {
  RainbowKitProvider,
  darkTheme,
  type Theme,
} from '@rainbow-me/rainbowkit';
import { TChildren } from '@/app/_types';
import { nohemi } from '../_ui/fonts';
import merge from 'lodash.merge';
import { wagmiConfig } from './wagmi-config';

const customTheme = merge(
  darkTheme({
    overlayBlur: 'small',
    accentColor: '#3865FD',
    accentColorForeground: '#FFF',
  }),
  {
    fonts: {
      body: nohemi.style.fontFamily,
    },
  },
) as Theme;

export function Web3Provider({ children }: TChildren) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider
        showRecentTransactions={true}
        theme={customTheme}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
