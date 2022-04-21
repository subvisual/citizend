/**
 * Module dependencies.
 */

import { ContractsContext, useContracts } from 'src/context/contracts';
import { ListName } from 'src/hooks/use-owner-action';
import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

/**
 * Export `useAccountKycStatus` hook.
 */

export async function getKycStatus(
  address: string,
  contracts: ContractsContext
): Promise<boolean> {
  if (!contracts?.fractal) {
    throw new Error('getKycStatus::No fractal contract found');
  }

  const fractalId = await contracts.fractal.getFractalId(address);

  return contracts.fractal.isUserInList(fractalId, ListName);
}

/**
 * Export `useIsKYCApproved` hook.
 */

export function useIsKYCApproved() {
  const [isApproved, setIsApproved] = useState<boolean>(false);
  const { account } = useWeb3React<Web3Provider>();
  const contracts = useContracts();
  const checkIsKYCApproved = useCallback(async () => {
    try {
      const status = await getKycStatus(account, contracts);

      setIsApproved(status);
    } catch (error) {
      // Handle error
    }
  }, [account, contracts]);

  useEffect(() => {
    checkIsKYCApproved();
  }, [checkIsKYCApproved]);

  return isApproved;
}
