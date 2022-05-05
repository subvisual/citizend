/**
 * Module dependencies.
 */

import { BigNumber } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useContracts } from 'src/context/contracts';
// import formatISO from 'date-fns/formatISO';
// import fromUnixTime from 'date-fns/fromUnixTime';
// import isAfter from 'date-fns/isAfter';
// import isBefore from 'date-fns/isBefore';
// import isDate from 'date-fns/isDate';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

/**
 * Register `dayjs` plugins.
 */

dayjs.extend(timezone);
dayjs.extend(utc);

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
  return dayjs.unix(unixTime.toNumber()).toISOString();
}

/**
 * `useReloadOnTime` hook.
 */

function useReloadOnTime(timestamp: string) {
  useEffect(() => {
    if (!timestamp) {
      return;
    }

    const limitDate = dayjs(timestamp).utc();

    console.log("limitDate: ", limitDate.toISOString());


    if (!limitDate.isValid() || limitDate.isBefore(dayjs.utc())) {
      return;
    }

    console.log("Timezone: ", dayjs.tz.guess());


  //   const timeout = setTimeout(() => {
  //     window.location.reload();
  //   }, Math.abs(Number(differenceInSeconds(new Date(), dateTimestamp)) * 1000));

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  }, [timestamp]);
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
      const currentDate = new Date().getTime();
      const saleStart = await contracts.sale1.start();
      const saleEnd = await contracts.sale1.end();
      const vestingStart = await contracts.vesting.startTime();
      const saleStartDate = normalizeTime(saleStart);
      console.log("saleStartDate: ", saleStartDate, dayjs(saleStartDate).utc().toISOString());
      const saleEndDate = normalizeTime(saleEnd);
      const vestingStartDate = normalizeTime(vestingStart);
      const handleSetStatus = (state: State) => {
        setStatus({
          saleEnd: dayjs(saleEndDate).utc().toISOString(),
          saleStart: dayjs(saleStartDate).utc().toISOString(),
          state,
          vestingStart: dayjs(vestingStartDate).utc().toISOString()
        });
      };

      // if (isAfter(currentDate, vestingStartDate)) {
      //   handleSetStatus('VESTING');

      //   return;
      // }

      // if (
      //   isAfter(currentDate, saleEndDate) &&
      //   isBefore(currentDate, vestingStartDate)
      // ) {
      //   handleSetStatus('COUNTDOWN');

      //   return;
      // }

      // if (
      //   isAfter(currentDate, saleStartDate) &&
      //   isBefore(currentDate, saleEndDate)
      // ) {
      //   handleSetStatus('SALE');

      //   return;
      // }

      handleSetStatus('SOON');
    } catch (error) {
      toast.error(`A blockchain error occurred.\n${error}`, );
    }
  }, [contracts]);

  useEffect(() => {
    getStatus();
  }, [getStatus]);


  useReloadOnTime(status.saleStart);
  // useReloadOnTime(status.saleEnd);
  // useReloadOnTime(status.vestingStart);

  return status;
}
