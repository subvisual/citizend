import { createContext, useContext } from 'react';

export type TProjectContextValue = {
  projectId: string;
};

export const ProjectContext = createContext<TProjectContextValue | null>(null);

export const useProject = () => {
  const project = useContext(ProjectContext);

  if (!project) {
    throw new Error('Project is not initialized');
  }

  return project;
};
