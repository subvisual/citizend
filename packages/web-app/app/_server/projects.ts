'use server';

import { TProjectPublicInfo, TProjectsPublicInfo } from './types';

const projectInfo: TProjectsPublicInfo = {
  citizend: {
    id: 'citizendProject',
    address: '0x13526CeE07B6903DAFBC32d5093bc2cC2626381D',
    publicKey: 'UeniAEcuLfG5uXqxu00frjkzS9DTFnQFnCwG+FsMmxk',
  },
  idos: {
    id: 'idosProject',
    address: '0xb24ab6d0879e02219fd1B45C8672177CEaA6D822',
    publicKey: 'WbJyqxcefZEPJYwycuUl/PSfVqcWwQDnt04BcgV4DQk==',
  },
};

export type TProjectInfoArgs = 'citizend' | 'idos';

export const getProjectPublicInfo = async (
  id: TProjectInfoArgs,
): Promise<TProjectPublicInfo> =>
  new Promise((resolve) => {
    resolve(projectInfo[id]);
  });
