import {
  useReadCtzndSaleMaxContribution,
  useReadCtzndSaleMinContribution,
  useReadCtzndSaleInvestorCount,
  useReadCtzndSaleMaxTarget,
  useReadCtzndSaleMinTarget,
} from '@/wagmi.generated';
import { formatEther } from 'viem';
import { usdValue } from '../../utils/intl-formaters/usd-value';
import { number } from '../../utils/intl-formaters/number';

const useMaxParticipants = () => {
  const {
    data: maxTarget,
    isLoading: maxLoading,
    error: maxError,
  } = useReadCtzndSaleMaxTarget();
  const {
    data: minTarget,
    isLoading: minLoading,
    error: minError,
  } = useReadCtzndSaleMinTarget();

  return {
    data:
      maxTarget === undefined || minTarget === undefined
        ? undefined
        : BigInt(maxTarget) - BigInt(minTarget),
    isLoading: maxLoading || minLoading,
    error: maxError || minError,
  };
};

const LoadingField = () => (
  <div className="h-5 w-full animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
);

export const DataFields = () => {
  const { data: maxContribution } = useReadCtzndSaleMaxContribution();
  const { data: minContribution } = useReadCtzndSaleMinContribution();
  const { data: investorCount } = useReadCtzndSaleInvestorCount({
    query: {
      refetchInterval: 1000 * 60, // every minute
    },
  });
  const { data: maxParticipants } = useMaxParticipants();

  return (
    <>
      <div className="md:col-span-2">
        <div className="text-mono-800">Current price</div>
        <div>0.1 USDC*</div>
      </div>
      <div>
        <div className="text-mono-800">Min. contribution</div>
        <div>
          {minContribution !== undefined ? (
            usdValue(formatEther(minContribution))
          ) : (
            <LoadingField />
          )}
        </div>
      </div>
      <div>
        <div className="text-mono-800">Max. contribution</div>
        <div>
          {maxContribution !== undefined ? (
            usdValue(formatEther(maxContribution))
          ) : (
            <LoadingField />
          )}
        </div>
      </div>
      <div>
        <div className="text-mono-800">Current contributors</div>
        <div>
          {investorCount !== undefined ? (
            number(investorCount)
          ) : (
            <LoadingField />
          )}
        </div>
      </div>
      <div>
        <div className="text-mono-800">Max. participants</div>
        <div>
          {maxParticipants !== undefined ? (
            number(BigInt(formatEther(maxParticipants)))
          ) : (
            <LoadingField />
          )}
        </div>
      </div>
    </>
  );
};
