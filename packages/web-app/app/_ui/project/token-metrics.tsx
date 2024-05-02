import {
  useReadCtzndSaleTokenToPaymentToken,
  useReadCtzndSaleTotalUncappedAllocations,
} from '@/wagmi.generated';
import { usdRange } from '../utils/intl-formaters/usd-range';
import { usdValue } from '../utils/intl-formaters/usd-value';
import { formatEther, parseEther } from 'viem';
import clsx from 'clsx';

type TTokenMetricsProps = {
  minTarget: bigint;
  maxTarget: bigint;
  totalTokensForSale: bigint;
  minContribution: string;
  maxContribution: string;
};

const ProgressBar = ({
  title,
  max,
  value,
}: {
  title: string;
  max: number;
  value: number;
}) => {
  const valueInMillions = value / 1000_000;
  const maxInMillions = formatEther(max) / 1000_000_000;
  const halfInMillions = maxInMillions / 2;
  const currentRelativeValue = valueInMillions / maxInMillions;
  const percentage = currentRelativeValue * 100;
  const displayPercentage = percentage > 0 && percentage < 1 ? 1 : percentage;
  const percentageRounded = Math.round(displayPercentage) + '%';
  const displayValue =
    valueInMillions > 0 && valueInMillions < 0.1
      ? '<0.1'
      : valueInMillions.toFixed(2);

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
            className={clsx(
              'flex flex-col justify-center overflow-hidden whitespace-nowrap bg-blue-500 text-center text-xs text-white transition duration-500 dark:bg-blue-500',
              percentageRounded === '100%' ? 'rounded-md' : 'rounded-l-md',
            )}
            style={{ width: percentageRounded }}
          />
        </div>
        <div className="relative z-0 flex">
          <div
            className={`absolute left-[${percentageRounded}] top-0 flex flex-col  items-start`}
          >
            {percentageRounded === '100%' ? null : (
              <>
                <div className="absolute -left-1 -top-8 h-2 w-2 rotate-45 transform bg-blue-500" />
                <div className="-translate-x-1/2 text-blue-500">
                  {displayValue}M
                </div>
              </>
            )}
          </div>
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

const ProgressBarWrapper = ({ maxTarget }: { maxTarget: bigint }) => {
  const { data: ctzndTokensSold, isLoading: isLoadingSaleTokens } =
    useReadCtzndSaleTotalUncappedAllocations();
  const { data: tokensInvested, isLoading: isLoadingPaymentTokens } =
    useReadCtzndSaleTokenToPaymentToken({
      args: [ctzndTokensSold || 0n],
    });
  const value = tokensInvested ? formatEther(tokensInvested) : '0';

  if (isLoadingSaleTokens || isLoadingPaymentTokens)
    return (
      <>
        <div className="mx-auto mb-4 h-6 w-44 animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
        <div className="h-6 w-full animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
      </>
    );

  return (
    <ProgressBar
      title="Raise status"
      max={Number(maxTarget)}
      value={Number(value)}
    />
  );
};

export const TokenMetrics = ({
  minTarget,
  maxTarget,
  totalTokensForSale,
  minContribution,
  maxContribution,
}: TTokenMetricsProps) => {
  const targetRaiseRange = usdRange(BigInt(formatEther(minTarget)), BigInt(formatEther(maxTarget)));
  const maxPrice = usdValue(maxContribution);
  const minPrice = usdValue(minContribution);
  const totalTokens = new Intl.NumberFormat('default').format(
    BigInt(formatEther(totalTokensForSale)),
  );

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Token Metrics
      </h4>
      {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
        <div className="m-8">
          <ProgressBarWrapper maxTarget={maxTarget} />
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
