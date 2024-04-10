import { useEffect, useState } from 'react';

const oneMinuteInMilliseconds = 1000 * 60;
const oneHourInMilliseconds = oneMinuteInMilliseconds * 60;
const oneDayInMilliseconds = oneHourInMilliseconds * 24;

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / oneDayInMilliseconds);
  const hours = Math.floor(
    (countDown % oneDayInMilliseconds) / oneHourInMilliseconds,
  );
  const minutes = Math.floor(
    (countDown % oneHourInMilliseconds) / oneMinuteInMilliseconds,
  );
  const seconds = Math.floor((countDown % oneMinuteInMilliseconds) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const useCountdown = (targetDate: bigint | number) => {
  const countDownDate =
    typeof targetDate === 'number'
      ? targetDate
      : parseInt(targetDate.toLocaleString());
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    const now = new Date().getTime();

    if (countDownDate <= now) {
      setCountDown(0);
    } else {
      interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [countDownDate]);

  return getReturnValues(countDown);
};
