import { TProjectsPublicInfo } from '../types';
import { evmGrantee, evmGranteePublicKey } from '../wallet';

export const projectsInfo: TProjectsPublicInfo = {
  citizend: {
    id: 'citizend',
    address: evmGrantee.address,
    publicKey: evmGranteePublicKey,
  },
};
