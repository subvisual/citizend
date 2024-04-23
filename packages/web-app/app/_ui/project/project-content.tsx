'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { CitizendProjectDescription } from './citizend-project-description';
import { ProjectInformation } from './project-information';
import { TokenMetrics } from './token-metrics';
import { ApplyButton } from './apply-button';
import { useFetchProjectsSaleDetails } from '@/app/_lib/queries';
import { useProject } from '@/app/_providers/project/context';
import { ProjectContribution } from './project-contribution';
import { useHasCitizendGrant, useHasProjectGrant } from '@/app/_lib/hooks';
import { AppliedSuccess } from './applied-success';
import { CardSkeleton } from '../components/skeletons/card-skeleton';
import { useAccount } from 'wagmi';

const generateTabClassName = ({ selected }: { selected: boolean }) =>
  clsx(
    'px-6 py-2 text-sm font-medium uppercase text-mono-400 transition-all duration-200 ease-in-out focus:outline-none',
    selected && ' rounded-md text-mono-50 ring-1 ring-mono-50',
  );

export const ProjectContent = () => {
  const { address } = useAccount();
  const { projectId } = useProject();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading, isError, error } = useFetchProjectsSaleDetails();
  const { hasGrant: hasCitizendGrant } = useHasCitizendGrant();
  const {
    hasGrant: hasProjectGrant,
    isLoading: isLoadingGrant,
    error: errorLoadingGrant,
  } = useHasProjectGrant(projectId);
  const project = data?.find(
    (project) => project.project.toLowerCase() === projectId,
  );
  const hasGrant = hasProjectGrant && hasCitizendGrant;

  if (isLoading || isLoadingGrant || (!data && !isError)) {
    return (
      <div className="grid grid-cols-1 gap-6  md:grid-cols-2">
        <CardSkeleton className="h-[544px]" />
        <div className="flex flex-col gap-6">
          <CardSkeleton className="h-36" />
          <CardSkeleton className="h-80" />
          <CardSkeleton className="h-24" />
        </div>
      </div>
    );
  }

  if (isError)
    return (
      <div>
        <p>Something went wrong...</p>
        <p>{error.message}</p>
      </div>
    );
  if (!project) return <div>Project not found</div>;

  const {
    start,
    startRegistration,
    endRegistration,
    minTarget,
    maxTarget,
    minContribution,
    maxContribution,
    totalTokensForSale,
  } = project;

  return (
    <>
      <div className="md:hidden">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="my-4 grid grid-cols-2 gap-6">
            <Tab className={generateTabClassName}>Description</Tab>
            <Tab className={generateTabClassName}>Token Metrics</Tab>
          </Tab.List>
          <Tab.Panels className="pb-64">
            <Tab.Panel className="focus:outline-none">
              <CitizendProjectDescription />
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-8 focus:outline-none">
              {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' &&
              hasGrant &&
              address ? (
                <ProjectContribution userAddress={address} />
              ) : null}
              {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
                <ProjectInformation
                  saleDate={start}
                  startRegistration={startRegistration}
                  endRegistration={endRegistration}
                  applied={!!hasGrant}
                />
              ) : null}
              <TokenMetrics
                minTarget={minTarget}
                maxTarget={maxTarget}
                minContribution={minContribution}
                maxContribution={maxContribution}
                totalTokensForSale={totalTokensForSale}
              />
              {hasGrant && process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
                <AppliedSuccess />
              ) : null}
              {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' && !hasGrant ? (
                <ApplyButton
                  isLoading={isLoadingGrant}
                  error={errorLoadingGrant}
                />
              ) : null}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="hidden grid-cols-2 gap-x-8 md:grid">
        <div className="flex flex-col gap-16">
          {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' &&
          hasGrant &&
          address ? (
            <ProjectContribution userAddress={address} />
          ) : null}
          <CitizendProjectDescription />
        </div>
        <div className="display flex flex-col gap-8">
          {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
            <ProjectInformation
              saleDate={start}
              startRegistration={startRegistration}
              endRegistration={endRegistration}
              applied={!!hasGrant}
            />
          ) : null}
          <TokenMetrics
            minTarget={minTarget}
            maxTarget={maxTarget}
            minContribution={minContribution}
            maxContribution={maxContribution}
            totalTokensForSale={totalTokensForSale}
          />
          {hasGrant && process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
            <AppliedSuccess />
          ) : null}
          {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' && !hasGrant ? (
            <ApplyButton isLoading={isLoading} error={errorLoadingGrant} />
          ) : null}
        </div>
      </div>
    </>
  );
};
