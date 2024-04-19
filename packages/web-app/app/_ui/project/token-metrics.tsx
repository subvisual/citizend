import { usdRange } from '../utils/intl-formaters/usd-range';
import { usdValue } from '../utils/intl-formaters/usd-value';

type TTokenMetricsProps = {
  minTarget: bigint;
  maxTarget: bigint;
  totalTokensForSale: bigint;
  minContribution: bigint;
  maxContribution: bigint;
};

export const TokenMetrics = ({
  minTarget,
  maxTarget,
  totalTokensForSale,
  minContribution,
  maxContribution,
}: TTokenMetricsProps) => {
  const targetRaiseRange = usdRange(minTarget, maxTarget);
  const maxPrice = usdValue(maxContribution);
  const minPrice = usdValue(minContribution);
  const totalTokens = new Intl.NumberFormat('default').format(
    totalTokensForSale,
  );

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Token Metrics
      </h4>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Target Raise:</span>
          <span className="md:text-end">{targetRaiseRange}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Min. price per token:</span>
          <span className="md:text-end">{minPrice}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Max price per token:</span>
          <span className="md:text-end">{maxPrice}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Total supply:</span>
          <span className="md:text-end">{totalTokens}</span>
        </div>
      </div>
    </div>
  );
};
