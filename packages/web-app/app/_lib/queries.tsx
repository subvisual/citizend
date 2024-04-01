import { useQuery } from '@tanstack/react-query';
import { useIdOS } from '../_providers/idos';
import { idOSCredential } from '../_types/idos';
import { useMemo } from 'react';
import { compareAddresses } from './utils';
import { getPublicInfo } from '../_server/idos';
import { getProjectGrants } from '../_server/grants';

export const usePublicInfo = () => {
  return useQuery({
    queryKey: ['public-info'],
    queryFn: async () => {
      return await getPublicInfo();
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
  const { data: publicInfo, isSuccess: isServerQuerySuccess } = usePublicInfo();

  return useQuery({
    queryKey: ['grants', address],
    queryFn: async () => {
      return sdk?.grants.list({ owner: address, grantee: publicInfo?.grantee });
    },
    enabled: !!(
      sdk &&
      hasSigner &&
      address &&
      isServerQuerySuccess &&
      publicInfo
    ),
  });
};

export const useFetchKycCredential = () => {
  const {
    data: credentials,
    isLoading,
    error,
    isSuccess,
  } = useFetchCredentials();

  const credential = useMemo(() => {
    if (!credentials) return null;

    return credentials.find((c) => c.credential_type === 'kyc');
  }, [credentials]);

  return {
    credential,
    id: credential?.id,
    approved: credential?.credential_status === 'approved',
    isLoading,
    error,
    isSuccess,
  };
};

type TCredentialContent = {
  country: string | undefined;
  wallet:
    | {
        address: string;
        verified: boolean;
      }
    | undefined;
  id: string | undefined;
  approved: boolean | undefined;
  isLoading: boolean;
  error: any;
};

type TWallet = {
  address: string;
  verified: boolean;
};

export const useFetchKycData = () => {
  const { address } = useIdOS();
  const {
    id,
    approved,
    isLoading: kycLoading,
    error: kycError,
    isSuccess: kycSuccess,
  } = useFetchKycCredential();
  const {
    data: credentialContent,
    isLoading: contentLoading,
    error: contentError,
    isSuccess: contentSuccess,
  } = useFetchCredentialContent(id);

  const credential: TCredentialContent = useMemo(() => {
    return {
      id: id,
      approved,
      country:
        credentialContent?.credentialSubject?.residential_address_country,
      wallet: credentialContent?.credentialSubject?.wallets.find(
        (wallet: TWallet) => {
          return (
            address &&
            compareAddresses(wallet.address, address) &&
            wallet.verified
          );
        },
      ),
      isLoading: kycLoading || contentLoading,
      error: kycError || contentError,
      isSuccess: kycSuccess && contentSuccess,
    };
  }, [
    credentialContent,
    address,
    id,
    approved,
    kycLoading,
    contentLoading,
    kycError,
    contentError,
    kycSuccess,
    contentSuccess,
  ]);

  return credential;
};

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
export const useFetchNewDataId = () => {
  const { sdk, address: owner, hasSigner } = useIdOS();
  const { data: publicInfo, isSuccess: isServerQuerySuccess } = usePublicInfo();
  const { id } = useFetchKycData();

  return useQuery({
    queryKey: [
      'insert-grant-by-signature-message',
      owner,
      id,
      publicInfo?.grantee,
      publicInfo?.lockTimeSpanSeconds,
      publicInfo?.encryptionPublicKey,
    ],
    queryFn: async () => {
      if (!owner || !sdk || !id || !publicInfo) return null;

      const { grantee, lockTimeSpanSeconds, encryptionPublicKey } = publicInfo;

      try {
        const expiration = Math.floor(Date.now() / 1000) + lockTimeSpanSeconds;

        // generate a dataId on idOS side
        const { id: dataId } = await sdk.data.share(
          'credentials',
          id,
          encryptionPublicKey,
        );

        return {
          owner,
          grantee,
          dataId,
          expiration,
        };
      } catch (error) {
        return null;
      }
    },
    enabled: !!(hasSigner && owner && isServerQuerySuccess && id && publicInfo),
  });
};
