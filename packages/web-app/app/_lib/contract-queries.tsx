import { useReadContract } from 'wagmi';
import { grantsAbi } from '../_server/grants/abi';
import { useMemo } from 'react';
import { useIdOS } from '../_providers/idos';

type TGrantMessage = {
  owner: string | undefined;
  grantee: string | undefined;
  dataId: string | undefined;
  expiration: number | undefined;
  message: string | undefined;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
};

/** generate a grant message to be signed by the user and later inserted by our server
 */
export const useFetchGrantMessage = (
  grantee: string,
  expiration: number,
  dataId?: string | null, // doesn't run while we don't have a dataId
) => {
  const { address: owner } = useIdOS();

  // const {
  //   data: message,
  //   isSuccess,
  //   isError,
  //   isLoading,
  // } = useReadContract({
  return useReadContract({
    abi: grantsAbi,
    address: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS,
    functionName: 'insertGrantBySignatureMessage',
    args: [owner, grantee, dataId, expiration],
    query: {
      enabled: !!(owner && grantee && dataId && expiration),
    },
  });

  // return useMemo(() => {
  //   return {
  //     owner: owner,
  //     grantee: grantee,
  //     dataId: dataId,
  //     expiration: expiration,
  //     message: message as string | undefined, //review later
  //     isSuccess,
  //     isError,
  //     isLoading,
  //   };
  // }, [
  //   message,
  //   isSuccess,
  //   isError,
  //   isLoading,
  //   owner,
  //   grantee,
  //   dataId,
  //   expiration,
  // ]);
};
