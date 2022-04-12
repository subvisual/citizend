/**
 * Module dependencies.
 */

import { BigNumber } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import fromUnixTime from 'date-fns/fromUnixTime';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';

/**
 * Current date.
 */

// TODO: Should come from the server.
const currentDate = new Date().getTime();

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
 * `Status` type.
 */

type Status = typeof appState[keyof typeof appState];

/**
 * Normalize unix time.
 */

function normalizeTime(unixTime: BigNumber) {
  return fromUnixTime(unixTime.toNumber());
}

/**
 * Export `useAppStatus` hook.
 */

export function useAppStatus() {
  const [status, setStatus] = useState<Status | undefined>();
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

      if (isAfter(currentDate, vestingStartDate)) {
        setStatus('VESTING');

        return;
      }

      if (
        isAfter(currentDate, saleEndDate) &&
        isBefore(currentDate, vestingStartDate)
      ) {
        setStatus('COUNTDOWN');

        return;
      }

      if (
        isAfter(currentDate, saleStartDate) &&
        isBefore(currentDate, saleEndDate)
      ) {
        setStatus('SALE');

        return;
      }

      setStatus('SOON');
    } catch (error) {
      // TODO: Handle error
    }
  }, [contracts.sale1, contracts.vesting]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  return status;
}
