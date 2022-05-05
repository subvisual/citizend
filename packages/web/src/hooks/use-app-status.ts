/**
 * Module dependencies.
 */

import { BigNumber } from 'ethers';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import dayjs from 'src/core/utils/dayjs';

/**
 * App state.
 */

const appState = {
  comingSoon: 'SOON',
  countdown: 'COUNTDOWN',
  sale: 'SALE',
  vesting: 'VESTING'
} as const;

/**
 * `State` type.
 */

type State = typeof appState[keyof typeof appState];

/**
 * `AppStatus` type.
 */

export type AppStatus = {
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
    }, remainingTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [timestamp]);
}

/**
 * Normalize unix time.
 */

function normalizeTime(unixTime: BigNumber) {
  return dayjs.unix(unixTime.toNumber());
}

/**
 * Export `useAppStatus` hook.
 */

export function useAppStatus() {
  const [status, setStatus] = useState<AppStatus | Record<string, never>>({});
  const contracts = useContracts();
  const getStatus = useCallback(async () => {
    if (!contracts?.sale1 || !contracts.vesting) {
      return;
    }

    try {
      const saleStart = await contracts.sale1.start();
      const saleEnd = await contracts.sale1.end();
      const vestingStart = await contracts.vesting.startTime();
      const saleStartDate = normalizeTime(saleStart);
      const saleEndDate = normalizeTime(saleEnd);
      const vestingStartDate = normalizeTime(vestingStart);
      const handleSetStatus = (state: State) => {
        setStatus({
          saleEnd: saleEnd.toNumber(),
          saleStart: saleStart.toNumber(),
          state,
          vestingStart: vestingStart.toNumber()
        });
      };

      if (dayjs().isAfter(vestingStartDate)) {
        handleSetStatus('VESTING');

        return;
      }

      if (
        dayjs().isAfter(saleEndDate) &&
        dayjs().isBefore(vestingStartDate)
      ) {
        handleSetStatus('COUNTDOWN');

        return;
      }

      if (
        dayjs().isAfter(saleStartDate) &&
        dayjs().isBefore(saleEndDate)
      ) {
        handleSetStatus('SALE');

        return;
      }

      handleSetStatus('SOON');
    } catch (error) {
      toast.error(`A blockchain error occurred.\n${error}`);
    }
  }, [contracts]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  useReloadOnTime(status.saleStart);
  useReloadOnTime(status.saleEnd);
  useReloadOnTime(status.vestingStart);

  return status;
}
