'use client';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { ProjectDescription } from './project-description';
import { ProjectInformation } from './project-information';
import { TokenMetrics } from './token-metrics';
import { ContributeButton } from './contribute-button';

const generateTabClassName = ({ selected }: { selected: boolean }) =>
  clsx(
    'px-6 py-2 text-sm font-medium uppercase text-mono-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400',
    selected && ' rounded-md text-mono-50 ring-1 ring-mono-50',
  );

export const ProjectContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
                saleDate={new Date('2024-05-05T00:00:00+00:00')}
                registrationsStartDate={new Date('2024-04-24T00:00:00+00:00')}
                registrationsEndDate={new Date('2024-05-04T00:00:00+00:00')}
              />
              <TokenMetrics
                targetRaiseRange="2.M - 8M ETH"
                totalSupply="800 000 000 CTND"
                minPricePerToken="0.10$"
                maxPricePerToken="10.00$"
                totalSupplyDistributed="10%"
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
            saleDate={new Date('2024-05-05T00:00:00+00:00')}
            registrationsStartDate={new Date('2024-04-24T00:00:00+00:00')}
            registrationsEndDate={new Date('2024-05-04T00:00:00+00:00')}
          />
          <TokenMetrics
            targetRaiseRange="2.M - 8M ETH"
            totalSupply="800 000 000 CTND"
            minPricePerToken="0.10$"
            maxPricePerToken="10.00$"
            totalSupplyDistributed="10%"
          />
          <ContributeButton />
        </div>
      </div>
    </>
  );
};
