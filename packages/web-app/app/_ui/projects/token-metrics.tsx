import { Button } from '../components';
import { ContributeButton } from './contribute-button';

type TTokenMetricsProps = {
  token: string;
  targetRaiseRange: string;
  totalSupply: string;
  targetedDate: Date;
  contractAddress: string;
};

export const TokenMetrics = ({
  token,
  targetRaiseRange,
  totalSupply,
  targetedDate,
  contractAddress,
}: TTokenMetricsProps) => {
  const displayDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(targetedDate);

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-blue-100 p-6 font-medium uppercase">
        Token Metrics
      </h4>
      <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
        <span className="text-mono-800">Token:</span>
        <span className="text-end">{token}</span>
        <span className="text-mono-800">Target Raise Range:</span>
        <span className="text-end">{targetRaiseRange}</span>
        <span className="text-mono-800">Total supply:</span>
        <span className="text-end">{totalSupply}</span>
        <span className="text-mono-800">Targeted date:</span>
        <span className="text-end">{displayDate}</span>
        <span className="text-mono-800">Contract Address:</span>
        <span className="text-end">{contractAddress}</span>
      </div>
    </div>
  );
};
