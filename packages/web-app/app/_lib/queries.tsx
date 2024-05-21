'use client';

import { useQuery } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { idOSCredential } from '../_types/idos';
import { getGrants } from '../_server/idos/grants';
import { useKyc } from '../_providers/kyc/context';
import { saleDetails } from '../_server/sales';
import {
  TProjectInfoArgs,
  getProjectPublicInfo,
  getServerPublicInfo,
} from '../_server/info';
import { fetchAndGenerateProof } from '../_server/projects/generate-merkle-root';
import { useAccount, useBalance } from 'wagmi';
import {
  useReadCtzndSaleMinContribution,
  useReadCtzndSalePaymentToken,
  useReadCtzndSaleTokenToPaymentToken,
  useReadCtzndSaleTotalUncappedAllocations,
  useReadCtzndSaleUncappedAllocation,
} from '@/wagmi.generated';
import { formatEther, formatUnits, parseEther } from 'viem';
import { computeRisingTideCap } from '../_server/risingTide/risingtide';
import { appSignal } from '../app-signal';
import { useEffect } from 'react';
import { canContribute } from '../_server/can-contribute';
import { userProjects } from '../_server/user-projects';

export const usePublicInfo = () => {
  return useQuery({
    queryKey: ['server-public-info'],
    queryFn: async () => {
      return await getServerPublicInfo();
    },
  });
};

export const PROJECT_NOT_FOUND = 'Project not found';
export const useProjectPublicInfo = (projectId?: TProjectInfoArgs) => {
  return useQuery({
    queryKey: ['project-public-info', projectId],
    queryFn: async () => {
      if (!projectId) return null;
      const result = await getProjectPublicInfo(projectId);

      if (typeof result === 'object' && 'error' in result) {
        appSignal.sendError(new Error(result.error));
        throw new Error(PROJECT_NOT_FOUND);
      }

      return result;
    },
    enabled: !!projectId,
  });
};

export const useFetchProjectsSaleDetails = () => {
  return useQuery({
    queryKey: ['projects-sale-details'],
    queryFn: async () => {
      const projectSaleDetails = await saleDetails();

      if (
        typeof projectSaleDetails === 'object' &&
        'error' in projectSaleDetails
      ) {
        appSignal.sendError(new Error(projectSaleDetails.error));
        throw new Error(projectSaleDetails.error);
      }

      return projectSaleDetails;
    },
  });
};

export const useFetchIdOSProfile = () => {
  const { sdk, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['idos-profile'],
    queryFn: () => sdk?.auth?.currentUser(),
    enabled: !!(sdk && hasSigner),
  });
};

const filterCredentials = (credentials: idOSCredential[] | null) =>
  credentials && credentials.filter((credential) => !credential.original_id);

export const useFetchCredentials = () => {
  const { sdk, hasSigner, address } = useIdOS();

  return useQuery({
    queryKey: ['credentials', address],
    queryFn: async () => {
      if (!sdk || !hasSigner || !address) return null;

      const credentials = await sdk.data.list<idOSCredential>('credentials');
      return credentials.map((credential) => ({
        ...credential,
        shares: credentials
          .filter((_credential) => _credential.original_id === credential.id)
          .map((c) => c.id),
      }));
    },
    select: filterCredentials,
    enabled: !!(sdk && hasSigner && address),
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};

export const useFetchCredentialContent = (credentialId: string | undefined) => {
  const { sdk, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['credential-content', credentialId],
    queryFn: async () => {
      if (!sdk || !credentialId || !hasSigner) return '';

      try {
        const credential = await sdk.data.get<
          idOSCredential & { content: string }
        >('credentials', credentialId);

        if (!credential) {
          appSignal.sendError(new Error('Credential content not found'));
          return '';
        }

        return JSON.parse(credential?.content);
      } catch (error) {
        appSignal.sendError(error as Error);
        throw error;
      }
    },
    enabled: !!(sdk && credentialId && hasSigner),
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};

export const useFetchWallets = () => {
  const { sdk, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['wallets'],
    queryFn: () => sdk?.data.list('wallets'),
    enabled: !!(sdk && hasSigner),
  });
};

export const useFetchGrants = () => {
  const { sdk, address, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['grants', address],
    queryFn: async () => {
      if (!address) return null;

      const result = await getGrants({ owner: address });

      if (typeof result === 'object' && 'error' in result) {
        appSignal.sendError(new Error(result.error));
        throw new Error(result.error);
      }

      return result;
    },
    enabled: !!(sdk && hasSigner && address),
    staleTime: 0,
  });
};

/**
 * Get a new dataId from idOS to be used in the grant process
 */
export const useFetchNewDataId = (
  grantee: string,
  encryptionPublicKey: string,
) => {
  const { sdk, address: owner, hasSigner } = useIdOS();
  const { id, status } = useKyc();

  return useQuery({
    queryKey: ['fetch-new-data-id', owner, id, grantee, encryptionPublicKey],
    queryFn: async () => {
      if (
        !owner ||
        !sdk ||
        !id ||
        !encryptionPublicKey ||
        status !== 'approved'
      )
        return null;

      try {
        // generate a dataId on idOS side
        const { id: dataId } = await sdk.data.share(
          'credentials',
          id,
          encryptionPublicKey,
        );

        return dataId;
      } catch (error) {
        appSignal.sendError(error as Error);
        return null;
      }
    },
    enabled: !!(hasSigner && owner && encryptionPublicKey && id && grantee),
  });
};

export const useFetchMerkleProof = () => {
  const { address } = useIdOS();

  return useQuery({
    queryKey: ['merkle-proof', address],
    queryFn: async () => {
      if (!address) return undefined;

      const result = await fetchAndGenerateProof(address);

      if (typeof result === 'object' && 'error' in result) {
        appSignal.sendError(new Error(result.error));
        throw new Error(result.error);
      }

      return result as `0x${string}`[];
    },
    enabled: !!address,
  });
};

export const usePaymentTokenBalance = () => {
  const { address } = useAccount();
  const {
    data: paymentToken,
    isLoading: isLoadingToken,
    error: errorToken,
  } = useReadCtzndSalePaymentToken();

  const {
    data: balance,
    isLoading: isLoadingBalance,
    error: errorBalance,
  } = useBalance({
    token: paymentToken,
    address,
    query: {
      enabled: !!paymentToken,
    },
  });

  useEffect(() => {
    const errorToReport = errorToken || errorBalance;

    if (errorToReport) {
      appSignal.sendError(errorToReport);
    }
  }, [errorToken, errorBalance]);

  if (!paymentToken) {
    return {
      data: null,
      formattedValue: null,
      isLoading: isLoadingToken,
      error: errorToken,
    };
  }

  return {
    data: balance,
    formattedValue: balance ? formatUnits(balance.value, 6) : null,
    isLoading: isLoadingBalance || isLoadingToken,
    error: errorToken || errorBalance,
  };
};

export const useTotalInvestedUsdcCtznd = () => {
  const { data: ctzndTokensSold } = useReadCtzndSaleTotalUncappedAllocations({
    query: {
      staleTime: 0,
      refetchInterval: 1000 * 10, // 10 seconds
    },
  });
  const { data: tokensInvested } = useReadCtzndSaleTokenToPaymentToken({
    args: [ctzndTokensSold || 0n],
  });

  const usdcValue =
    ctzndTokensSold && tokensInvested ? formatUnits(tokensInvested, 6) : '0';

  return usdcValue;
};

export const useUserTotalInvestedUsdcCtznd = (address: `0x${string}`) => {
  const { data: ctzndTokensSold } = useReadCtzndSaleUncappedAllocation({
    args: [address],
    query: {
      staleTime: 0,
    },
  });
  const { data: tokensInvested } = useReadCtzndSaleTokenToPaymentToken({
    args: [parseEther(formatUnits(ctzndTokensSold || 0n, 6)) || 0n],
  });

  const usdcValue =
    ctzndTokensSold && tokensInvested ? formatEther(tokensInvested) : '0';

  return usdcValue;
};

export const useCtzndMinContributionUsdc = () => {
  const { data: min } = useReadCtzndSaleMinContribution();

  const usdcValue = min ? formatUnits(min, 6) : '0';

  return usdcValue;
};

export const useFetchRisingTideCap = (enabled?: boolean) => {
  return useQuery({
    queryKey: ['rising-tide-cap'],
    queryFn: async () => {
      const cap = await computeRisingTideCap();

      return cap;
    },
    refetchInterval: 1000 * 10, // 10 seconds
    enabled,
  });
};

export const useCanContribute = (project?: string, address?: string) => {
  return useQuery({
    queryKey: ['can-contribute', project, address],
    queryFn: async () => {
      if (!project || !address) return false;
      const result = await canContribute(project, address);
      if (typeof result === 'object' && 'error' in result) {
        appSignal.sendError(new Error(result.error));
        throw new Error(result.error);
      }

      return result;
    },
    enabled: !!project && !!address,
  });
};

export const useUserProjects = () => {
  const { address } = useAccount();

  return useQuery({
    queryKey: ['my-projects', address],
    queryFn: async () => {
      if (!address) return null;
      const result = await userProjects(address);

      if (typeof result === 'object' && 'error' in result) {
        appSignal.sendError(new Error(result.error));
        throw new Error(result.error);
      }

      return result;
    },
    enabled: !!address,
  });
};
