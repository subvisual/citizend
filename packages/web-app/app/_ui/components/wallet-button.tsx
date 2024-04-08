'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDialog } from '@/app/_providers/dialog/context';
import { SettingsDialog } from './dialogs';
import { EdgeBorderButton, EdgeButton } from './edge';
import { Avatar } from './avatar';

type TConnectedButtonProps = {
  displayBalance: string;
};

const ConnectedButton = ({ displayBalance }: TConnectedButtonProps) => {
  const { open } = useDialog();

  // should show USDC balance in future, which can be same hook that displays it
  // inside the settings tab

  return (
    <EdgeBorderButton
      avatar={<Avatar />}
      onClick={() => open(SettingsDialog.displayName)}
    >
      {displayBalance}
    </EdgeBorderButton>
  );
};

export function WalletButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;

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
          if (chain.unsupported) {
            return (
              <EdgeButton onClick={openChainModal}>Wrong network</EdgeButton>
            );
          }

          if (account.displayBalance) {
            return <ConnectedButton displayBalance={account.displayBalance} />;
          }
        })();
      }}
    </ConnectButton.Custom>
  );
}
