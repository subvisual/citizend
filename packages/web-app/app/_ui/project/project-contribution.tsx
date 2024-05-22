'use client';

import { useCallback } from 'react';
import { Input } from '../components/input';
import { Button } from '../components';
import { DataFields } from './contribution/DataFields';
import { useDialog } from '@/app/_providers/dialog/context';
import { ContributeDialog } from '../components/dialogs/contribute-dialog';
import { useContributeToCtznd } from '@/app/_lib/hooks';
import Link from 'next/link';
import { calculateTokenPrice } from '../utils/calculateTokenPrice';
import { useTotalInvestedUsdcCtznd } from '@/app/_lib/queries';

const getErrorMessage = (
  amount: number,
  maxAmount: number,
  minAmount: number,
  error: any,
) => {
  if (amount < 0) {
    return 'The amount must be greater than 0';
  }

  // 0 is the default/initial value
  if (amount > 0 && amount < minAmount) {
    return 'The amount is below the minimum contribution';
  }

  if (amount > maxAmount) {
    return 'The amount exceeds the maximum balance';
  }

  if (error?.shortMessage) {
    return error.shortMessage;
  }

  if (error) {
    return error?.message || 'An error occurred';
  }

  return null;
};

type TProjectContribution = {
  userAddress: `0x${string}`;
};

export const ProjectContribution = ({ userAddress }: TProjectContribution) => {
  const { open } = useDialog();
  const {
    maxAmount,
    minAmount,
    amount,
    amountInWei,
    tokensToBuyInSzabo,
    tokensToBuyInWei,
    tokensToBuy,
    error,
    setAmount,
  } = useContributeToCtznd();
  const totalContributions = useTotalInvestedUsdcCtznd();
  const currentTokenPrice = calculateTokenPrice(Number(totalContributions));

  const updateAmount = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.target;
      setAmount(Number(value));
    },
    [setAmount],
  );

  const onClick = useCallback(() => {
    if (!amount || !tokensToBuy) return;
    return open(ContributeDialog.displayName, {
      userAddress,
      amount,
      amountInWei,
      tokensToBuy,
      tokensToBuyInWei,
      tokensToBuyInSzabo,
    });
  }, [
    open,
    amount,
    tokensToBuy,
    amountInWei,
    tokensToBuyInWei,
    userAddress,
    tokensToBuyInSzabo,
  ]);

  const errorMessage = getErrorMessage(amount, maxAmount, minAmount, error);

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
        <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
          Your Contribution
        </h4>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 p-4 md:p-6">
          <Input
            variant="number"
            onChange={updateAmount}
            label="Your Contribution"
            type="number"
            id="usdc-amount"
            units="USDC"
            error={errorMessage}
            className="col-span-2 md:col-span-1"
            onSubmit={onClick}
            defaultValue={amount}
            min={minAmount}
          />
          <Input
            label="You Get"
            type="number"
            id="ctnd-amount"
            units="CTND*"
            disabled
            value={(amount / currentTokenPrice).toFixed(0)}
            className="col-span-2 md:col-span-1"
          />
          <p className="col-span-2 text-mono-800">
            Please keep in mind that you may not get your full desired
            contribution and price/token may vary as the sale progresses.
          </p>
        </div>
        <DataFields />
        <Button
          className="w-full rounded-none"
          onClick={onClick}
          disabled={amount < minAmount || !!errorMessage}
          variant={
            amount < minAmount || !!errorMessage
              ? 'primary-disabled'
              : 'primary'
          }
        >
          Contribute
        </Button>
      </div>
      <div className="px-6 pt-5 text-mono-400">
        By clicking &quot;Contribute&quot; you agree to the platform{' '}
        <Link href={''} className="text-mono-50">
          Terms and Conditions{' '}
        </Link>
        and confirm you read the{' '}
        <Link href={''} className="text-mono-50">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
};
