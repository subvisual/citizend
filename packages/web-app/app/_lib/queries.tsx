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
  useReadCtzndSalePaymentToken,
  useReadCtzndSaleRate,
  useReadCtzndSaleUncappedAllocation,
} from '@/wagmi.generated';
import { formatEther } from 'viem';
import { useProject } from '../_providers/project/context';

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
  });
};

export const useFetchCredentialContent = (credentialId: string | undefined) => {
  const { sdk, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['credential-content', credentialId],
    queryFn: async ({ queryKey: [, credentialId] }) => {
      if (!sdk || !credentialId || !hasSigner) return '';

      const credential = await sdk.data.get<
        idOSCredential & { content: string }
      >('credentials', credentialId);

      if (!credential) return '';

      // check if this step is really needed
      // const verified = await idOS.verifiableCredentials.verify(credential?.content);

      // console.log(
      //   '%c==>Verify Credential:',
      //   'color: green; background: yellow; font-size: 20px',
      //   verified,
      // );

      return JSON.parse(credential?.content);
    },
    enabled: !!(sdk && credentialId && hasSigner),
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

// Not used at the moment
// maybe usefull to get grants through our server and avoid a modal
export const useFetchGrants = () => {
  const { sdk, address, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['grants', address],
    queryFn: async () => {
      if (!address) return null;

      const result = await getGrants({ owner: address });

      if (typeof result === 'object' && 'error' in result) {
        throw new Error(result.error);
      }

      return result;
    },
    enabled: !!(sdk && hasSigner && address),
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
    formattedValue: balance ? formatEther(balance.value) : null,
    isLoading: isLoadingBalance || isLoadingToken,
    error: errorToken || errorBalance,
  };
};

export const useUserTotalInvestedUsdcCtznd = (address: `0x${string}`) => {
  const { data: tokens } = useReadCtzndSaleUncappedAllocation({
    args: [address],
  });
  const { data: rate } = useReadCtzndSaleRate();
  const usdcValue =
    tokens && rate
      ? parseFloat(formatEther(tokens)) * parseFloat(formatEther(rate))
      : 0;

  return usdcValue;
};
