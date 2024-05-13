'use client';
import { ServerPublicInfo } from '@/app/_server/types';
import { useSignDelegatedAccessGrant } from '@/app/_lib/actions';
import { useTransaction } from 'wagmi';
import { useKyc } from '@/app/_providers/kyc/context';
import { useEffect } from 'react';
import { Spinner } from '../../svg/spinner';
import { Check } from '../../svg/check';
import { Error } from '../../svg/error';
import { arbitrum, arbitrumSepolia } from 'viem/chains';
import Link from 'next/link';

type AcquireAccessGrantButton = {
  id: string;
  serverInfo: ServerPublicInfo;
};

const getTxLink = (hash: string) => {
  if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true') {
    return `https://sepolia.arbiscan.io/tx/${hash}`;
  }
  return `https://arbiscan.io/tx${hash}`;
};

const DoneArbitrum = ({
  hash,
  hasGrant,
}: {
  hash: `0x${string}`;
  hasGrant: boolean;
}) => {
  const { refetch, data } = useTransaction({
    hash,
    chainId:
      process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? arbitrumSepolia.id
        : arbitrum.id,
    query: {
      staleTime: 0,
    },
  });
  const { refetchGrants, refetchKyc } = useKyc();

  useEffect(() => {
    const interval = setInterval(async () => {
      await refetchGrants();
      await refetchKyc();

      await refetch();
    }, 1000);

    return () => clearInterval(interval);
  }, [refetchGrants, refetch, refetchKyc, data?.blockHash]);

  if (data?.blockHash && !hasGrant) {
    return (
      <>
        <Spinner className="h-5 w-5" />
        Updating grants...
      </>
    );
  }

  if (data?.blockHash) {
    return <Check />;
  }

  return (
    <>
      <Spinner className="h-5 w-5" />
      <Link href={getTxLink(hash)} target="_blank" className="text-blue-500">
        Validating...
      </Link>
    </>
  );
};

type TIssueAccessGrantProps = {
  grantee: string;
  encryptionPublicKey: string;
  lockTimeSpanSeconds: number;
  hasGrant: boolean;
};

export const AcquireAccessGrantButton = ({
  grantee,
  encryptionPublicKey,
  lockTimeSpanSeconds,
  hasGrant,
}: TIssueAccessGrantProps) => {
  const {
    dataId,
    isSignPending,
    isServerPending,
    isGrantInsertSuccess,
    transactionHash,
    insertError,
  } = useSignDelegatedAccessGrant(
    grantee,
    encryptionPublicKey,
    lockTimeSpanSeconds,
  );

  if (insertError)
    return (
      <div className="flex gap-3">
        <Error className="h-5 w-5 text-red-700" />
        <div className="align-left flex">Failed</div>
      </div>
    );

  if (!dataId || isSignPending || isServerPending)
    return (
      <>
        <Spinner className="h-5 w-5" /> <span>Signing... </span>
      </>
    );

  if (isGrantInsertSuccess && transactionHash) {
    return <DoneArbitrum hash={transactionHash} hasGrant={hasGrant} />;
  }

  return (
    <>
      <Spinner className="h-5 w-5" /> <span>Creating...</span>
    </>
  );
};
