/**
 * Module dependencies.
 */

import { AsyncOptions, useAsync } from 'react-async';
import { BigNumber, Signer, utils } from 'ethers';
import { ContractsContext, useContracts } from 'src/context/contracts';
import { Web3Provider } from '@ethersproject/providers';
import { currencyConfig } from 'src/core/constants';
import {
  onBlockchainReject,
  onBlockchainResolve
} from 'src/core/utils/web3-api-handlers';

import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

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
 * `BuyPayload` type.
 */

type BuyPayload = {
  address: string;
  amount: string;
  signer: Signer;
  contracts: ContractsContext;
};

/**
 * Export `useSale` hook.
 */

export function useSale() {
  const [state, setState] = useState<SaleState>({
    balance: '-',
    contributions: '-',
    price: '-',
    raised: '-'
  });

  const { account, library } = useWeb3React<Web3Provider>();
  const contracts = useContracts();
  const getSaleState = useCallback(async () => {
    if (!contracts?.citizend) {
      return;
    }

    try {
      const balance = await contracts.sale1.uncappedAllocation(account);
      const myContribution = await contracts.sale1.paymentTokenToToken(balance);
      const investorCount = await contracts.sale1.investorCount();
      const raisedTokens = await contracts.sale1.allocated();
      const raised = await contracts.sale1.tokenToPaymentToken(raisedTokens);
      const price = await contracts.sale1.rate();

      setState({
        balance: utils.formatUnits(myContribution.toString()),
        contributions: investorCount.toString(),
        price: utils.formatUnits(price.toString()),
        raised: utils.formatUnits(raised.toString())
      });
    } catch (error) {
      // Handle error
    }
  }, [account, contracts]);

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

/**
 * Sale `saleBuy`.
 */

async function saleBuy(options: BuyPayload): Promise<Record<string, any>> {
  const { address, amount, contracts, signer } = options;
  const value = BigNumber.from(amount || '0');
  const paymentAmount = utils.parseUnits(
    amount,
    currencyConfig.aUsd.decimalPlaces
  );

  if (!contracts?.sale1 || value.lte(0)) {
    return;
  }

  const allowance = await contracts.aUsd.allowance(
    address,
    contracts.sale1.address
  );

  if (!allowance.gte(paymentAmount)) {
    const tx = await contracts.aUsd
      .connect(signer)
      .approve(contracts.sale1.address, paymentAmount);

    await tx.wait();
  }

  const citizendAmount = await contracts.sale1.paymentTokenToToken(
    paymentAmount
  );

  return await contracts.sale1.connect(signer).buy(citizendAmount);
}

/**
 * Export `useSaleBuy` hook.
 */

export function useSaleBuy(options?: AsyncOptions<Record<string, any>>) {
  const { account: address, library } = useWeb3React<Web3Provider>();
  const signer = library?.getSigner ? library.getSigner(0) : undefined;
  const contracts = useContracts();

  return useAsync({
    onReject: onBlockchainReject,
    onResolve: onBlockchainResolve(),
    ...options,
    deferFn: ([amount]) => saleBuy({ address, amount, contracts, signer })
  });
}
