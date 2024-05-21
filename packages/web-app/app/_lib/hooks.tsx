import { useEffect, useMemo, useState } from 'react';
import {
  useCanContribute,
  useCtzndMinContributionUsdc,
  useFetchCredentials,
  useFetchProjectsSaleDetails,
  useFetchRisingTideCap,
  usePaymentTokenBalance,
  useProjectPublicInfo,
  usePublicInfo,
  useTotalInvestedUsdcCtznd,
  useUserProjects,
} from './queries';
import { useKyc } from '../_providers/kyc/context';
import { compareAddresses } from './utils';
import { TProjectInfoArgs } from '../_server/info';
import {
  ctzndSaleAddress,
  useReadCtzndSalePaymentToken,
  useReadCtzndSalePaymentTokenToToken,
  useReadCtzndErc20Allowance,
  useReadCtzndSaleMaxTarget,
  useReadCtzndSaleMinTarget,
  useReadCtzndSaleStart,
  useReadCtzndSaleEnd,
} from '@/wagmi.generated';
import { formatEther, formatUnits, parseUnits } from 'viem';
import { sepolia } from 'viem/chains';
import { useAccount } from 'wagmi';

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

    return citizendGrants.some((grant) => shares.includes(grant.dataId));
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
    data: userProjects,
    isLoading: isLoadingUserProjects,
    error: userProjectsError,
    isSuccess: isUserProjectsSuccess,
  } = useUserProjects();

  const myProjects = useMemo(() => {
    if (!userProjects || !saleDetails) return [];

    return saleDetails.filter((project) =>
      userProjects.includes(project.address),
    );
  }, [userProjects, saleDetails]);

  return {
    data: myProjects?.length ? myProjects : emptyArray,
    isLoading: isLoading || isLoadingUserProjects,
    error: saleDetailsError || userProjectsError,
    isSuccess: isSuccess || isUserProjectsSuccess,
  };
};

export const useHasProjectGrant = (projectId: string) => {
  const { address } = useAccount();
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
  const { data: canContribute } = useCanContribute(
    projectPublicInfo?.address,
    address,
  );

  const projectGrants = useMemo(
    () =>
      grants?.filter((grant) =>
        compareAddresses(grant.grantee, projectPublicInfo?.address || ''),
      ),
    [grants, projectPublicInfo],
  );

  // check if at least one of the projectGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (canContribute) return true;

    if (!projectGrants?.length || !shares) return false;

    return projectGrants.some((grant) => shares.includes(grant.dataId));
  }, [projectGrants, shares, canContribute]);

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
      refetchInterval: 1000 * 5, // 5 seconds
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
  const amountInWei = useMemo(() => parseUnits(amount.toString(), 6), [amount]);
  const { formattedValue: maxAmount } = usePaymentTokenBalance();
  const minAmount = useCtzndMinContributionUsdc();
  const { data: tokensToBuyInWei, error: tokenError } =
    useReadCtzndSalePaymentTokenToToken({
      args: [amountInWei],
    });

  return {
    amount,
    setAmount,
    amountInWei,
    maxAmount: Number(maxAmount || 0),
    minAmount: Number(minAmount || 0),
    tokensToBuyInWei: tokensToBuyInWei || 0n,
    tokensToBuyInSzabo:
      parseUnits(formatEther(tokensToBuyInWei || 0n), 6) || 0n,
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

export const useCtzndSaleStatus = () => {
  const { data: start } = useReadCtzndSaleStart();
  const { data: end } = useReadCtzndSaleEnd();
  const startDate = start ? start * 1000n : undefined;
  const endDate = end ? end * 1000n : undefined;
  const now = Date.now();

  if (!startDate || !endDate) {
    return 'loading';
  }

  if (now > endDate) {
    return 'completed';
  }

  if (now < startDate) {
    return 'upcoming';
  }

  return 'live';
};

export const useCtzndSaleCapStatus = () => {
  const totalInvested = useTotalInvestedUsdcCtznd();
  const { data: maxTarget } = useReadCtzndSaleMaxTarget();
  const { data: minTarget } = useReadCtzndSaleMinTarget();

  const investedValue = Number(totalInvested);
  const maxValue = maxTarget ? Number(formatUnits(maxTarget, 6)) : undefined;
  const minValue = minTarget ? Number(formatUnits(minTarget, 6)) : undefined;

  if (maxValue === undefined || minValue === undefined) {
    return 'loading';
  }

  if (investedValue > maxValue) {
    return 'above';
  }

  if (investedValue < minValue) {
    return 'below';
  }

  return 'within';
};

export const useCtzndRisingTideCap = () => {
  const status = useCtzndSaleCapStatus();
  const aboveCap = status === 'above';
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
