/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import { useWeb3React } from '@web3-react/core';

/**
 * Export `useBalance` hook.
 */

export function useBalance() {
  const [balance, setBalance] = useState<string>('-');
  const { account, library } = useWeb3React<Web3Provider>();
  const contracts = useContracts();
  const getBalance = useCallback(async () => {
    if (!contracts?.citizend) {
      return;
    }

    try {
      const value = await contracts.sale1.uncappedAllocation(account);

      setBalance(value.toString());
    } catch (error) {
      // Handle error
    }
  }, [contracts, account]);

  useEffect(() => {
    if (!library) {
      return;
    }

    getBalance();

    library.on('block', () => {
      getBalance();
    });

    return () => {
      library.removeAllListeners('block');
    };
  }, [getBalance, library]);

  return balance;
}
