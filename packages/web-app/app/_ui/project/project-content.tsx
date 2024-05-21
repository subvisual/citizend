'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { CitizendProjectDescription } from './citizend-project-description';
import { HowToParticipate } from './how-to-participate';
import { SaleStatus } from './sale-status';
import { ApplyButton } from './apply-button';
import {
  useCanContribute,
  useFetchProjectsSaleDetails,
} from '@/app/_lib/queries';
import { useProject } from '@/app/_providers/project/context';
import { ProjectContribution } from './project-contribution';
import { useHasCitizendGrant, useHasProjectGrant } from '@/app/_lib/hooks';
import { AppliedSuccess } from './applied-success';
import { CardSkeleton } from '../components/skeletons/card-skeleton';
import { useAccount } from 'wagmi';
import { ProjectInformation } from './project-information';
import { TokenMetrics } from './token-metrics';

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
  const canContribute = useCanContribute(projectId, address);
  const hasGrant = canContribute || (hasProjectGrant && hasCitizendGrant);
  const saleCompleted = project?.status === 'completed';

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

  const { start, startRegistration, endRegistration } = project;

  return (
    <>
      <div className="md:hidden">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="my-4 grid grid-cols-2 gap-6">
            <Tab className={generateTabClassName}>Description</Tab>
            {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' && !saleCompleted ? (
              <Tab className={generateTabClassName}>Register</Tab>
            ) : null}
            {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ||
            saleCompleted ? (
              <Tab className={generateTabClassName}>Token metrics</Tab>
            ) : null}
          </Tab.List>
          <Tab.Panels className="pb-64">
            <Tab.Panel className="focus:outline-none">
              <CitizendProjectDescription />
            </Tab.Panel>
            {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
              <Tab.Panel className="flex flex-col gap-8 focus:outline-none">
                {hasGrant ? (
                  <ProjectInformation saleDate={start} />
                ) : (
                  <HowToParticipate
                    saleDate={start}
                    startRegistration={startRegistration}
                    endRegistration={endRegistration}
                    error={errorLoadingGrant}
                  />
                )}
                <TokenMetrics />
                {hasGrant ? <AppliedSuccess /> : null}
              </Tab.Panel>
            ) : null}
            {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
              <Tab.Panel className="flex flex-col gap-8 focus:outline-none">
                {hasGrant && address && !saleCompleted ? (
                  <ProjectContribution userAddress={address} />
                ) : null}
                <SaleStatus hasGrant={hasGrant} />
              </Tab.Panel>
            ) : null}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="hidden grid-cols-2 gap-x-8 md:grid">
        <div className="flex flex-col gap-16">
          {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' &&
          hasGrant &&
          address &&
          !saleCompleted ? (
            <ProjectContribution userAddress={address} />
          ) : null}
          <CitizendProjectDescription />
        </div>
        <div className="display flex flex-col gap-8">
          {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
            <>
              {hasGrant ? (
                <ProjectInformation saleDate={start} />
              ) : (
                <HowToParticipate
                  saleDate={start}
                  startRegistration={startRegistration}
                  endRegistration={endRegistration}
                  error={errorLoadingGrant}
                />
              )}
              <TokenMetrics />
              {hasGrant ? <AppliedSuccess /> : null}
            </>
          ) : null}
          {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
            <SaleStatus hasGrant={hasGrant} />
          ) : null}
        </div>
      </div>
    </>
  );
};
