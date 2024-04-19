import { usdRange } from '../utils/intl-formaters/usd-range';
import { usdValue } from '../utils/intl-formaters/usd-value';

type TTokenMetricsProps = {
  minTarget: bigint;
  maxTarget: bigint;
  totalTokensForSale: bigint;
  minContribution: bigint;
  maxContribution: bigint;
};

const ProgressBar = ({
  title,
  max,
  value,
}: {
  title: string;
  max: bigint;
  value: bigint;
}) => {
  // REVIEW and optimize this code
  const valueInMillions = (BigInt(value) / BigInt(1000000n)).toString();
  const halfInMillions = (
    BigInt(max) /
    BigInt(2) /
    BigInt(1000000n)
  ).toString();
  const maxInMillions = (BigInt(max) / BigInt(1000000n)).toString();
  const division = parseFloat(valueInMillions) / parseFloat(maxInMillions);
  const percentage = `${Number(division) * 100}%`;

  return (
    <div>
      <div className="flex flex-col px-6">
        <label
          htmlFor="progress-bar"
          className="self-center text-base font-normal normal-case text-mono-800"
        >
          {title}
        </label>
        <div
          id="progress-bar"
          className="mt-4 flex h-6 w-full overflow-hidden rounded-md bg-blue-100"
          role="progressbar"
          aria-valuenow={Number(valueInMillions)}
          aria-valuemin={0}
          aria-valuemax={Number(maxInMillions)}
        >
          <div
            className="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-md bg-blue-500 text-center text-xs text-white transition duration-500 dark:bg-blue-500"
            style={{ width: percentage }}
          />
        </div>
        <div className="relative z-0 flex">
          <div className="absolute left-1/2 top-0 flex flex-col  items-start">
            <div className="h-2 w-0.5 border-[1px] border-blue-500" />
            <div className="-translate-x-1/2">{halfInMillions}M</div>
          </div>
          <div className="absolute right-0 top-0 flex flex-col  items-end ">
            <div className="border-[1px h-2 w-0.5" />
            {maxInMillions + 'M'}
          </div>
        </div>
      </div>
    </div>
  );
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
      {process.env.NEXT_PUBLIC_APPLY_OPEN === 'false' ? (
        <div className="m-8">
          <ProgressBar title="Raise status" max={maxTarget} value={1000000n} />
        </div>
      ) : null}
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
