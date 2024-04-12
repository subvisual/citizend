'use client';

import { useKyc } from '@/app/_providers/kyc/context';
import { ID } from '../../svg/id';
import { useIdOS } from '@/app/_providers/idos';
import Link from 'next/link';
import { Check } from '../../svg/check';
import { idOSCredentialStatus } from '@/app/_types/idos';

const getNotVerifiedMessage = (status: idOSCredentialStatus | undefined) => {
  if (status === 'expired') return 'KYC expired';
  if (status === 'rejected') return 'KYC rejected';
  return 'Not verified';
};

const Status = () => {
  const { getProviderUrl, address, hasProfile } = useIdOS();
  const { status, error, isSuccess, isLoading } = useKyc();
  if (!address) return 'wallet not connected';

  const providerUrl = getProviderUrl(address);

  if (status === 'pending' || status === 'contacted') {
    return (
      <>
        <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-yellow-500"></div>
        <h4>Verification in progress</h4>
        <p className="text-start">
          Your information is currently being verified.
        </p>
        <Link
          href={providerUrl}
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
          <h4>Verified</h4>
          <Check />
        </div>
        <Link
          href={providerUrl}
          className="select-none rounded-md text-xs text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
        >
          Manage my ID
        </Link>
      </>
    );
  }

  if (!status && isLoading) return 'Loading...';
  if (error || (!isSuccess && hasProfile)) return 'Something went wrong';

  return (
    <>
      <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-red-700"></div>
      <h4>{getNotVerifiedMessage(status)}</h4>
      <p className="text-start">
        To be able to contribute to this project, you must complete ID Plus
        verification.
      </p>
      <Link
        href={providerUrl}
        className="select-none rounded-md text-xs text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
      >
        Verify my ID
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
