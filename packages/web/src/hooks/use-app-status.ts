/**
 * Module dependencies.
 */

import { BigNumber } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
import React from 'react';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import formatISO from 'date-fns/formatISO';
import fromUnixTime from 'date-fns/fromUnixTime';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import isDate from 'date-fns/isDate';
import { toast } from 'react-toastify';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'
import { timeStamp } from 'console';

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
  saleStart: string;
  saleEnd: string;
  vestingStart: string;
};

/**
 * Normalize unix time.
 */

function normalizeTime(unixTime: BigNumber) {
  return fromUnixTime(unixTime.toNumber());
}

/**
 * `useReloadOnTime` hook.
 */

function useReloadOnTime(timestamp: string) {
  // useEffect(() => {
  //   if (!timestamp) {
  //     return;
  //   }

  //   const dateTimestamp = new Date(timestamp);

  //   if (!isDate(dateTimestamp) || isAfter(new Date(), dateTimestamp)) {
  //     return;
  //   }

  //   const timeout = setTimeout(() => {
  //     window.location.reload();
  //   }, Math.abs(Number(differenceInSeconds(new Date(), dateTimestamp)) * 1000));

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [timestamp]);
}

/**
 * Export `useAppStatus` hook.
 */

export function useAppStatus() {
  const [status, setStatus] = useState<AppStatus | Record<string, never>>({});
  const contracts = useContracts();
  const getStatus = useCallback(async () => {
    console.log('getStatus');

    if (!contracts?.sale1 || !contracts.vesting) {
      return;
    }

    console.log('getStatus with contracts');

    try {
      const currentDate = new Date().getTime();
      const saleStart = await contracts.sale1.start();
      const saleEnd = await contracts.sale1.end();
      const vestingStart = await contracts.vesting.startTime();
      const saleStartDate = normalizeTime(saleStart);
      const saleEndDate = normalizeTime(saleEnd);
      const vestingStartDate = normalizeTime(vestingStart);
      const handleSetStatus = (state: State) => {
        setStatus({
          saleEnd: formatISO(saleEndDate),
          saleStart: formatISO(saleStartDate),
          state,
          vestingStart: formatISO(vestingStartDate)
        });
      };

      if (isAfter(currentDate, vestingStartDate)) {
        handleSetStatus('VESTING');

        return;
      }

      if (
        isAfter(currentDate, saleEndDate) &&
        isBefore(currentDate, vestingStartDate)
      ) {
        handleSetStatus('COUNTDOWN');

        return;
      }

      if (
        isAfter(currentDate, saleStartDate) &&
        isBefore(currentDate, saleEndDate)
      ) {
        handleSetStatus('SALE');

        return;
      }

      handleSetStatus('SOON');
    } catch (error) {
      toast.error(`A blockchain error occurred.`);
    }
  }, [contracts]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);

  console.log("status: ", status);


  // useReloadOnTime(status.saleStart);
  // useReloadOnTime(status.saleEnd);
  useReloadOnTime(status.vestingStart);

  return status;
}
