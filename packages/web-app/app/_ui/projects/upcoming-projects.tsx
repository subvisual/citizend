'use client';

import { useFetchProjectsSaleDetails } from '@/app/_lib/queries';
import { ProjectCard } from '../components/project-card';

export const UpcomingProjects = () => {
  const { data, isLoading, isError } = useFetchProjectsSaleDetails();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="flex justify-center">
      {data?.map((project) => (
        <ProjectCard key={project.project} {...project} />
      ))}
    </div>
  );
};
