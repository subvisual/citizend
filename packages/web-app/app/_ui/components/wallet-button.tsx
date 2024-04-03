'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDialog } from '@/app/_providers/dialog/context';
import { SettingsDialog } from './dialogs';
import { EdgeBorderButton, EdgeButton } from './edge';

export function WalletButton() {
  const { open } = useDialog();

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
          return <EdgeButton onClick={() => {}}>Connect Wallet</EdgeButton>;

        return (() => {
          if (!connected) {
            return (
              <EdgeButton onClick={openConnectModal}>Connect Wallet</EdgeButton>
            );
          }
          if (chain.unsupported) {
            return (
              <EdgeButton onClick={openChainModal}>Wrong network</EdgeButton>
            );
          }

          return (
            <>
              <EdgeBorderButton
                onClick={() => open(SettingsDialog.displayName)}
              >
                {account.displayBalance}
              </EdgeBorderButton>
            </>
          );
        })();
      }}
    </ConnectButton.Custom>
  );
}
