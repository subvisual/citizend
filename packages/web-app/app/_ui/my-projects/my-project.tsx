import { useProject } from '@/app/_providers/project/context';
import {
  useFetchProjectsSaleDetails,
  useUserTotalInvestedUsdcCtznd,
} from '@/app/_lib/queries';
import { NavLink } from '../components/nav-link';
import { Right } from '../components/svg/right';
import Image from 'next/image';
import { TProjectSaleDetails } from '@/app/_types';
import { getRelativePath } from '../utils/getRelativePath';
import { usdRange } from '../utils/intl-formaters/usd-range';
import { formatDate } from '../utils/intl-formaters/date';
import { EdgeLink } from '../components/edge';
import { CardSkeleton } from '../components/skeletons/card-skeleton';
import {
  useReadCtzndSaleInvestorCount,
  useReadCtzndSaleUncappedAllocation,
} from '@/wagmi.generated';
import { useAccount } from 'wagmi';
import { formatEther, parseEther } from 'viem';

const Header = ({
  project,
  logo,
  minTarget,
  maxTarget,
}: TProjectSaleDetails) => {
  const { data: contributions } = useReadCtzndSaleInvestorCount({
    query: {
      staleTime: 0,
    },
  });
  const totalContributions = contributions ? contributions.toString() : 0;

  return (
    <div className="flex flex-col rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h2 className="flex items-center gap-4 text-2xl">
        <Image
          src={getRelativePath(logo)}
          alt={`${project} logo`}
          width={40}
          height={40}
        />
        {project}
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 md:px-14 md:pt-8">
        <div className="flex flex-col gap-2 md:border-r md:border-mono-200">
          <h3 className="text-sm text-mono-800">Contributions</h3>
          <div>{totalContributions}</div>
        </div>
        <div className="flex flex-col gap-2 md:border-r md:border-mono-200">
          <h3 className="text-sm text-mono-800">Target Raise</h3>
          <div>{usdRange(minTarget, maxTarget)}</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Vesting period ends in:</h3>
          <div>{formatDate(BigInt(new Date('05/05/2024').getTime()))}</div>
        </div>
      </div>
    </div>
  );
};

const MyContribution = () => {
  const { address } = useAccount();
  const { projectId } = useProject();
  const usdcValue = useUserTotalInvestedUsdcCtznd(address!);

  return (
    <div className="flex flex-col gap-2 rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h3 className="text-sm text-mono-800">Contributions</h3>
      <div className="text-3.5xl">{`${usdcValue} USDC`}</div>
      <div className="self-center pt-6">
        <EdgeLink href={`/projects/${projectId}`}>New Contribution</EdgeLink>
      </div>
    </div>
  );
};

const MyTokens = () => {
  const { address } = useAccount();
  const { data: tokens } = useReadCtzndSaleUncappedAllocation({
    args: [address!],
  });
  const myTokens = tokens ? formatEther(tokens!) : 0;

  return (
    <div className="flex flex-col gap-2 rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h3 className="text-sm text-mono-800">My tokens</h3>
      <div className="text-3.5xl">{myTokens} CTND</div>
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Total Claimed</h3>
          <div>-</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Next Release</h3>
          <div>-</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Available to claim</h3>
          <div>-</div>
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
