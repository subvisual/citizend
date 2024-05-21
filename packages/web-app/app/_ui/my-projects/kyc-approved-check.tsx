'use client';

import { Spinner } from '../components/svg/spinner';
import { PropsWithChildren } from 'react';
import { Redirect } from '../components/redirect';
import { useKyc } from '@/app/_providers/kyc/context';
import { useIdOS } from '@/app/_providers/idos';

export const KycApprovedCheck = ({ children }: PropsWithChildren) => {
  const { hasProfile } = useIdOS();
  const { status, isLoading, error } = useKyc();
  if (isLoading || (!status && !error && hasProfile)) {
    return (
      <Spinner className="mx-auto h-40 w-40 animate-spin-slow text-mono-50" />
    );
  }

  if (
    typeof error === 'string' &&
    error.includes('User rejected the request')
  ) {
    return (
      <div className="mt-14 flex flex-col">
        <p>It seems like you rejected the request to connect your wallet.</p>
        <p className="mt-4">Please refresh the page and try again.</p>
      </div>
    );
  }

  if (status === 'approved') return children;

  if (error)
    return (
      <div>
        <p>Something went wrong...</p>
        <p>{error.message}</p>
      </div>
    );

  return <Redirect href="/" />;
};
