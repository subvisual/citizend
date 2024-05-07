'use client';

import { useEffect, type ReactNode } from 'react';
import { IdOsProvider } from './idos';
import { wagmiConfig } from './wagmi-config';
import { SsrWrapper } from './ssr-wrapper';
import { DialogProvider } from './dialog';
import { WagmiProvider, useSwitchChain } from 'wagmi';
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

const ChainWrapper = ({ children }: TProvidersProps) => {
  const { switchChain } = useSwitchChain();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true') {
      switchChain({ chainId: sepolia.id });
    }
  }, [switchChain]);

  return children;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <SsrWrapper>
        <PersistQueryWrapper>
          <ChainWrapper>
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
          </ChainWrapper>
        </PersistQueryWrapper>
      </SsrWrapper>
    </WagmiProvider>
  );
}
