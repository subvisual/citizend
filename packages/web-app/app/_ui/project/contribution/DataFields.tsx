import {
  useReadCtzndSaleMaxTarget,
  useReadCtzndSaleTotalTokensForSale,
} from '@/wagmi.generated';
import { formatEther } from 'viem';
import { number } from '../../utils/intl-formaters/number';
import { useCtzndMinContributionUsdc } from '@/app/_lib/queries';

const useMaxParticipants = () => {
  const { data: maxTarget, isLoading: targetLoading } =
    useReadCtzndSaleMaxTarget();
  const min = useReadCtzndSaleTotalTokensForSale();
  const targetValue = maxTarget ? Number(formatEther(maxTarget)) : undefined;
  const minValue = min ? Number(min) : undefined;

  return {
    data: !targetValue || !minValue ? undefined : targetValue / minValue,
    isLoading: targetLoading,
  };
};

const LoadingField = () => (
  <div className="h-5 w-full animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
);

export const DataFields = () => {
  const { data: totalTokensForSale } = useReadCtzndSaleTotalTokensForSale();
  const minContribution = useCtzndMinContributionUsdc();
  const { data: maxParticipants } = useMaxParticipants();

  return (
    <div className="flex flex-col gap-6 border-t border-mono-200 p-4 md:p-6">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <span className="text-mono-800">Current price/Token (FDV):</span>
        <div className="md:text-end">
          <span>$0.20</span>
          <span className="text-mono-800">($20m)</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <span className="text-mono-800">Tokens distributed:</span>
        <span className="md:text-end">
          {totalTokensForSale !== undefined ? (
            <>{number(Number(formatEther(totalTokensForSale)))} CTND</>
          ) : (
            <LoadingField />
          )}
        </span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <span className="text-mono-800">Min. contribution amount:</span>
        <span className="md:text-end">{minContribution} USDC</span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <span className="text-mono-800">Max. number of participants:</span>
        <span className="md:text-end">
          {maxParticipants !== undefined ? (
            number(maxParticipants)
          ) : (
            <LoadingField />
          )}
        </span>
      </div>
    </div>
  );
};
