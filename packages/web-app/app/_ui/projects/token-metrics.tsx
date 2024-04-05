import { Button } from '../components';
import { ContributeButton } from './contribute-button';

type TTokenMetricsProps = {
  token: string;
  targetRaiseRange: string;
  totalSupply: string;
  targetedDate: Date;
  minPricePerToken: string;
  maxPricePerToken: string;
  totalSupplyDistributed: string;
};

export const TokenMetrics = ({
  token,
  targetRaiseRange,
  totalSupply,
  targetedDate,
  minPricePerToken,
  maxPricePerToken,
  totalSupplyDistributed,
}: TTokenMetricsProps) => {
  const displayDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(targetedDate);

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Token Metrics
      </h4>
      <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2">
        <span className="text-mono-800">Target Raise:</span>
        <span className="text-end">{targetRaiseRange}</span>
        <span className="text-mono-800">Min. price per token:</span>
        <span className="text-end">{minPricePerToken}</span>
        <span className="text-mono-800">Max price per token:</span>
        <span className="text-end">{maxPricePerToken}</span>
        <span className="text-mono-800">Total supply:</span>
        <span className="text-end">{totalSupply}</span>
        <span className="text-mono-800">% total supply distributed:</span>
        <span className="text-end">{totalSupplyDistributed}</span>
      </div>
    </div>
  );
};
