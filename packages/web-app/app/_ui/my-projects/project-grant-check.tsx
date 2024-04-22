'use client';

import { useHasProjectGrant } from '@/app/_lib/hooks';
import { useProject } from '@/app/_providers/project/context';
import { PropsWithChildren } from 'react';
import { PROJECT_NOT_FOUND } from '@/app/_lib/queries';
import { Redirect } from '../components/redirect';
import { MyProjectSkeleton } from './my-project';

export const ProjectGrantCheck = ({ children }: PropsWithChildren) => {
  const { projectId } = useProject();
  const { hasGrant, isLoading, error } = useHasProjectGrant(projectId);

  if (isLoading || (!hasGrant && !error)) {
    return <MyProjectSkeleton />;
  }

  if (error && error?.message !== PROJECT_NOT_FOUND)
    return (
      <div>
        <p>Something went wrong...</p>
        <p>{error.message}</p>
      </div>
    );

  if (hasGrant) return children;

  <Redirect href="/my-projects" />;
};
