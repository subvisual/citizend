/**
 * Module dependencies.
 */

import { Contract, ethers } from 'ethers';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

/**
 * `Props` type.
 */

type Props = {
  children: ReactNode;
};

/**
 * `ContractsName` type.
 */

type ContractsNames = 'aUsd' | 'citizend' | 'fractal' | 'sale1' | 'vesting';

/**
 * Contracts folder.
 */

const contractsFolder =
  process.env.NEXT_PUBLIC_DAO_CONTRACTS_FOLDER || 'mandala';

/**
 * Export `ContractsContext` type.
 */

export type ContractsContext =
  | Record<ContractsNames, Contract>
  | Record<string, never>;

/**
 * Web3 contracts context.
 */

const Web3ContractsContext = createContext<ContractsContext>({});

/**
 * Export `useContracts` hook.
 */

export function useContracts(): ContractsContext {
  return useContext(Web3ContractsContext);
}

/**
 * `initializeContracts` hook.
 */

function initializeContracts(library: Web3Provider): ContractsContext {
  const contractsConfig = {
    aUsd: require(`contracts/${contractsFolder}/aUSD.json`),
    citizend: require(`contracts/${contractsFolder}/Citizend.json`),
    fractal: require(`contracts/${contractsFolder}/FractalRegistry.json`),
    sale1: require(`contracts/${contractsFolder}/Sale1.json`),
    vesting: require(`contracts/${contractsFolder}/Vesting.json`)
  };

  if (Object.values(contractsConfig).every(({ address }) => !address)) {
    return {};
  }

  return Object.entries(contractsConfig as ContractsContext).reduce(
    (contracts, [name, { abi = [], address }]) => ({
      ...contracts,
      [name]: new ethers.Contract(address, abi, library.getSigner(0))
    }),
    {}
  );
}

/**
 * Export `ContractsProvider` component.
 */

export function ContractsProvider({ children }: Props) {
  const { chainId, library } = useWeb3React<Web3Provider>();
  const [contracts, setContracts] = useState<ContractsContext>({});

  useEffect(() => {
    if (!library || !chainId) {
      return;
    }

    try {
      setContracts(initializeContracts(library));
      window.xxx = initializeContracts(library);
    } catch (error) {
      throw new Error(`
        Contracts Schema for '${contractsFolder}' couldn't be loaded or were wrongly generated.
        Check the files in 'contracts/${contractsFolder}/Citizend.json'.
        Also, check your 'NEXT_PUBLIC_DAO_CONTRACTS_FOLDER' environment variable if the path is not as expected.
      `);
    }
  }, [chainId, library]);

  return (
    <Web3ContractsContext.Provider value={contracts}>
      {children}
    </Web3ContractsContext.Provider>
  );
}
