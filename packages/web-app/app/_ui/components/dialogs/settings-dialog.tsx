'use client';

import { Dialog } from '@headlessui/react';
import { Button } from '..';
import { useDialog } from '@/app/_providers/dialog/context';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { formatEther } from 'viem';
import { useIdOS } from '@/app/_providers/idos';
import Link from 'next/link';
import { useKyc } from '@/app/_providers/kyc/context';
import { Close } from '../svg/close';
import { Avatar } from '../avatar';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { useCallback, useMemo } from 'react';
import { Clipboard } from '../svg/clipboard';
import { formatAddress } from '../../utils/formatAddress';
import { Check } from '../svg/check';
import { Wallet } from '../svg/wallet';
import { ID } from '../svg/id';
import { Disconnect } from '../svg/disconnect';

const Credentials = () => {
  const { isLoading, status } = useKyc();

  if (isLoading) return <div>Loading...</div>;

  if (status === 'approved') return <div>Verified</div>;

  return <div>Awaiting Approval</div>;
};

const Status = () => {
  const { hasProfile, getProviderUrl, address } = useIdOS();

  if (!address) return;

  if (!hasProfile) {
    return (
      <>
        <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-red-700"></div>
        <h4>Not verified</h4>
        <p className="text-start">
          To be able to contribute to this project, you must complete ID Basic
          verification.
        </p>
        <Link
          href={getProviderUrl(address)}
          className="select-none rounded-md text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
        >
          Verify my ID
        </Link>
      </>
    );
  }

  return <Credentials />;
};

const IdStatus = () => (
  <>
    <div className="min-w-6">
      <ID />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h3 className="text-sm text-mono-800">Id Status</h3>
      <Status />
    </div>
  </>
);

const Balance = () => {
  const { address } = useAccount();
  const balance = useBalance({
    address: address,
    blockTag: 'latest',
  });

  return (
    <>
      <Wallet />
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-sm text-mono-800">Balance</h3>
        <p className="font-medium">
          {balance?.data?.formatted ? formatEther(balance?.data.value) : null}{' '}
          {balance.data?.symbol}
        </p>
      </div>
    </>
  );
};

const Address = () => {
  const [copiedText, copy] = useCopyToClipboard();
  const { address } = useIdOS();
  const displayAddress = useMemo(() => {
    if (!address) return;

    return formatAddress(address);
  }, [address]);

  const handleClick = useCallback(() => {
    if (!address) return;

    copy(address);
  }, [address, copy]);

  if (!address) return null;

  return (
    <div>
      <label htmlFor="address" className="sr-only">
        Account Address
      </label>
      <Button
        variant="secondary"
        onClick={handleClick}
        className="content-center items-center gap-1 pb-0 pl-0 pr-0 pt-0 font-normal text-mono-950 hover:text-blue-400"
      >
        <div>{displayAddress}</div>
        {copiedText ? <Check /> : <Clipboard />}
      </Button>
    </div>
  );
};

const Divider = () => (
  <div className="relative flex justify-center">
    <span className="bg-mono-300 px-2 text-sm text-gray-500">Continue</span>
  </div>
);

export function SettingsDialog() {
  const { disconnect } = useDisconnect();

  return (
    <>
      <Dialog.Title
        as="h4"
        className="relative flex w-full justify-center pb-6 text-mono-950"
      >
        <div className="">Settings</div>
      </Dialog.Title>
      <div className="flex flex-col divide-y divide-mono-300">
        <div className="flex items-center gap-3 pb-6">
          <Avatar />
          <Address />
        </div>
        <div className="flex gap-2 py-6">
          <Balance />
        </div>
        <div className="relative flex gap-2 py-6">
          <IdStatus />
        </div>
        <div className="flex gap-2 pt-6">
          <Disconnect />
          <Button
            variant="secondary"
            className="pb-0 pl-0 pr-0 pt-0 font-normal text-mono-950 hover:text-blue-400"
            onClick={() => {
              disconnect();
              close();
            }}
          >
            Disconnect
          </Button>
        </div>
      </div>
    </>
  );
}

SettingsDialog.displayName = 'settingsDialog';
