'use client';

import { useAccount, useBalance } from 'wagmi';
import { Wallet } from '../../svg/wallet';
import { formatEther } from 'viem';

export const Balance = () => {
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
