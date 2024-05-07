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

type AcquireAccessGrantButton = {
  id: string;
  serverInfo: ServerPublicInfo;
};

const Done = ({ hash }: { hash: `0x${string}` }) => {
  const { refetch, data } = useTransaction({
    hash,
    chainId:
      process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? arbitrumSepolia.id
        : arbitrum.id,
    query: {
      staleTime: 0,
      refetchIntervalInBackground: true,
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
  }, [refetchGrants, refetch, refetchKyc]);

  if (data?.blockHash) {
    return <Check />;
  }

  return (
    <>
      <Spinner className="h-5 w-5" /> <span>Validating... </span>
    </>
  );
};

type TIssueAccessGrantProps = {
  grantee: string;
  encryptionPublicKey: string;
  lockTimeSpanSeconds: number;
};

export const AcquireAccessGrantButton = ({
  grantee,
  encryptionPublicKey,
  lockTimeSpanSeconds,
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
        <Error className="h-5 w-5 text-red-700" />{' '}
        <div className="align-left flex text-sm">Failed</div>
      </div>
    );

  if (!dataId || isSignPending || isServerPending)
    return (
      <>
        <Spinner className="h-5 w-5" /> <span>Signing... </span>
      </>
    );

  if (isGrantInsertSuccess && transactionHash) {
    return <Done hash={transactionHash} />;
  }

  return (
    <>
      <Spinner className="h-5 w-5" /> <span>Creating...</span>
    </>
  );
};
