'use client';
import { PublicInfo } from '@/app/_server/types';
import { useSignDelegatedAccessGrant } from '@/app/_lib/actions';
import { useTransaction } from 'wagmi';
import { useKyc } from '@/app/_providers/kyc/context';
import { useEffect } from 'react';
import { Spinner } from '../svg/spinner';
import { Check } from '../svg/check';

type AcquireAccessGrantButton = {
  id: string;
  serverInfo: PublicInfo;
};

const Done = ({ hash }: { hash: `0x${string}` }) => {
  const { refetch, data } = useTransaction({ hash });
  const { refetchGrants, refetchKyc } = useKyc();

  useEffect(() => {
    const interval = setInterval(async () => {
      await refetchGrants();
      await refetchKyc();

      await refetch();
    }, 10000);

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
  } = useSignDelegatedAccessGrant(
    grantee,
    encryptionPublicKey,
    lockTimeSpanSeconds,
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
