'use client';

import { ProjectProvider } from '@/app/_providers/project';
import { ProjectContent } from '@/app/_ui/project/project-content';
import { ProjectHeader } from '@/app/_ui/project/project-header';
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
    <main className="mb-56">
      <ProjectProvider value={project}>
        <ProjectHeader />
        <ProjectContent />
      </ProjectProvider>
    </main>
  );
}
