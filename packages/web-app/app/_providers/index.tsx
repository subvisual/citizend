'use client';

import { useEffect, type ReactNode } from 'react';
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
import { arbitrumSepolia, arbitrum } from 'wagmi/chains';
import { AppSignalWrapper } from './app-signal-wrapper';
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
      switchChain({ chainId: arbitrumSepolia.id });
    } else {
      switchChain({ chainId: arbitrum.id });
    }
  }, [switchChain]);

  return children;
};

export function Providers({ children }: TProvidersProps) {
  return (
    <AppSignalWrapper>
      <WagmiProvider config={wagmiConfig}>
        <SsrWrapper>
          <PersistQueryWrapper>
            <ChainWrapper>
              <RainbowKitProvider
                showRecentTransactions={true}
                theme={customTheme}
                modalSize="compact"
              >
                <DialogProvider>{children}</DialogProvider>
              </RainbowKitProvider>
            </ChainWrapper>
          </PersistQueryWrapper>
        </SsrWrapper>
      </WagmiProvider>
    </AppSignalWrapper>
  );
}
