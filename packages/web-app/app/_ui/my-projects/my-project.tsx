import { useProject } from '@/app/_providers/project/context';
import {
  useFetchProjectsSaleDetails,
  useTotalInvestedUsdcCtznd,
  useUserTotalInvestedUsdcCtznd,
} from '@/app/_lib/queries';
import { NavLink } from '../components/nav-link';
import { Right } from '../components/svg/right';
import Image from 'next/image';
import { TProjectSaleDetails } from '@/app/_types';
import { getRelativePath } from '../utils/getRelativePath';
import { EdgeButton, EdgeLink } from '../components/edge';
import { CardSkeleton } from '../components/skeletons/card-skeleton';
import {
  useReadCtzndSaleAllocation,
  useReadCtzndSaleInvestorCount,
  useReadCtzndSaleRefundAmount,
  useWriteCtzndSaleRefund,
} from '@/wagmi.generated';
import { useAccount } from 'wagmi';
import { formatEther } from 'viem';
import { useCtzndSaleCapStatus, useCtzndSaleStatus } from '@/app/_lib/hooks';
import { useDialog } from '@/app/_providers/dialog/context';
import { number } from '../utils/intl-formaters/number';
import { usdValue } from '../utils/intl-formaters/usd-value';
import { useCountdown } from '../hooks/useCountdown';
import { calculateTokenPrice } from '../utils/calculateTokenPrice';

const Header = ({ project, logo, end }: TProjectSaleDetails) => {
  const { data: numberOfParticipants } = useReadCtzndSaleInvestorCount({
    query: {
      staleTime: 0,
    },
  });
  const totalCommittedUsdc = useTotalInvestedUsdcCtznd();
  const status = useCtzndSaleStatus();
  const formattedNumberOfParticipants = number(numberOfParticipants || 0);
  const saleCapStatus = useCtzndSaleCapStatus();
  const projectTitle =
    project === 'citizend' ? 'Citizend Community Sale' : project;
  const { days, hours, minutes, seconds } = useCountdown(end);

  return (
    <div className="flex flex-col rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h2 className="flex items-center gap-4 text-2xl">
        <Image
          src={getRelativePath(logo)}
          alt={`${project} logo`}
          width={40}
          height={40}
        />
        <div className="relative flex w-full flex-col md:flex-row md:items-center">
          {projectTitle}
          {status === 'completed' ? (
            <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-full rounded-full bg-blue-500 px-2 pb-0.5 pt-1 text-xs uppercase leading-3 text-mono-50">
              Closed
            </div>
          ) : null}
          {status === 'live' ? (
            <>
              <div className="flex">
                <div className="pr-4 text-base uppercase text-mono-800 md:pl-6">
                  Live
                </div>
                <div className="ml-1 h-4 w-4 animate-pulse rounded-full bg-green-500" />
              </div>
              <div className="ml-auto w-56 text-base font-normal">
                Sale ends in {days}d {hours}h {minutes}m {seconds}s
              </div>
            </>
          ) : null}
        </div>
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 md:px-14 md:pt-8">
        <div className="flex flex-col gap-2 md:border-r md:border-mono-200">
          <h3 className="text-sm text-mono-800">Number of participants</h3>
          <div>{formattedNumberOfParticipants}</div>
        </div>
        <div className="flex flex-col gap-2 md:border-r md:border-mono-200">
          <h3 className="text-sm text-mono-800">Total amount committed</h3>
          <div>{usdValue(totalCommittedUsdc)}</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Rising Tide Mechanism</h3>
          <div>
            {saleCapStatus === 'above'
              ? 'ON (max. target reached)'
              : 'OFF (total contributed below max.)'}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingField = () => (
  <div className="h-5 w-full animate-pulse rounded-md bg-gradient-to-br from-mono-50 to-mono-200" />
);

const Refund = ({ address }: { address: `0x${string}` }) => {
  const { data: refundValue } = useReadCtzndSaleRefundAmount({
    args: [address],
  });
  const {
    writeContract,
    data: refundTxHash,
    error,
  } = useWriteCtzndSaleRefund();
  const { open } = useDialog();
  const formattedValue =
    refundValue !== undefined ? formatEther(refundValue) : '0';
  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h3 className="text-sm text-mono-800">Refund After Cap Calculations</h3>
      <div className="flex flex-col gap-2">
        {refundValue !== undefined ? (
          <>{formattedValue} USDC</>
        ) : (
          <LoadingField />
        )}
        {refundValue && refundValue > 0n ? (
          <div className="self-center pt-6">
            <EdgeButton
              onClick={() => {
                writeContract({ args: [address] });
                open('refundDialog', {
                  refundValue: formattedValue,
                  txHash: refundTxHash,
                  error: (error as unknown as any)?.shortMessage || null,
                });
              }}
            >
              Claim
            </EdgeButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const MyContribution = () => {
  const { address } = useAccount();
  const { projectId } = useProject();
  const usdcValue = useUserTotalInvestedUsdcCtznd(address!);
  const status = useCtzndSaleStatus();

  return (
    <div className="flex flex-col gap-2 rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h3 className="text-sm text-mono-800">My Contribution</h3>
      <div className="text-3.5xl">{`${usdcValue} USDC`}</div>
      {status === 'live' ? (
        <div className="self-center pt-6">
          <EdgeLink href={`/projects/${projectId}`}>New Contribution</EdgeLink>
        </div>
      ) : null}
      {status === 'completed' && address ? <Refund address={address} /> : null}
    </div>
  );
};

const MyTokens = () => {
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
  const { data: availableToClaim } = useReadCtzndSaleAllocation({
    args: [address!],
    query: {
      enabled: !!address,
      staleTime: 0,
    },
  });

  return (
    <div className="flex flex-col gap-2 rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h3 className="flex text-sm text-mono-800">
        <div className="relative">
          Confirmed Allocation
          {status === 'live' ? (
            <div className="absolute right-0 top-0 w-48 -translate-y-1/2 translate-x-full rounded-full bg-mono-900 px-2 pb-0.5 pt-1 text-xs uppercase leading-3 text-mono-50">
              Ongoing cap calculations
            </div>
          ) : null}
        </div>
      </h3>
      <div className="text-3.5xl">{confirmedAllocation} USDC</div>
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Current CTND PRICE (FDV)</h3>
          <div>
            {usdValue(currentTokenPrice)} {`($${currentTokenPrice * 100}m)`}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">CTND Available to Claim</h3>
          <div>{availableToClaim ? formatEther(availableToClaim) : 0} CTND</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Available for refund</h3>
          <div>{refundValue} USDC</div>
        </div>
      </div>
    </div>
  );
};

export const MyProjectSkeleton = () => (
  <div className="display flex flex-col gap-8">
    <div className="mb-6 h-12 w-1/2 animate-pulse rounded-md bg-gradient-to-r from-mono-800 to-mono-900" />
    <CardSkeleton className="h-[12rem] rounded-md" />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      <CardSkeleton className="h-[12rem] rounded-md" />
      <div className="md:col-span-2">
        <CardSkeleton className="h-[12rem] rounded-md" />
      </div>
    </div>
  </div>
);

export const MyProject = () => {
  const { projectId } = useProject();
  const {
    data: saleDetails,
    isLoading: isDetailsLoading,
    error: detailsError,
  } = useFetchProjectsSaleDetails();
  const project = saleDetails?.find(
    (project) => project.project.toLowerCase() === projectId,
  );
  const isLoading = isDetailsLoading;
  const error = detailsError;

  if (isLoading || (!saleDetails && !error)) {
    return <MyProjectSkeleton />;
  }

  if (error)
    return (
      <div>
        <p>Something went wrong...</p>
        <p>{error.message}</p>
      </div>
    );

  if (!project) return <div>Project not found</div>;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="flex items-center md:mb-6">
        <NavLink
          href="/my-projects"
          name="My projects"
          className="rounded-lg px-2 py-3"
        />
        <Right className="text-mono-50" />
        <span className="px-2 py-3">{project.project}</span>
      </div>
      <Header {...project} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <MyContribution />
        <div className="md:col-span-2">
          <MyTokens />
        </div>
      </div>
    </div>
  );
};
