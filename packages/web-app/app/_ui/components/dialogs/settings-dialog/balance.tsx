'use client';

import { useAccount, useBalance } from 'wagmi';
import { Wallet } from '../../svg/wallet';
import { formatEther } from 'viem';
import { usePaymentTokenBalance } from '@/app/_lib/queries';

export const Balance = () => {
  const { data: balance, formattedValue } = usePaymentTokenBalance();

  if (!balance)
    return (
      <div className="h-6 w-44 animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
    );

  return (
    <>
      <Wallet />
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-sm text-mono-800">Balance</h3>
        <p className="font-medium">{`${formattedValue} ${balance.symbol}`}</p>
      </div>
    </>
  );
};
