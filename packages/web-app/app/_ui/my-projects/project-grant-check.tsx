'use client';

import { useProject } from '@/app/_providers/project/context';
import { PropsWithChildren } from 'react';
import {
  PROJECT_NOT_FOUND,
  useCanContribute,
  useFetchProjectsSaleDetails,
} from '@/app/_lib/queries';
import { Redirect } from '../components/redirect';
import { MyProjectSkeleton } from './my-project';
import { useAccount } from 'wagmi';

export const ProjectGrantCheck = ({ children }: PropsWithChildren) => {
  const { address } = useAccount();
  const { projectId } = useProject();
  const { data, isLoading, error } = useFetchProjectsSaleDetails();
  const project = data?.find(
    (project) => project.project.toLowerCase() === projectId,
  );
  const { data: canContribute } = useCanContribute(project?.address, address);

  if (canContribute) return children;

  if (isLoading || !error) {
    return <MyProjectSkeleton />;
  }

  if (error && error?.message !== PROJECT_NOT_FOUND)
    return (
      <div>
        <p>Something went wrong...</p>
        <p>{error.message}</p>
      </div>
    );

  <Redirect href="/my-projects" />;
};
