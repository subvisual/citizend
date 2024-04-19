'use server';

import { serverPublicInfo } from './idos';
import { projectsInfo } from './projects/project-info';
import { ServerPublicInfo, TInternalError, TProjectPublicInfo } from './types';

export const getServerPublicInfo = async (): Promise<ServerPublicInfo> =>
  new Promise((resolve) => {
    resolve(serverPublicInfo);
  });

export type TProjectInfoArgs = 'citizend' | 'idos';

export const getProjectPublicInfo = async (
  id: TProjectInfoArgs,
): Promise<TProjectPublicInfo | TInternalError> =>
  new Promise((resolve) => {
    const result = projectsInfo[id];

    if (!result) {
      resolve({ error: 'Project not found' });
    }
    resolve(result);
  });
