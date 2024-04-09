'use client';

import { useKyc } from '@/app/_providers/kyc/context';
import { ID } from '../../svg/id';
import { useIdOS } from '@/app/_providers/idos';
import Link from 'next/link';

const Credentials = () => {
  const { isLoading, status } = useKyc();

  if (isLoading) return <div>Loading...</div>;

  if (status === 'approved') return <div>Verified</div>;

  return <div>Awaiting Approval</div>;
};

const Status = () => {
  const { hasProfile, getProviderUrl, address } = useIdOS();

  if (!address) return;

  if (!hasProfile) {
    return (
      <>
        <div className="absolute right-0 top-7 h-3 w-3 rounded-full bg-red-700"></div>
        <h4>Not verified</h4>
        <p className="text-start">
          To be able to contribute to this project, you must complete ID Basic
          verification.
        </p>
        <Link
          href={getProviderUrl(address)}
          className="select-none rounded-md text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
        >
          Verify my ID
        </Link>
      </>
    );
  }

  return <Credentials />;
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
