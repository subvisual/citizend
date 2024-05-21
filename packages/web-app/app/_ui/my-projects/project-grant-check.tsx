'use client';

import { useHasProjectGrant } from '@/app/_lib/hooks';
import { useProject } from '@/app/_providers/project/context';
import { PropsWithChildren } from 'react';
import { PROJECT_NOT_FOUND, useCanContribute } from '@/app/_lib/queries';
import { Redirect } from '../components/redirect';
import { MyProjectSkeleton } from './my-project';

export const ProjectGrantCheck = ({ children }: PropsWithChildren) => {
  const { projectId } = useProject();
  const { hasGrant, isLoading, error } = useHasProjectGrant(projectId);

  if (hasGrant) return children;

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
