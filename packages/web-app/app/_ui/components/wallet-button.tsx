'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDialog } from '@/app/_providers/dialog/context';
import { SettingsDialog } from './dialogs';
import { EdgeBorderButton, EdgeButton } from './edge';
import { Avatar } from './avatar';
import { useAccount } from 'wagmi';
import { usePaymentTokenBalance } from '@/app/_lib/queries';
import { mainnet, sepolia } from 'viem/chains';
import { useKyc } from '@/app/_providers/kyc/context';
import { idOSCredentialStatus } from '@/app/_types/idos';

const statusDotMap = {
  pending: 'yellow-500',
  contacted: 'yellow-500',
  rejected: 'red-700',
  expired: 'yellow-500',
};

type TStatus = Exclude<idOSCredentialStatus, 'approved'>;

const StatusDot = ({ status }: { status: TStatus | undefined }) => {
  const color = (status && statusDotMap[status]) || 'red-700';

  return (
    <div
      className={`h-4 w-4 rounded-full bg-${color} absolute -right-1.5 -top-1.5 ml-1 animate-pulse`}
    ></div>
  );
};

const ConnectedButton = () => {
  const { status } = useKyc();
  const { data: balance, formattedValue } = usePaymentTokenBalance();
  const { open } = useDialog();

  if (!balance)
    return (
      <div className="h-14 w-44 animate-pulse rounded-md bg-gradient-to-br from-mono-800 to-mono-900" />
    );

  return (
    <EdgeBorderButton
      avatar={<Avatar />}
      onClick={() => open(SettingsDialog.displayName)}
    >
      {`${formattedValue} ${balance.symbol}`}
      {status !== 'approved' ? <StatusDot status={status} /> : null}
    </EdgeBorderButton>
  );
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
                chain?.id !== sepolia.id) ||
              chain?.id === mainnet.id
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
