/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import { useWeb3React } from '@web3-react/core';
import { utils } from 'ethers';

/**
 * Export `SaleState` type.
 */

export type SaleState = {
  balance: string;
  contributions: string;
  price: string;
  raised: string;
};

/**
 * Export `useSale` hook.
 */

export function useSale() {
  const [state, setState] = useState<SaleState | Record<string, never>>({});
  const { account, library } = useWeb3React<Web3Provider>();
  const contracts = useContracts();
  const getSaleState = useCallback(async () => {
    if (!contracts?.citizend) {
      return;
    }

    try {
      const balance = await contracts.sale1.uncappedAllocation(account);
      const investorCount = await contracts.sale1.investorCount();
      const totalRaised = await contracts.sale1.allocated();
      const raised = await contracts.sale1.tokenToPaymentToken(totalRaised);
      const price = await contracts.sale1.rate();

      setState({
        balance: balance.toString(),
        contributions: investorCount.toString(),
        price: utils.formatUnits(price.toString()),
        raised: raised.toString()
      });
    } catch (error) {
      // Handle error
    }
  }, [contracts, account]);

  useEffect(() => {
    if (!library) {
      return;
    }

    getSaleState();

    library.on('block', () => {
      getSaleState();
    });

    return () => {
      library.removeAllListeners('block');
    };
  }, [getSaleState, library]);

  return state;
}
