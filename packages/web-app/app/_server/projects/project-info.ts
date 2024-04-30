import { TProjectsPublicInfo } from '../types';
import { evmGrantee } from '../wallet';

export const projectsInfo: TProjectsPublicInfo = {
  citizend: {
    id: 'citizendProject',
    address: evmGrantee.address,
    publicKey: 'UeniAEcuLfG5uXqxu00frjkzS9DTFnQFnCwG+FsMmxk',
  },
  idos: {
    id: 'idosProject',
    address: '0xb24ab6d0879e02219fd1B45C8672177CEaA6D822',
    publicKey: 'WbJyqxcefZEPJYwycuUl/PSfVqcWwQDnt04BcgV4DQk==',
  },
};
