'use client';

import { TChildren } from '@/app/_types';
import { useEffect, useState } from 'react';
import { PersistQueryWrapper } from './persist-query-wrapper';

export function SsrWrapper({ children }: TChildren) {
  const [isSsr, setIsSsr] = useState(true);

  useEffect(() => {
    setIsSsr(false);
  }, []);

  if (isSsr) return null;

  return children;
}
