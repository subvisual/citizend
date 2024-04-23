import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { insertGrantBySignature } from '../_server/idos/grants';
import { useFetchGrantMessage } from './contract-queries';
import { useAccount, useSignMessage } from 'wagmi';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFetchNewDataId } from './queries';
import { getServerPublicInfo } from '../_server/info';
import { subscribeToNewsletter } from '../_server/active-campaign';
import {
  ctzndSaleAddress,
  useReadCtzndSalePaymentToken,
  useReadCtzndSalePaymentTokenToToken,
  useReadErc20Allowance,
  useWriteCtzndSaleBuy,
  useWriteErc20Approve,
} from '@/wagmi.generated';
import { sepolia } from 'viem/chains';
import { formatEther, parseEther } from 'viem';

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

export const useContributeToCtznd = (address: `0x${string}`) => {
  const [state, setState] = useState();
  const [amount, setAmount] = useState(0);
  const amountInWei = useMemo(() => parseEther(amount.toString()), [amount]);

  const {
    writeContract: writeBuy,
    data: contributionTxHash,
    isPending: isWritePending,
    error: buyError,
  } = useWriteCtzndSaleBuy();
  const {
    writeContract: approveContract,
    data: allowanceTxHash,
    error: allowanceError,
    isPending: isApprovePending,
  } = useWriteErc20Approve();
  const { data: paymentToken } = useReadCtzndSalePaymentToken();
  const saleAddress = ctzndSaleAddress[sepolia.id];
  const { data: allowance } = useReadErc20Allowance({
    address: paymentToken,
    args: [address, saleAddress],
    query: {
      refetchInterval: 1000,
    },
  });
  const { data: tokensToBuy, error: tokenError } =
    useReadCtzndSalePaymentTokenToToken({
      args: [amountInWei],
    });

  const diffToAllowance = useMemo(
    () => (allowance || BigInt(0)) - amountInWei,
    [allowance, amountInWei],
  );

  const submit = () => {
    if (
      amount <= 0 ||
      allowance === undefined ||
      paymentToken === undefined ||
      tokensToBuy === undefined
    ) {
      return;
    }

    if (diffToAllowance < 0) {
      return approveContract({
        address: paymentToken,
        args: [saleAddress, amountInWei],
      });
    }

    writeBuy({ args: [tokensToBuy] });
  };

  return {
    contributionTxHash,
    allowanceTxHash,
    diffToAllowance,
    amount,
    amountInWei,
    setAmount,
    tokensToBuy,
    isPending: isApprovePending || isWritePending,
    error: buyError || allowanceError || tokenError,
    buyError,
    allowanceError,
    tokenError,
    submit,
  };
};
