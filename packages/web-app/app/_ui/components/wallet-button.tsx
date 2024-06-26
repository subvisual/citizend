'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDialog } from '@/app/_providers/dialog/context';
import { SettingsDialog } from './dialogs';
import { EdgeBorderButton, EdgeButton } from './edge';
import { Avatar } from './avatar';
import { useAccount } from 'wagmi';
import { usePaymentTokenBalance } from '@/app/_lib/queries';
import { arbitrum, arbitrumSepolia } from 'viem/chains';

const SignedButton = () => {
  const { data: balance, formattedValue } = usePaymentTokenBalance();
  const { open } = useDialog();

  return (
    <EdgeBorderButton
      avatar={<Avatar />}
      onClick={() => open(SettingsDialog.displayName)}
    >
      {`${formattedValue} ${balance?.symbol}`}
    </EdgeBorderButton>
  );
};

const ConnectedButton = () => {
  const { data: balance } = usePaymentTokenBalance();

  if (!balance)
    return (
      <div className="h-14 w-44 animate-pulse rounded-md bg-gradient-to-br from-mono-800 to-mono-900" />
    );

  return <SignedButton />;
};

export function WalletButton() {
  const { isConnected } = useAccount();

  return (
    <div className="h-14">
      <ConnectButton.Custom>
        {({ account, chain, openChainModal, openConnectModal, mounted }) => {
          const connected = mounted && account && chain && isConnected;

          if (!mounted)
            // TODO: Disabled
            return (
              <EdgeButton onClick={() => {}}>
                <span>Connect</span>
                <span className="hidden pl-1 md:flex">Wallet</span>
              </EdgeButton>
            );

          return (() => {
            if (!connected) {
              return (
                <EdgeButton onClick={openConnectModal}>
                  <span>Connect</span>
                  <span className="hidden pl-1 md:flex">Wallet</span>
                </EdgeButton>
              );
            }

            if (
              (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' &&
                chain?.id !== arbitrumSepolia.id) ||
              (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'false' &&
                chain?.id !== arbitrum.id)
            ) {
              return (
                <EdgeButton onClick={openChainModal}>Wrong network</EdgeButton>
              );
            }

            if (account.displayBalance) {
              return <ConnectedButton />;
            }

            return (
              <div className="h-14 w-44 animate-pulse rounded-md bg-gradient-to-br from-mono-800 to-mono-900" />
            );
          })();
        }}
      </ConnectButton.Custom>
    </div>
  );
}
