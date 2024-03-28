import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { getPublicInfo } from '../_server/idos';
import { insertGrantBySignature } from '../_server/grants';
import { useFetchGrantMessage } from './contract-queries';
import { useSignMessage } from 'wagmi';
import { useCallback, useEffect } from 'react';

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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      owner,
      grantee,
      dataId,
      signature,
      expiration,
    }: {
      owner: string;
      grantee: string;
      dataId: string;
      signature: string;
      expiration: number;
    }) => {
      const hash = await insertGrantBySignature({
        owner,
        grantee,
        dataId,
        expiration,
        signature,
      });

      return hash;
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['credentials'] });
      // queryClient.invalidateQueries({ queryKey: ['credential-content'] });
      // invalidate queries after 10 seconds
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['grants'] });
      }, 10000);
    },
  });
};

export const useSignDelegatedAccessGrant = () => {
  const {
    mutate,
    isPending: isServerPending,
    isSuccess,
    data: transactionHash,
  } = useInsertGrantBySignatureMutation();
  const { owner, grantee, dataId, expiration, message } =
    useFetchGrantMessage();
  const {
    data: signature,
    signMessage,
    isPending: isSignPending,
  } = useSignMessage();

  useEffect(() => {
    if (owner && grantee && dataId && expiration && signature && !isSuccess) {
      mutate({
        owner,
        grantee,
        dataId,
        signature,
        expiration,
      });
    }
  }, [signature, mutate, isSuccess, owner, grantee, dataId, expiration]);

  const sign = useCallback(async () => {
    try {
      if (!message) return;
      signMessage({ message });
    } catch (error) {
      console.log(error);
    }
  }, [signMessage, message]);

  return {
    sign,
    dataId,
    isServerPending,
    isSignPending,
    isSuccess,
    transactionHash,
  };
};
