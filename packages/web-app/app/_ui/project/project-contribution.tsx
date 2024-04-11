'use client';
import { useCallback, useState } from 'react';
import { Input } from '../components/input';

export const ProjectContribution = () => {
  const [amount, setAmount] = useState(0);
  const updateAmount = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.target;
      setAmount(Number(value));
    },
    [],
  );

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Your Contribution
      </h4>
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 p-4">
        <Input
          onChange={updateAmount}
          label="Your Contribution"
          type="number"
          id="usdc-amount"
          units="USDC"
          error={amount < 0 ? 'The amount must be greater than 0' : ''}
          className="col-span-2 md:col-span-1"
        />
        <Input
          onChange={updateAmount}
          label="You Get"
          type="number"
          id="ctnd-amount"
          units="CTND"
          disabled
          className="col-span-2 md:col-span-1"
        />
        <div className="md:col-span-2">
          <p className="text-mono-800">Current price</p>
          <p>0.1 USDC*</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-mono-800">Min. contribution</p>
          <p>200 USDC</p>
        </div>
        <div>
          <p className="text-mono-800">Current contributors</p>
          <p>4435</p>
        </div>
        <div>
          <p className="text-mono-800">Max. participants</p>
          <p>10000</p>
        </div>
        <p className="col-span-2 text-mono-800">
          *Price you pay/amount of tokens you get fluctuates depending on the
          number of contributors and their desired contribution.
        </p>
      </div>
    </div>
  );
};
