import { useProject } from '@/app/_providers/project/context';
import { useFetchProjectsSaleDetails } from '@/app/_lib/queries';
import { NavLink } from '../components/nav-link';
import { Right } from '../components/svg/right';
import { CardSkeleton } from '../components/skeletons/card-skeleton';
import { Header } from './header';
import { MyTokens } from './my-tokens';
import { MyContribution } from './my-contribution';
import { Refund } from './refund';
import { useAccount } from 'wagmi';
import { useCtzndSaleStatus } from '@/app/_lib/hooks';

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
  const { address } = useAccount();
  const {
    data: saleDetails,
    isLoading: isDetailsLoading,
    error: detailsError,
  } = useFetchProjectsSaleDetails();
  const project = saleDetails?.find(
    (project) => project.project.toLowerCase() === projectId,
  );
  const status = useCtzndSaleStatus();
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
      {status === 'completed' && address ? <Refund address={address} /> : null}
    </div>
  );
};
