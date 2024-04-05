'use client';

import { ProjectProvider } from '@/app/_providers/project';
import { ContributeButton } from '@/app/_ui/projects/contribute-button';
import { ProjectDescription } from '@/app/_ui/projects/project-description';
import { TokenMetrics } from '@/app/_ui/projects/token-metrics';
import { useMemo } from 'react';

type TProjectProps = {
  params: {
    id: string;
  };
};

export default function Project({ params }: TProjectProps) {
  const project = useMemo(() => {
    return {
      projectId: params.id,
    };
  }, [params.id]);

  if (params.id !== 'citizend') {
    return '404 Not Found';
  }

  return (
    <main className="grid grid-cols-1 gap-x-17 gap-y-9 lg:grid-cols-2">
      <ProjectProvider value={project}>
        <ProjectDescription />
        <div className="display flex flex-col gap-8 lg:pt-27">
          <TokenMetrics
            token="CTND"
            targetRaiseRange="2.M - 8M ETH"
            totalSupply="800 000 000 CTND"
            targetedDate={new Date('2024-04-29')}
            minPricePerToken="0.10$"
            maxPricePerToken="10.00$"
            totalSupplyDistributed="10%"
          />
          <ContributeButton />
        </div>
      </ProjectProvider>
    </main>
  );
}
