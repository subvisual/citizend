'use client';

import { TProjectSaleDetails } from '@/app/_types';
import { useMyProjects } from '@/app/_lib/hooks';
import { usdRange } from '../utils/intl-formaters/usd-range';
import Link from 'next/link';
import Image from 'next/image';
import { getRelativePath } from '../utils/getRelativePath';
import { NoProjects } from './no-projects';
import { MyProjectSkeleton } from './my-project';
import { useReadCtzndSaleInvestorCount } from '@/wagmi.generated';

const ProjectRow = ({
  logo,
  project,
  minTarget,
  maxTarget,
}: TProjectSaleDetails) => {
  const { data: contributions } = useReadCtzndSaleInvestorCount();
  const totalContributions = contributions ? contributions.toString() : 0;

  return (
    <Link
      href={`/my-projects/${project}`}
      className="col-span-2 -mx-4 -my-6 rounded-md px-4 py-6 hover:bg-blue-100 md:col-span-4"
    >
      <div className="grid grid-cols-2 gap-x-6 md:grid-cols-4">
        <div className="flex gap-3">
          <Image
            src={getRelativePath(logo)}
            alt={`${project} logo`}
            width={24}
            height={24}
          />
          {project}
        </div>
        <div className="hidden md:block">{totalContributions}</div>
        <div className="hidden md:block">{usdRange(minTarget, maxTarget)}</div>
        <div>0 USDC</div>
      </div>
    </Link>
  );
};

export default function MyProjects() {
  const { data, isLoading, error } = useMyProjects();
  if (isLoading || (!data && !error)) {
    return <MyProjectSkeleton />;
  }

  if (error)
    return (
      <div className="mt-14">
        <p>Something went wrong...</p>
        <p>{typeof error === 'object' ? error?.message : ''}</p>
      </div>
    );

  if (!data.length) return <NoProjects />;

  return (
    <div className="mb-44 mt-14 rounded-md bg-mono-50 px-4 py-6">
      <div className="display grid grid-cols-2 gap-x-6 gap-y-6 text-mono-950 md:grid-cols-4">
        <h4 className="text-sm uppercase text-mono-800 ">Project</h4>
        <h4 className="hidden text-sm uppercase text-mono-800 md:block">
          Contributions
        </h4>
        <h4 className="hidden text-sm uppercase text-mono-800 md:block">
          Targeted Raise
        </h4>
        <h4 className="text-sm uppercase text-mono-800">My Contribution</h4>
        <div
          id="separator"
          className="col-span-2 -mx-4 border-b border-mono-200 md:col-span-4"
        />
        {data.map((project) => (
          <ProjectRow key={project.project} {...project} />
        ))}
      </div>
    </div>
  );
}
