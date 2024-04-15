'use client';

import { useQuery } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { idOSCredential } from '../_types/idos';
import { getPublicInfo } from '../_server/idos';
import { getProjectGrants } from '../_server/grants';
import { TProjectInfoArgs, getProjectPublicInfo } from '../_server/projects';
import { useKyc } from '../_providers/kyc/context';
import { saleDetails } from '../_server/sales';

export const usePublicInfo = () => {
  return useQuery({
    queryKey: ['public-info'],
    queryFn: async () => {
      return await getPublicInfo();
    },
  });
};

export const useProjectPublicInfo = (projectId?: TProjectInfoArgs) => {
  return useQuery({
    queryKey: ['project-public-info', projectId],
    queryFn: async () => {
      if (!projectId) return null;
      return await getProjectPublicInfo(projectId);
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

export const useFetchCredentials = () => {
  const { sdk, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['credentials'],
    queryFn: async ({ queryKey: [tableName] }) => {
      if (!sdk || !hasSigner) return null;

      const credentials = await sdk.data.list<idOSCredential>(tableName);
      return credentials.map((credential) => ({
        ...credential,
        shares: credentials
          .filter((_credential) => _credential.original_id === credential.id)
          .map((c) => c.id),
      }));
    },
    select: (credentials) =>
      credentials &&
      credentials.filter((credential) => !credential.original_id),
    enabled: !!(sdk && hasSigner),
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

export const useFetchGrants = () => {
  const { sdk, address, hasSigner } = useIdOS();

  return useQuery({
    queryKey: ['grants', address],
    queryFn: async () => {
      if (!address) return null;
      return sdk?.grants.list({ owner: address });
    },
    enabled: !!(sdk && hasSigner && address),
  });
};

// Not used at the moment
// maybe usefull to get grants through our server and avoid a modal
export const useFetchProjectGrants = () => {
  return useQuery({
    queryKey: ['grants-contract'],
    queryFn: async () => {
      const { grantee } = await getPublicInfo();

      return getProjectGrants(grantee);
    },
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
    queryKey: [
      'insert-grant-by-signature-message',
      owner,
      id,
      grantee,
      encryptionPublicKey,
    ],
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
