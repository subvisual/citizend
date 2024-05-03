import { useEffect, useMemo, useState } from 'react';
import {
  useFetchCredentials,
  useFetchProjectsSaleDetails,
  useFetchRisingTideCap,
  usePaymentTokenBalance,
  useProjectPublicInfo,
  usePublicInfo,
  useTotalInvestedUsdcCtznd,
} from './queries';
import { useKyc } from '../_providers/kyc/context';
import { compareAddresses, isValidGrant } from './utils';
import { TProjectInfoArgs } from '../_server/info';
import {
  ctzndSaleAddress,
  useReadCtzndSalePaymentToken,
  useReadCtzndSalePaymentTokenToToken,
  useReadCtzndErc20Allowance,
} from '@/wagmi.generated';
import { formatEther, parseEther } from 'viem';
import { sepolia } from 'viem/chains';

export const useKycCredential = () => {
  const {
    data: credentials,
    isLoading,
    error,
    isSuccess,
    refetch,
  } = useFetchCredentials();

  const credential = useMemo(() => {
    if (!credentials) return null;

    const kycCredentials = credentials.filter(
      (c) => c.credential_type === 'kyc' && c.credential_level === 'plus',
    );

    if (!kycCredentials.length) return null;

    if (kycCredentials.length === 1) {
      return kycCredentials[0];
    }
    const approvedCredential = kycCredentials.find(
      (c) => c.credential_status === 'approved',
    );

    return approvedCredential || kycCredentials[0];
  }, [credentials]);

  return {
    credential,
    id: credential?.id,
    isLoading,
    error,
    isSuccess,
    refetch,
  };
};

export const useHasCitizendGrant = () => {
  const {
    shares,
    grants,
    isLoading: isKycLoading,
    error: kycError,
    isSuccess: isKycSucces,
  } = useKyc();
  const {
    data: citizendPublicInfo,
    isLoading: isProjectInfoLoading,
    isSuccess: isServerQuerySuccess,
  } = usePublicInfo();
  const isLoading = isKycLoading || isProjectInfoLoading;
  const error = kycError;
  const isSuccess = isKycSucces && isServerQuerySuccess;

  const citizendGrants = useMemo(
    () =>
      grants?.filter((grant) =>
        compareAddresses(grant.grantee, citizendPublicInfo?.grantee || ''),
      ),
    [grants, citizendPublicInfo],
  );

  // check if at least one of the citizendGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (!citizendGrants?.length || !shares) return false;

    return citizendGrants.some(
      (grant) =>
        shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
    );
  }, [citizendGrants, shares]);

  return useMemo(() => {
    return {
      hasGrant,
      isLoading,
      error,
      isSuccess,
    };
  }, [hasGrant, isLoading, error, isSuccess]);
};

const emptyArray = [] as const;
export const useMyProjects = () => {
  const {
    data: saleDetails,
    isLoading,
    error: saleDetailsError,
    isSuccess,
  } = useFetchProjectsSaleDetails();
  const {
    shares,
    grants,
    isLoading: isKycLoading,
    error: kycError,
    isSuccess: isKycSuccess,
  } = useKyc();

  const myProjects = useMemo(() => {
    if (!saleDetails || !shares) return [];

    return saleDetails.filter((project) => {
      const projectGrants = grants?.filter((grant) =>
        compareAddresses(grant.grantee, project.address),
      );
      if (!projectGrants?.length) return false;

      return projectGrants.some(
        (grant) =>
          shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
      );
    });
  }, [saleDetails, shares, grants]);

  return {
    data: myProjects?.length ? myProjects : emptyArray,
    isLoading: isLoading || isKycLoading,
    error: kycError || saleDetailsError,
    isSuccess: isKycSuccess && isSuccess,
  };
};

export const useHasProjectGrant = (projectId: string) => {
  const {
    shares,
    grants,
    isLoading: isKycLoading,
    error: kycError,
    isSuccess: isKycSuccess,
  } = useKyc();
  const {
    data: projectPublicInfo,
    isLoading: isProjectInfoLoading,
    isSuccess: isProjectSuccess,
    error: projectError,
  } = useProjectPublicInfo(projectId as TProjectInfoArgs);
  const isLoading = isKycLoading || isProjectInfoLoading;
  const error = kycError || projectError;
  const isSuccess = isKycSuccess && isProjectSuccess;

  const projectGrants = useMemo(
    () =>
      grants?.filter((grant) =>
        compareAddresses(grant.grantee, projectPublicInfo?.address || ''),
      ),
    [grants, projectPublicInfo],
  );

  // check if at least one of the projectGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (!projectGrants?.length || !shares) return false;

    return projectGrants.some(
      (grant) =>
        shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
    );
  }, [projectGrants, shares]);

  return useMemo(() => {
    return {
      hasGrant,
      isLoading,
      error,
      isSuccess,
    };
  }, [hasGrant, isLoading, error, isSuccess]);
};

export const useCtzndPaymentTokenAllowance = (userAddress: `0x${string}`) => {
  const saleAddress = ctzndSaleAddress[sepolia.id];
  const { data: paymentToken } = useReadCtzndSalePaymentToken();
  const {
    data: allowance,
    isLoading,
    error,
  } = useReadCtzndErc20Allowance({
    address: paymentToken,
    args: [userAddress, saleAddress],
    query: {
      staleTime: 0,
      refetchInterval: 5000,
    },
  });

  return {
    allowance,
    isLoading,
    error,
  };
};

export const useContributeToCtznd = () => {
  const [amount, setAmount] = useState(0);
  const amountInWei = useMemo(() => parseEther(amount.toString()), [amount]);
  const { formattedValue: maxAmount } = usePaymentTokenBalance();
  const { data: tokensToBuyInWei, error: tokenError } =
    useReadCtzndSalePaymentTokenToToken({
      args: [amountInWei],
    });

  return {
    amount,
    setAmount,
    amountInWei,
    maxAmount: Number(maxAmount || 0),
    tokensToBuyInWei: tokensToBuyInWei || 0n,
    tokensToBuy: tokensToBuyInWei ? Number(formatEther(tokensToBuyInWei)) : 0,
    error: tokenError,
  };
};

/**
 * Prevents double call issue in development
 * @param {*} callback
 * @param {*} deps
 */
export const useEffectSafe = (callback: () => void, deps: any[]) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      callback();
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export const useCtzndRisingTideCap = () => {
  const totalInvested = useTotalInvestedUsdcCtznd();
  const aboveCap = Number(totalInvested) > 1_000_000;
  const { data, isLoading, error } = useFetchRisingTideCap(aboveCap);
  const cap = aboveCap && data ? formatEther(data) : 'N/A';

  const result = useMemo(() => {
    return {
      data: cap,
      isLoading,
      error,
    };
  }, [cap, isLoading, error]);

  return result;
};
