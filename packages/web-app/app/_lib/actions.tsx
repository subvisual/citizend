import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { getPublicInfo } from '../_server/idos';
import { insertGrantBySignature } from '../_server/grants';
import { useFetchGrantMessage } from './contract-queries';
import { useSignMessage } from 'wagmi';
import { useCallback, useEffect, useMemo } from 'react';
import { useKyc } from '../_providers/kyc/context';
import { useFetchNewDataId } from './queries';

export const useAcquireAccessGrantMutation = () => {
  const { sdk } = useIdOS();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      if (!sdk) return;

      const serverInfo = await getPublicInfo();

      if (!serverInfo) return;

      return sdk.grants.create(
        'credentials',
        id,
        serverInfo.grantee,
        Math.floor(Date.now() / 1000) + serverInfo.lockTimeSpanSeconds,
        serverInfo.encryptionPublicKey,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['credentials'] });
      queryClient.invalidateQueries({ queryKey: ['credential-content'] });
      queryClient.invalidateQueries({ queryKey: ['grants'] });
    },
  });
};

export const useInsertGrantBySignatureMutation = () => {
  const { address: owner } = useIdOS();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      grantee,
      dataId,
      signature,
      expiration,
    }: {
      grantee: string;
      dataId: string;
      signature: string;
      expiration: number;
    }) => {
      if (!owner) return null;

      const hash = await insertGrantBySignature({
        owner,
        grantee,
        dataId,
        expiration,
        signature,
      });

      if (typeof hash === 'object' && 'error' in hash) {
        throw new Error(hash.error);
      }

      return hash;
    },
    onSuccess: (_data, { grantee }) => {
      // queryClient.invalidateQueries({ queryKey: ['credentials'] });
      // queryClient.invalidateQueries({ queryKey: ['credential-content'] });
      // invalidate queries after 10 seconds
      setTimeout(() => {
        // update once we know the id
        queryClient.invalidateQueries({ queryKey: ['grants', owner] });
      }, 10000);
    },
  });
};

export const useSignDelegatedAccessGrant = (
  grantee: string,
  encryptionPublicKey: string,
  lockTimeSpanSeconds: number,
) => {
  const expiration = useMemo(
    () => Math.floor(Date.now() / 1000) + lockTimeSpanSeconds,
    [lockTimeSpanSeconds],
  );
  const {
    mutate: insertGrant,
    isPending: isServerPending,
    isSuccess: isGrantInsertSuccess,
    data: transactionHash,
    error: insertError,
  } = useInsertGrantBySignatureMutation();
  const { data: dataId } = useFetchNewDataId(grantee, encryptionPublicKey);
  const { data: message, isSuccess: isMessageRequestSuccess } =
    useFetchGrantMessage(grantee, expiration, dataId);
  const {
    data: signature,
    signMessage,
    isPending: isSignPending,
  } = useSignMessage();

  useEffect(() => {
    if (
      grantee &&
      dataId &&
      expiration &&
      signature &&
      !isGrantInsertSuccess &&
      !isServerPending
    ) {
      insertGrant({
        grantee,
        dataId,
        signature,
        expiration,
      });
    }
  }, [
    signature,
    insertGrant,
    isGrantInsertSuccess,
    grantee,
    dataId,
    expiration,
    isServerPending,
  ]);

  useEffect(() => {
    if (message && !signature && !isSignPending && isMessageRequestSuccess) {
      try {
        signMessage({ message: message as string });
      } catch (error) {
        console.log(error);
      }
    }
  }, [message, signature, isSignPending, isMessageRequestSuccess, signMessage]);

  const sign = useCallback(async () => {
    try {
      if (!message) return;
      signMessage({ message: message as string });
    } catch (error) {
      console.log(error);
    }
  }, [signMessage, message]);

  return {
    sign,
    dataId,
    isServerPending,
    isSignPending,
    isGrantInsertSuccess,
    transactionHash,
    insertError,
  };
};
