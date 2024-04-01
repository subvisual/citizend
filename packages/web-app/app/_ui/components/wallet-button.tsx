'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDialog } from '@/app/_providers/dialog/context';
import { SettingsDialog } from './dialogs';

type TButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex text-blue-500 hover:text-blue-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="56"
        viewBox="0 0 16 56"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1.66992 10.509L12.0173 1.27031C12.9336 0.452189 14.1189 0 15.3473 0H16V56H5C2.23858 56 0 53.7614 0 51V14.2387C0 12.8144 0.607458 11.4576 1.66992 10.509Z"
          fill="currentColor"
        />
      </svg>
      <div className="bor flex h-14 w-48 items-center justify-center bg-blue-500 px-2 font-medium text-mono-50 group-hover:bg-blue-400">
        {children}
      </div>
      <svg
        width="16"
        height="56"
        viewBox="0 0 16 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M14.3301 45.491L3.98275 54.7297C3.06645 55.5478 1.88105 56 0.652668 56H0V0H11C13.7614 0 16 2.23857 16 5V41.7613C16 43.1856 15.3925 44.5424 14.3301 45.491Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

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
          return <Button onClick={() => {}}>Connect Wallet</Button>;

        return (() => {
          if (!connected) {
            return <Button onClick={openConnectModal}>Connect Wallet</Button>;
          }
          if (chain.unsupported) {
            return <Button onClick={openChainModal}>Wrong network</Button>;
          }
          return (
            <>
              <Button onClick={() => open(SettingsDialog.displayName)}>
                {account.displayName}
              </Button>
            </>
          );
        })();
      }}
    </ConnectButton.Custom>
  );
}
