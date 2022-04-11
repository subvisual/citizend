/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import { useWeb3React } from '@web3-react/core';

/**
 * Export `useAccountKycStatus` hook.
 */

export function useAccountKycStatus(listName: string) {
  const [status, setStatus] = useState<boolean>(false);
  const { account } = useWeb3React<Web3Provider>();
  const contracts = useContracts();
  const getStatus = useCallback(async () => {
    if (!contracts?.fractal) {
      return;
    }

    try {
      const fractalId = await contracts.fractal.getFractalId(account);
      const status = await contracts.fractal.isUserInList(fractalId, listName);

      setStatus(status);
    } catch (error) {
      // Handle error
    }
  }, [account, contracts, listName]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return status;
}
