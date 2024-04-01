'use client';
import { Button } from '..';
import { PublicInfo } from '@/app/_server/types';
import { useSignDelegatedAccessGrant } from '@/app/_lib/actions';
import { useTransaction } from 'wagmi';

type AcquireAccessGrantButton = {
  id: string;
  serverInfo: PublicInfo;
};

const Done = ({ hash }: { hash: `0x${string}` }) => {
  const test = useTransaction({ hash });

  console.log(
    '%c==>',
    'color: green; background: yellow; font-size: 20px',
    test?.data,
  );

  return (
    <>
      <p>Waiting for the grant to be propagated in the blockchain</p>
    </>
  );
};

export const AcquireAccessGrantButton = ({ id }: { id: string }) => {
  const {
    sign,
    dataId,
    isSignPending,
    isServerPending,
    isSuccess,
    transactionHash,
  } = useSignDelegatedAccessGrant();

  if (!dataId) return <p>Waiting for you wallet</p>;

  if (isSignPending || isServerPending)
    return (
      <Button variant="primary-disabled" disabled>
        Creating...
      </Button>
    );

  if (isSuccess && transactionHash) {
    return <Done hash={transactionHash} />;
  }

  return <Button onClick={sign}>Create Access Grant</Button>;
};
