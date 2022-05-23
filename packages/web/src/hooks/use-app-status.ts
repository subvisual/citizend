/**
 * Module dependencies.
 */

import { BigNumber } from 'ethers';
import { toast } from 'react-toastify';
import { useAsync } from 'react-async';
import { useCallback, useEffect } from 'react';
import { useContracts } from 'src/context/contracts';
import dayjs from 'src/core/utils/dayjs';

/**
 * App state.
 */

const appState = {
  comingSoon: 'SOON',
  countdown: 'COUNTDOWN',
  sale: 'SALE',
  vesting: 'VESTING',
  vestingUnknown: 'VESTING_UNKNOWN'
} as const;

/**
 * `State` type.
 */

type State = typeof appState[keyof typeof appState];

/**
 * `AppStatus` type.
 */

export type AppStatus = {
  isCapCalculated: boolean;
  state: State;
  saleStart: number;
  saleEnd: number;
  vestingStart: number;
};

/**
 * `useReloadOnTime` hook.
 */

function useReloadOnTime(timestamp: number) {
  useEffect(() => {
    if (!timestamp) {
      return;
    }

    const limitDate = dayjs.unix(timestamp);

    if (!limitDate.isValid()) {
      return;
    }

    const remainingTime = limitDate.diff(dayjs(), 'seconds');

    // Is already in the past.
    if (remainingTime <= 0) {
      return;
    }

    const timeout = setTimeout(() => {
      window.location.reload();
    }, (remainingTime + 2) * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [timestamp]);
}

/**
 * Normalize unix time.
 */

function normalizeTime(unixTime: BigNumber) {
  if (!unixTime) {
    return undefined;
  }

  return dayjs.unix(unixTime.toNumber());
}

/**
 * Export `useAppStatus` hook.
 */

export function useAppStatus() {
  const contracts = useContracts();
  const getStatus = useCallback(async () => {
    if (!contracts?.sale1 || !contracts.vesting) {
      return;
    }

    const saleStart = await contracts.sale1.start();
    const saleEnd = await contracts.sale1.end();
    const isCapCalculated = await contracts.sale1.risingTide_isValidCap();
    const vestingStart = await contracts.vesting.startTime();
    const saleStartDate = normalizeTime(saleStart);
    const saleEndDate = normalizeTime(saleEnd);
    const vestingStartDate = normalizeTime(vestingStart);
    const getStatus = (state: State) => ({
      isCapCalculated,
      saleEnd: !!saleEnd?.toNumber && saleEnd.toNumber(),
      saleStart: !!saleStart?.toNumber && saleStart.toNumber(),
      state,
      vestingStart: !!vestingStart?.toNumber && vestingStart.toNumber()
    });

    if (dayjs().isAfter(saleStartDate) && dayjs().isBefore(saleEndDate)) {
      return getStatus('SALE');
    }

    if (vestingStart.eq(0)) {
      return getStatus('VESTING_UNKNOWN');
    }

    if (dayjs().isAfter(saleEndDate) && dayjs().isBefore(vestingStartDate)) {
      return getStatus('COUNTDOWN');
    }

    if (dayjs().isAfter(vestingStartDate)) {
      return getStatus('VESTING');
    }

    return getStatus('SOON');
  }, [contracts]);

  const {
    data: status,
    error,
    isPending
  } = useAsync({
    onReject: error => {
      toast.error(`An error occurred. ${error}`);
    },
    promiseFn: getStatus
  });

  useReloadOnTime(status?.saleStart);
  useReloadOnTime(status?.saleEnd);
  useReloadOnTime(status?.vestingStart);

  return {
    ...status,
    error,
    isLoading: isPending
  };
}
