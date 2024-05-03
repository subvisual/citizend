import {
  useReadCtzndSaleInvestorCount,
  useReadCtzndSaleMaxTarget,
} from '@/wagmi.generated';
import { usdValue } from '../utils/intl-formaters/usd-value';
import { formatEther } from 'viem';
import clsx from 'clsx';
import { number } from '../utils/intl-formaters/number';
import { useTotalInvestedUsdcCtznd } from '@/app/_lib/queries';
import { useCtzndRisingTideCap } from '@/app/_lib/hooks';

const ProgressBar = ({
  title,
  max,
  value,
}: {
  title: string;
  max: number;
  value: number;
}) => {
  const valueInMillions = value / 1_000_000;
  const maxInMillions = max / 1_000_000;
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

const LoadingField = () => (
  <div className="h-5 w-full animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
);

export const TokenMetrics = () => {
  const { data: maxTarget } = useReadCtzndSaleMaxTarget();
  const totalCommitted = useTotalInvestedUsdcCtznd();
  const maxValue = maxTarget ? Number(formatEther(maxTarget)) : 0;
  const { data: investorCount } = useReadCtzndSaleInvestorCount({
    query: {
      refetchInterval: 1000 * 10, // 10 seconds
    },
  });
  const { data: cap, isLoading: isLoadingCap } = useCtzndRisingTideCap();

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="flex justify-between border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Community Sale Status
        {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
          <div className="flex items-center gap-3 text-mono-800">
            Live
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
            </span>
          </div>
        ) : null}
      </h4>
      {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
        <div className="m-8">
          <ProgressBar
            title="Raise status"
            max={maxValue}
            value={Number(totalCommitted)}
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Total amount commited:</span>
          <span className="md:text-end">
            {totalCommitted !== undefined ? (
              usdValue(totalCommitted)
            ) : (
              <LoadingField />
            )}
          </span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Current number of participants:</span>
          <span className="md:text-end">
            {investorCount !== undefined ? (
              number(investorCount)
            ) : (
              <LoadingField />
            )}
          </span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Current price (FDV):</span>
          <div className="md:text-end">
            {usdValue(0.4)}
            <span className="text-mono-800"> ($40m)</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">
            Current max. allocation/participant:
          </span>
          <span className="md:text-end">
            {isLoadingCap ? <LoadingField /> : cap}
          </span>
        </div>
      </div>
    </div>
  );
};
