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
  const contracts = useContracts();
  const { account, library } = useWeb3React<Web3Provider>();
  const getBalance = useCallback(() => {
    if (!contracts?.citizend) {
      return;
    }

    contracts.citizend
      .balanceOf(account)
      .then(value => setBalance(value.toString()))
      .catch
      // Handle error.
      ();
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
