'use server';

import { getAllowedProjectApplicants } from '../idos';
import { TInternalError } from '../types';
import { projectsInfo } from './project-info';
import { keccak256, encodePacked } from 'viem';
import { MerkleTree } from 'merkletreejs';

const generateTree = (addresses: string[]): MerkleTree => {
  const data = addresses.map((addr: string) => {
    return {
      address: addr as `0x${string}`,
      leaf: keccak256(encodePacked(['address'], [addr as `0x${string}`])),
    };
  });

  const leafs = data.map(({ leaf }: any) => leaf);
  const merkleTree = new MerkleTree(leafs, keccak256, { sortPairs: true });
  return merkleTree;
};

export const generateProof = async (addresses: string[], address: string) => {
  const merkleTree = generateTree(addresses);
  return merkleTree.getHexProof(
    keccak256(encodePacked(['address'], [address as `0x${string}`])),
  );
};

// For testing purposes, to be removed
export const fetchAndGenerateProof = async (address: string) => {
  const result = await getAllowedProjectApplicants(
    projectsInfo.citizend.address,
  );

  //forward the error
  if (typeof result === 'object' && 'error' in result) {
    return result;
  }

  const merkleTree = generateTree(result);

  return merkleTree.getHexProof(
    keccak256(encodePacked(['address'], [address as `0x${string}`])),
  );
};

type TMerkleRoot = {
  root: string;
  addresses: string[];
};

export const generateMerkleRoot = async (): Promise<
  TMerkleRoot | TInternalError
> => {
  const addresses = await getAllowedProjectApplicants(
    projectsInfo.citizend.address,
  );

  if (typeof addresses === 'object' && 'error' in addresses) {
    // forward the error
    return addresses;
  }

  const root = generateTree(addresses).getHexRoot();

  return {
    root: root,
    addresses,
  };
};
