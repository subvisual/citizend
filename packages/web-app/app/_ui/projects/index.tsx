'use client';

import { useFetchProjectsSaleDetails } from '@/app/_lib/queries';
import { ProjectCard } from './project-card';
import { Spinner } from '../components/svg/spinner';

export const Projects = () => {
  const { data, isLoading, isError } = useFetchProjectsSaleDetails();

  if (isLoading || (!data && !isError)) {
    return <Spinner className="h-40 w-40 animate-spin-slow" />;
  }

  if (isError) return <div>Something went wrong...</div>;

  return (
    <div className="flex justify-center">
      {data?.map((project) => (
        <ProjectCard key={project.project} {...project} />
      ))}
    </div>
  );
};
