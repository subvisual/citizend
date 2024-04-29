'use client';
import { useCallback } from 'react';
import { Input } from '../components/input';
import { Button } from '../components';

import { Spinner } from '../components/svg/spinner';
import { DataFields } from './contribution/DataFields';
import { formatEther } from 'viem';
import { useDialog } from '@/app/_providers/dialog/context';
import { ContributeDialog } from '../components/dialogs/contribute-dialog';
import { useContributeToCtznd } from '@/app/_lib/hooks';

const getErrorMessage = (amount: number, maxAmount: number, error: any) => {
  if (amount < 0) {
    return 'The amount must be greater than 0';
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
    amount,
    amountInWei,
    tokensToBuyInWei,
    tokensToBuy,
    error,
    setAmount,
  } = useContributeToCtznd();

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
    });
  }, [open, amount, tokensToBuy, amountInWei, tokensToBuyInWei, userAddress]);

  const errorMessage = getErrorMessage(amount, maxAmount, error);

  return (
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
          min={0}
        />
        <Input
          label="You Get"
          type="number"
          id="ctnd-amount"
          units="CTND*"
          disabled
          value={tokensToBuy}
          className="col-span-2 md:col-span-1"
        />
        <DataFields />
        <p className="col-span-2 text-mono-800">
          *Contribution amount/token allocation amount fluctuates depending on
          the number of contributors and their desired contribution.
        </p>
      </div>
      {/* {contributionTxHash ? (
        <div className="rounded-b-md bg-green-600 p-4 text-center text-mono-50">
          Contribution submitted
          <p className="break-words text-xs">{contributionTxHash}</p>
        </div>
      ) : ( */}
      <Button
        className="w-full rounded-none"
        onClick={onClick}
        disabled={amount <= 0 || !!errorMessage}
        variant={amount <= 0 || !!errorMessage ? 'primary-disabled' : 'primary'}
      >
        Contribute
        {/* {isPending ? (
            <Spinner />
          ) : diffToAllowance < 0 ? (
            'Allow contribution'
          ) : (
            'Contribute'
          )} */}
      </Button>
      {/* )} */}
    </div>
  );
};
