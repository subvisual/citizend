'use server';

import { serverPublicInfo } from './idos';
import { ServerPublicInfo } from './types';

export const getServerPublicInfo = async (): Promise<ServerPublicInfo> =>
  new Promise((resolve) => {
    resolve(serverPublicInfo);
  });
