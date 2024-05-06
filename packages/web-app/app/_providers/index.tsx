'use client';

import type { ReactNode } from 'react';
import { IdOsProvider } from './idos';
import { wagmiConfig } from './wagmi-config';
import { SsrWrapper } from './ssr-wrapper';
import { DialogProvider } from './dialog';
import { WagmiProvider } from 'wagmi';
import { PersistQueryWrapper } from './persist-query-wrapper';
import { nohemi } from '../_ui/fonts';
import merge from 'lodash.merge';
import {
  RainbowKitProvider,
  darkTheme,
  type Theme,
} from '@rainbow-me/rainbowkit';
import { KycProvider } from './kyc';
import { sepolia } from 'wagmi/chains';
import { switchChain } from '@wagmi/core';

type TProvidersProps = {
  children: ReactNode;
};

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

export function Providers({ children }: TProvidersProps) {
  switchChain(wagmiConfig, { chainId: sepolia.id })

  return (
    <WagmiProvider config={wagmiConfig}>
      <SsrWrapper>
        <PersistQueryWrapper>
          <RainbowKitProvider
            showRecentTransactions={true}
            theme={customTheme}
            modalSize="compact"
          >
            <IdOsProvider>
              <KycProvider>
                <DialogProvider>{children}</DialogProvider>
              </KycProvider>
            </IdOsProvider>
          </RainbowKitProvider>
        </PersistQueryWrapper>
      </SsrWrapper>
    </WagmiProvider>
  );
}
