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

const generateTabClassName = ({ selected }: { selected: boolean }) =>
  clsx(
    'px-6 py-2 text-sm font-medium uppercase text-mono-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400',
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
              <ProjectInformation
                saleDate={start}
                startRegistration={startRegistration}
                endRegistration={endRegistration}
              />
              <TokenMetrics
                minTarget={minTarget}
                maxTarget={maxTarget}
                minContribution={minContribution}
                maxContribution={maxContribution}
                totalTokensForSale={totalTokensForSale}
              />
              <ContributeButton />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="hidden grid-cols-2 gap-x-8 md:grid">
        <ProjectDescription />
        <div className="display flex flex-col gap-8">
          <ProjectInformation
            saleDate={start}
            startRegistration={startRegistration}
            endRegistration={endRegistration}
          />
          <TokenMetrics
            minTarget={minTarget}
            maxTarget={maxTarget}
            minContribution={minContribution}
            maxContribution={maxContribution}
            totalTokensForSale={totalTokensForSale}
          />
          <ContributeButton />
        </div>
      </div>
    </>
  );
};
