'use client';

import { useFetchProjectsSaleDetails } from '@/app/_lib/queries';
import { ProjectCard } from './project-card';
import { CardSkeleton } from '../components/skeletons/card-skeleton';

export const Projects = () => {
  const { data, isLoading, isError } = useFetchProjectsSaleDetails();

  if (isLoading || (!data && !isError)) {
    return <CardSkeleton height={'532px'} width={'433px'} />;
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
