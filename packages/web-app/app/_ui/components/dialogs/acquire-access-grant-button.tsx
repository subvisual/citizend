'use client';
import { Button } from '..';
import { PublicInfo } from '@/app/_server/types';
import { useSignDelegatedAccessGrant } from '@/app/_lib/actions';
import { useTransaction } from 'wagmi';
import { useKyc } from '@/app/_providers/kyc/context';
import { useEffect } from 'react';

type AcquireAccessGrantButton = {
  id: string;
  serverInfo: PublicInfo;
};

const Done = ({ hash }: { hash: `0x${string}` }) => {
  const { data, refetch } = useTransaction({ hash });
  const { refetchGrants } = useKyc();

  console.log(
    '%c==>',
    'color: green; background: yellow; font-size: 20px',
    data,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      refetchGrants();
      refetch();
    }, 10000);

    return () => clearInterval(interval);
  }, [refetchGrants, refetch]);

  return (
    <>
      <p>Waiting for the grant to be propagated in the blockchain</p>
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
    sign,
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

  if (!dataId) return <p>Waiting for you wallet</p>;

  if (isSignPending || isServerPending)
    return (
      <Button variant="primary-disabled" disabled>
        Creating...
      </Button>
    );

  if (isGrantInsertSuccess && transactionHash) {
    return <Done hash={transactionHash} />;
  }

  return (
    <Button variant="primary" onClick={sign}>
      Create Access Grant
    </Button>
  );
};
