'use client';

import { useKyc } from '@/app/_providers/kyc/context';
import { ID } from '../../svg/id';
import { useIdOS } from '@/app/_providers/idos';
import Link from 'next/link';
import { Check } from '../../svg/check';
import { idOSCredentialStatus } from '@/app/_types/idos';
import { ERRORS } from '@/app/_providers/kyc';

const getNotVerifiedMessage = (status: idOSCredentialStatus | undefined) => {
  if (status === 'expired') return 'ID verification expired';
  if (status === 'rejected') return 'ID verification rejected';
  return 'Not verified';
};

const Status = () => {
  const { getProviderUrl, address } = useIdOS();
  const { status, error, isLoading, isBlockedCountry } = useKyc();
  if (!address) return 'wallet not connected';

  const providerUrl = getProviderUrl(address);

  if (isBlockedCountry) {
    return (
      <>
        <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-red-700"></div>
        <h4>Id verification rejected</h4>
        <p className="text-start">
          To be able to contribute to this project, you must have an approved ID
          Plus verification by Fractal ID.
        </p>
        <Link
          href={providerUrl}
          className="select-none rounded-md text-xs text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
        >
          Click here to check your verification status
        </Link>
      </>
    );
  }

  if (status === 'pending' || status === 'contacted') {
    return (
      <>
        <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-yellow-500"></div>
        <h4>Verification in progress</h4>
        <p className="text-start">
          Your information is currently being verified.
        </p>
        <Link
          href={
            process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
              ? 'https://app.next.fractal.id/'
              : 'https://app.fractal.id/'
          }
          className="select-none rounded-md text-xs text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
        >
          Manage my ID
        </Link>
      </>
    );
  }

  if (status === 'approved') {
    return (
      <>
        <div className="flex items-center gap-2">
          <h4>Verified citizend Passport</h4>
          <Check />
        </div>
        <Link
          href={'https://dashboard.idos.network/'}
          className="select-none rounded-md text-xs text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
        >
          Manage my ID
        </Link>
      </>
    );
  }

  if (!status && isLoading) return 'Loading...';
  if (error && error !== ERRORS.MISSING_FRACTAL_AG)
    return 'Something went wrong';

  return (
    <>
      <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-red-700"></div>
      <h4>{getNotVerifiedMessage(status)}</h4>
      <p className="text-start">
        To be able to contribute to this project, you must have an approved
        citizend Passport (ID Plus verification by Fractal ID).
      </p>
      <Link
        href={providerUrl}
        className="select-none rounded-md text-xs text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
      >
        Click here to check your verification status
      </Link>
    </>
  );
};

export const IdStatus = () => (
  <>
    <div className="min-w-6">
      <ID />
    </div>
    <div className="flex flex-col items-start gap-2">
      <h3 className="text-sm text-mono-800">Id Status</h3>
      <Status />
    </div>
  </>
);
