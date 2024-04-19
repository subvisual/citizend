'use client';

import { ProjectProvider } from '@/app/_providers/project';
import { MyProject } from '@/app/_ui/my-projects/my-project';
import { ProjectGrantCheck } from '@/app/_ui/my-projects/project-grant-check';
import { useMemo } from 'react';

type TProjectProps = {
  params: {
    id: string;
  };
};

export default function MyProjectPage({ params }: TProjectProps) {
  const project = useMemo(() => {
    return {
      projectId: params.id?.toLowerCase(),
    };
  }, [params.id]);

  return (
    <main className="mb-56">
      <ProjectProvider value={project}>
        <ProjectGrantCheck>
          <MyProject />
        </ProjectGrantCheck>
      </ProjectProvider>
    </main>
  );
}
