/**
 * Module dependencies.
 */

import { AsyncOptions, useAsync } from 'react-async';
import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import { useWeb3React } from '@web3-react/core';

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
    if (!contracts?.vesting) {
      return;
    }

    try {
      const claimed = await contracts.vesting.claimed(account);
      const claimablePublic = await contracts.vesting.claimablePublic(account);
      const tokens = await contracts.citizend.balanceOf(account);
      const claimablePrivate = await contracts.vesting.claimablePrivate(
        account
      );

      setState({
        alreadyClaimed: claimed.toString(),
        claimEnabled: claimablePublic.gt(0),
        claimable: claimablePublic.toString(),
        nextRelease: 'TODO',
        refundEnabled: claimablePrivate.gt(0),
        refundable: claimablePrivate.toString(),
        tokens: tokens.toString()
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
    ...options,
    deferFn: () => {
      if (!!contracts?.vesting && !!account) {
        return contracts.vesting.connect(signer).refund(account);
      }
    }
  });
}
