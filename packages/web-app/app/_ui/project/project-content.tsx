'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { ProjectDescription } from './project-description';
import { ProjectInformation } from './project-information';
import { TokenMetrics } from './token-metrics';
import { ContributeButton } from './contribute-button';
import { useFetchProjectsSaleDetails } from '@/app/_lib/queries';
import { useProject } from '@/app/_providers/project/context';
import { Spinner } from '../components/svg/spinner';
import { ProjectContribution } from './project-contribution';

const generateTabClassName = ({ selected }: { selected: boolean }) =>
  clsx(
    'px-6 py-2 text-sm font-medium uppercase text-mono-400 transition-all duration-200 ease-in-out focus:outline-none',
    selected && ' rounded-md text-mono-50 ring-1 ring-mono-50',
  );

export const ProjectContent = () => {
  const { projectId } = useProject();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { data, isLoading, isError, error } = useFetchProjectsSaleDetails();
  const project = data?.find(
    (project) => project.project.toLowerCase() === projectId,
  );

  if (isLoading || (!data && !isError)) {
    return <Spinner className="h-40 w-40 animate-spin-slow" />;
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
              <ProjectDescription />
            </Tab.Panel>
            <Tab.Panel className="flex flex-col gap-8 focus:outline-none">
              {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
                <ProjectContribution />
              ) : null}
              {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
                <ProjectInformation
                  saleDate={start}
                  startRegistration={startRegistration}
                  endRegistration={endRegistration}
                />
              ) : null}
              <TokenMetrics
                minTarget={minTarget}
                maxTarget={maxTarget}
                minContribution={minContribution}
                maxContribution={maxContribution}
                totalTokensForSale={totalTokensForSale}
              />
              {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
                <ContributeButton />
              ) : null}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="hidden grid-cols-2 gap-x-8 md:grid">
        <div className="flex flex-col gap-16">
          {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' ? (
            <ProjectContribution />
          ) : null}
          <ProjectDescription />
        </div>
        <div className="display flex flex-col gap-8">
          {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
            <ProjectInformation
              saleDate={start}
              startRegistration={startRegistration}
              endRegistration={endRegistration}
            />
          ) : null}
          <TokenMetrics
            minTarget={minTarget}
            maxTarget={maxTarget}
            minContribution={minContribution}
            maxContribution={maxContribution}
            totalTokensForSale={totalTokensForSale}
          />
          {process.env.NEXT_PUBLIC_APPLY_OPEN === 'true' ? (
            <ContributeButton />
          ) : null}
        </div>
      </div>
    </>
  );
};
