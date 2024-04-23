import { sepolia } from 'viem/chains';
import { TProjectsPublicInfo } from '../types';
import { ctzndSaleAddress } from '@/wagmi.generated';

export const projectsInfo: TProjectsPublicInfo = {
  citizend: {
    id: 'citizendProject',
    address: ctzndSaleAddress[sepolia.id],
    publicKey: 'UeniAEcuLfG5uXqxu00frjkzS9DTFnQFnCwG+FsMmxk',
  },
  idos: {
    id: 'idosProject',
    address: '0xb24ab6d0879e02219fd1B45C8672177CEaA6D822',
    publicKey: 'WbJyqxcefZEPJYwycuUl/PSfVqcWwQDnt04BcgV4DQk==',
  },
};
