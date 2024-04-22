'use client';
import { useCallback, useMemo, useState } from 'react';
import { Input } from '../components/input';
import { Button } from '../components';
import {
  useReadCtzndSaleMaxContribution,
  useReadCtzndSaleMinContribution,
  useReadCtzndSaleInvestorCount,
  useReadCtzndSaleMaxTarget,
  useReadCtzndSaleMinTarget,
  useWriteCtzndSaleBuy,
  useReadCtzndSaleRate,
} from '@/wagmi.generated';
import { formatEther } from 'viem';
import { usdValue } from '../utils/intl-formaters/usd-value';

const useMaxParticipants = () => {
  const { data: maxTarget } = useReadCtzndSaleMaxTarget();
  const { data: minTarget } = useReadCtzndSaleMinTarget();

  if (!maxTarget || !minTarget) return 0;

  return BigInt(maxTarget) - BigInt(minTarget);
};

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

export const ProjectContribution = () => {
  const [amount, setAmount] = useState(0);
  const updateAmount = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.target;
      setAmount(Number(value));
    },
    [],
  );
  const { data: maxContribution } = useReadCtzndSaleMaxContribution();
  const { data: minContribution } = useReadCtzndSaleMinContribution();
  const { data: investorCount } = useReadCtzndSaleInvestorCount();
  const { data: saleRate } = useReadCtzndSaleRate();
  const ctndTokens = useMemo(
    () => (saleRate && amount ? BigInt(amount) * BigInt(saleRate) : 0),
    [saleRate, amount],
  );

  const { writeContract, data, isError, isPending, isPaused, error } =
    useWriteCtzndSaleBuy();
  const maxParticipants = useMaxParticipants();
  const onSubmit = () => {
    writeContract({ args: [BigInt(amount)] });
  };

  const errorMessage = getErrorMessage(amount, error);

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
        />
        <Input
          label="You Get"
          type="number"
          id="ctnd-amount"
          units="CTND*"
          disabled
          value={ctndTokens.toString()}
          className="col-span-2 md:col-span-1"
        />
        <div className="md:col-span-2">
          <p className="text-mono-800">Current price</p>
          <p>0.1 USDC*</p>
        </div>
        <div>
          <p className="text-mono-800">Min. contribution</p>
          <p>{minContribution ? usdValue(formatEther(minContribution)) : ''}</p>
        </div>
        <div>
          <p className="text-mono-800">Max. contribution</p>
          <p>{maxContribution ? usdValue(formatEther(maxContribution)) : ''}</p>
        </div>
        <div>
          <p className="text-mono-800">Current contributors</p>
          <p>{investorCount?.toString()}</p>
        </div>
        <div>
          <p className="text-mono-800">Max. participants</p>
          <p>{maxParticipants.toString()}</p>
        </div>
        <p className="col-span-2 text-mono-800">
          *Contribution amount/token allocation amount fluctuates depending on
          the number of contributors and their desired contribution.
        </p>
      </div>
      <Button
        variant="primary"
        className="w-full rounded-none"
        onClick={onSubmit}
      >
        Contribute
      </Button>
    </div>
  );
};
