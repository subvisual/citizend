import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { insertGrantBySignature } from '../_server/idos/grants';
import { useFetchGrantMessage } from './contract-queries';
import { useSignMessage } from 'wagmi';
import { useCallback, useEffect, useMemo } from 'react';
import { useFetchMerkleProof, useFetchNewDataId } from './queries';
import { getServerPublicInfo } from '../_server/info';
import { subscribeToNewsletter } from '../_server/active-campaign';
import {
  ctzndSaleAddress,
  useReadCtzndSalePaymentToken,
  useWriteCtzndSaleBuy,
  useWriteCtzndErc20Approve,
} from '@/wagmi.generated';
import { arbitrum, arbitrumSepolia } from 'viem/chains';
import { appSignal } from '../app-signal';

export const useAcquireAccessGrantMutation = () => {
  const { sdk } = useIdOS();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      if (!sdk) return;

      const serverInfo = await getServerPublicInfo();

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
    onError: (error) => {
      appSignal.sendError(error);
    },
  });
};

export const useSubscribeNewsletterMutation = () => {
  return useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const result = await subscribeToNewsletter(email);

      if (typeof result === 'object' && 'error' in result) {
        throw new Error(result.error);
      }

      return result;
    },
    onError: (error) => {
      appSignal.sendError(error);
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
    onError: (error) => {
      appSignal.sendError(error);
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
  const {
    data: message,
    error: messageError,
    isSuccess: isMessageRequestSuccess,
  } = useFetchGrantMessage(grantee, expiration, dataId);
  const {
    data: signature,
    signMessage,
    isPending: isSignPending,
  } = useSignMessage();

  useEffect(() => {
    const reportError = insertError || messageError;
    if (reportError) {
      appSignal.sendError(reportError);
    }
  }, [insertError, messageError]);

  useEffect(() => {
    if (
      grantee &&
      dataId &&
      expiration &&
      signature &&
      !isGrantInsertSuccess &&
      !isServerPending &&
      !insertError
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
    insertError,
  ]);

  useEffect(() => {
    if (
      message &&
      !signature &&
      !isSignPending &&
      !messageError &&
      isMessageRequestSuccess
    ) {
      try {
        signMessage({ message: message as string });
      } catch (error) {
        console.log(error);
      }
    }
  }, [
    message,
    signature,
    isSignPending,
    isMessageRequestSuccess,
    signMessage,
    messageError,
  ]);

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

export const useBuyCtzndTokens = () => {
  const {
    writeContract,
    data: contributionTxHash,
    isPending,
    error,
  } = useWriteCtzndSaleBuy();
  const { data: merkleProof } = useFetchMerkleProof();

  const buyCtzndTokens = useCallback(
    (tokensToBuyInWei: bigint) => {
      if (tokensToBuyInWei === undefined || merkleProof === undefined) {
        return;
      }

      writeContract({ args: [tokensToBuyInWei, merkleProof] });
    },
    [merkleProof, writeContract],
  );

  return {
    contributionTxHash,
    buyCtzndTokens,
    isPending,
    error,
  };
};

export const useSetPaymentTokenAllowance = () => {
  const chainId =
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? arbitrumSepolia.id
      : arbitrum.id;
  const saleAddress = ctzndSaleAddress[chainId];
  const { data: paymentToken } = useReadCtzndSalePaymentToken();
  const {
    writeContract,
    data: allowanceTxHash,
    error,
    isPending,
  } = useWriteCtzndErc20Approve();

  const setAllowance = useCallback(
    (amountInWei: bigint) => {
      if (
        paymentToken === undefined ||
        saleAddress === undefined ||
        amountInWei <= 0
      ) {
        return;
      }

      writeContract({
        address: paymentToken,
        args: [saleAddress, amountInWei],
      });
    },
    [paymentToken, saleAddress, writeContract],
  );

  return {
    setAllowance,
    allowanceTxHash,
    isPending,
    error,
  };
};
