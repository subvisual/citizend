/**
 * Module dependencies.
 */

import { AsyncOptions, useAsync } from 'react-async';
import { Web3Provider } from '@ethersproject/providers';
import {
  onBlockchainReject,
  onBlockchainResolve
} from 'src/core/utils/web3-api-handlers';

import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import { useWeb3React } from '@web3-react/core';
import { utils } from 'ethers';
import dayjs from 'src/core/utils/dayjs';

/**
 * Export `VestingState` type.
 */

export type VestingState = {
  alreadyClaimed: string;
  claimEnabled: boolean;
  claimable: string;
  nextRelease: string;
  refundEnabled: boolean;
  refundable: string;
  tokens: string;
};

/**
 * `getFirstDayOfNextMonth`.
 */

function getFirstDayOfNextMonth() {
  const now = dayjs();

  return now
    .month(now.month() + 1)
    .date(1)
    .format('DD/MM/YYYY');
}

/**
 * Export `useVesting` hook.
 */

export function useVesting() {
  const [state, setState] = useState<VestingState>({
    alreadyClaimed: '-',
    claimEnabled: false,
    claimable: '-',
    nextRelease: '-',
    refundEnabled: false,
    refundable: '-',
    tokens: '-'
  });

  const { account } = useWeb3React<Web3Provider>();
  const contracts = useContracts();
  const getVestingState = useCallback(async () => {
    if (!contracts?.vesting || !contracts?.sale1 || !contracts?.citizend) {
      return;
    }

    try {
      const claimableTotal = await contracts.vesting.claimable(account);
      const claimed = await contracts.vesting.claimed(account);
      const refundable = await contracts.sale1.refundAmount(account);
      const tokens = await contracts.citizend.balanceOf(account);

      const ctndDecimals = await contracts.citizend.decimals();
      const aUsdDecimals = await contracts.aUsd.decimals();

      setState({
        alreadyClaimed: utils.formatUnits(claimed, ctndDecimals),
        claimEnabled: claimableTotal.gt(0),
        claimable: utils.formatUnits(claimableTotal, ctndDecimals),
        nextRelease: getFirstDayOfNextMonth(),
        refundEnabled: refundable.gt(0),
        refundable: utils.formatUnits(refundable, aUsdDecimals),
        tokens: utils.formatUnits(tokens, ctndDecimals)
      });
    } catch (error) {
      // Handle error
    }
  }, [account, contracts]);

  useEffect(() => {
    if (!account) {
      return;
    }

    getVestingState();
  }, [account, getVestingState]);

  return state;
}

/**
 * Export `useClaim` hook.
 */

export function useClaim(options?: AsyncOptions<Record<string, any>>) {
  const { account, library } = useWeb3React<Web3Provider>();
  const signer = library?.getSigner ? library.getSigner(0) : undefined;
  const contracts = useContracts();

  return useAsync({
    onReject: onBlockchainReject,
    onResolve: onBlockchainResolve(),
    ...options,
    deferFn: () => {
      if (!!contracts?.vesting && !!account) {
        return contracts.vesting.connect(signer).claim(account);
      }
    }
  });
}

/**
 * Export `useRefund` hook.
 */

export function useRefund(options?: AsyncOptions<Record<string, any>>) {
  const { account, library } = useWeb3React<Web3Provider>();
  const signer = library?.getSigner ? library.getSigner(0) : undefined;
  const contracts = useContracts();

  return useAsync({
    onReject: onBlockchainReject,
    onResolve: onBlockchainResolve(),
    ...options,
    deferFn: () => {
      if (!!contracts?.vesting && !!account) {
        return contracts.vesting.connect(signer).refund(account);
      }
    }
  });
}
