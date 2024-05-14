'use client';

import Image from 'next/image';
import { CountDown } from './countdown';
import { useCtzndSaleStatus } from '@/app/_lib/hooks';

export const ProjectHeader = () => {
  const status = useCtzndSaleStatus();

  return (
    <div className="text-mono-50">
      <Image
        src="/citizend-logo-circle.svg"
        alt="Citizend Logo"
        width={80}
        height={80}
        priority
      />
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="mt-6">
          <h2 className="leading-10">Citizend Community Sale</h2>
          <p className="pt-2 text-mono-400 md:pt-3">
            The community-curated token launch platform of web3.
          </p>
        </div>
        {process.env.NEXT_PUBLIC_CONTRIBUTE_OPEN === 'true' &&
        status !== 'completed' ? (
          <CountDown />
        ) : null}
      </div>
      <div className="my-8 border-t border-mono-400" />
    </div>
  );
};
