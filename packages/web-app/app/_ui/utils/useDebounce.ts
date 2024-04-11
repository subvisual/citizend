import { useRef, useEffect } from 'react';

type CallbackFunction = (...args: any[]) => void;

const useDebounce = (
  callback: CallbackFunction,
  delay: number,
): CallbackFunction => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (...args: any[]): void => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => callback(...args), delay);
  };
};

export { useDebounce };
