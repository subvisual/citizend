'use server';

import { getAllowedProjectApplicants } from '../idos';
import { TInternalError } from '../types';
import { projectsInfo } from './project-info';
import { keccak256, encodePacked } from 'viem';
import { MerkleTree } from 'merkletreejs';

const generateRoot = async (addresses: string[]) => {
  const data = addresses.map((addr: string) => {
    return {
      address: addr as `0x${string}`,
      leaf: keccak256(encodePacked(['address'], [addr as `0x${string}`])),
    };
  });

  const leafs = data.map(({ leaf }: any) => leaf);
  const merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true });
  return merkleTree.getHexRoot();
};

export const generateMerkleRoot = async (): Promise<
  string | TInternalError
> => {
  const result = await getAllowedProjectApplicants(
    projectsInfo.citizend.address,
  );

  if (Array.isArray(result)) {
    const root = await generateRoot(result);

    return root;
  } else {
    const { error } = result;
    console.error(error);
    return { error: error };
  }
};
