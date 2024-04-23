'use client';
import { useCallback } from 'react';
import { Input } from '../components/input';
import { Button } from '../components';

import { Spinner } from '../components/svg/spinner';
import { DataFields } from './contribution/DataFields';
import { useContributeToCtznd } from '@/app/_lib/actions';
import { formatEther } from 'viem';

const getErrorMessage = (amount: number, error: any) => {
  if (amount < 0) {
    return 'The amount must be greater than 0';
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
  const {
    diffToAllowance,
    contributionTxHash,
    amount,
    tokensToBuy,
    tokenError,
    setAmount,
    buyError,
    allowanceError,
    isPending,
    submit: onSubmit,
  } = useContributeToCtznd(userAddress);

  const updateAmount = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.target;
      setAmount(Number(value));
    },
    [setAmount],
  );

  const errorMessage = getErrorMessage(amount, buyError || allowanceError);

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
          onSubmit={onSubmit}
          defaultValue={amount}
          min={0}
        />
        <Input
          label="You Get"
          type="number"
          id="ctnd-amount"
          units="CTND*"
          disabled
          value={tokensToBuy ? formatEther(tokensToBuy).toString() : 0}
          error={tokenError?.shortMessage || tokenError?.message}
          className="col-span-2 md:col-span-1"
        />
        <DataFields />
        <p className="col-span-2 text-mono-800">
          *Contribution amount/token allocation amount fluctuates depending on
          the number of contributors and their desired contribution.
        </p>
      </div>
      {contributionTxHash ? (
        <div className="rounded-b-md bg-green-600 p-4 text-center text-mono-50">
          Contribution submitted
          <p className="break-words text-xs">{contributionTxHash}</p>
        </div>
      ) : (
        <Button
          className="w-full rounded-none"
          onClick={onSubmit}
          disabled={amount <= 0}
          variant={amount <= 0 ? 'primary-disabled' : 'primary'}
        >
          {isPending ? (
            <Spinner />
          ) : diffToAllowance < 0 ? (
            'Allow contribution'
          ) : (
            'Contribute'
          )}
        </Button>
      )}
    </div>
  );
};
