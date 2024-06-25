import {
  useCtzndRisingTideCap,
  useCtzndSaleCapStatus,
  useCtzndSaleStatus,
} from '@/app/_lib/hooks';
import {
  useExtraAllocation,
  useTotalInvestedUsdcCtznd,
  useUserTotalInvestedUsdcCtznd,
} from '@/app/_lib/queries';
import {
  useReadCtzndSaleAllocation,
  useReadCtzndSaleRefundAmount,
} from '@/wagmi.generated';
import { formatEther } from 'viem';
import { useAccount } from 'wagmi';
import { calculateTokenPrice } from '../utils/calculateTokenPrice';
import { number } from '../utils/intl-formaters/number';
import { usdValue } from '../utils/intl-formaters/usd-value';
import { Tooltip } from '../components/tooltip';

const useAvailableToClaim = () => {
  const { address } = useAccount();
  const capStatus = useCtzndSaleCapStatus();
  const cap = useCtzndRisingTideCap();
  const { data: availableToClaim } = useReadCtzndSaleAllocation({
    args: [address!],
    query: {
      enabled: !!address,
      staleTime: 0,
    },
  });

  if (capStatus == 'above') {
    return 'TBD once sale ends';
  }

  return `${number(Number(formatEther(availableToClaim || 0n)))} CTND`;
};

export const MyTokens = () => {
  const { address } = useAccount();
  const investedUsdc = useUserTotalInvestedUsdcCtznd(address!);
  const { data: refund } = useReadCtzndSaleRefundAmount({
    args: [address!],
    query: {
      enabled: !!address,
      staleTime: 0,
    },
  });
  const refundValue = refund ? formatEther(refund!) : 0;
  const confirmedAllocation = Number(investedUsdc) - Number(refundValue);
  const status = useCtzndSaleStatus();
  const totalContributions = useTotalInvestedUsdcCtznd();
  const currentTokenPrice = calculateTokenPrice(Number(totalContributions));
  const availableToClaim = useAvailableToClaim();
  const bonusAllocation = 0 * 1.25;
  const extraAllocation = useExtraAllocation(address).data;

  return (
    <>
      <div className="flex flex-col gap-2 rounded-md bg-mono-50 px-6 py-8 text-mono-950">
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
          <div className="col-span-2 flex flex-col gap-2">
            <h3 className="flex flex-col text-sm text-mono-800">
              <div className="relative">
                Confirmed Allocation
                {status === 'live' ? (
                  <div className="absolute left-0 top-0 w-48 -translate-y-1/2 translate-x-full rounded-full bg-mono-900 px-2 pb-0.5 pt-1 text-xs uppercase leading-3 text-mono-50">
                    Ongoing cap calculations
                  </div>
                ) : null}
              </div>
            </h3>
            <div className="text-3.5xl">{confirmedAllocation} USDC</div>
          </div>
          {extraAllocation ? (
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-mono-800">Available for refund</h3>
              <div>{refundValue} USDC</div>
            </div>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-mono-800">Current CTND PRICE (FDV)</h3>
            <div>
              {usdValue(currentTokenPrice)} {`($${currentTokenPrice * 100}m)`}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-mono-800">CTND Available to Claim</h3>
            <div>{availableToClaim}</div>
          </div>
          {extraAllocation ? (
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-mono-800">Contribution bonus</h3>
              <span className="relative flex">
                {bonusAllocation} CTND{' '}
                <div className="absolute -top-2 left-32">
                  <Tooltip
                    text="25% bonus for previous Community Sale participants"
                    className="-translate-x-3/4 -translate-y-full"
                  />
                </div>
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-mono-800">Available for refund</h3>
              <div>{refundValue} USDC</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
