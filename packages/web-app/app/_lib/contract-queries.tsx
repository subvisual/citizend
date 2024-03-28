import { useFetchNewDataId } from './queries';
import { useReadContract } from 'wagmi';
import { grantsAbi } from '../_server/grants/abi';
import { useMemo } from 'react';

type TFetchGrantMessage = {
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
export const useFetchGrantMessage = (): TFetchGrantMessage => {
  const { data, isSuccess: isSuccessDataId } = useFetchNewDataId();
  const {
    data: message,
    isSuccess: isSuccessMessage,
    isError,
    isLoading,
  } = useReadContract({
    abi: grantsAbi,
    address: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS,
    functionName: 'insertGrantBySignatureMessage',
    args: [data?.owner, data?.grantee, data?.dataId, data?.expiration],
    query: {
      enabled: !!(
        isSuccessDataId &&
        data?.owner &&
        data?.grantee &&
        data?.dataId &&
        data?.expiration
      ),
    },
  });

  return useMemo(() => {
    return {
      owner: data?.owner,
      grantee: data?.grantee,
      dataId: data?.dataId,
      expiration: data?.expiration,
      message: message as string | undefined, //review later
      isSuccess: isSuccessMessage,
      isError,
      isLoading,
    };
  }, [
    message,
    isSuccessMessage,
    isError,
    isLoading,
    data?.owner,
    data?.grantee,
    data?.dataId,
    data?.expiration,
  ]);
};
