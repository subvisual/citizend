import { PropsWithChildren, useMemo } from 'react';
import { KycContext, TKycContextValue, TWallet } from './context';
import { useKycCredential } from '@/app/_lib/hooks';
import { useFetchCredentialContent, useFetchGrants } from '@/app/_lib/queries';
import { useIdOS } from '../idos';
import { compareAddresses } from '@/app/_lib/utils';

export const KycProvider = ({ children }: PropsWithChildren) => {
  const { address } = useIdOS();
  const {
    id,
    credential: originalCredential,
    status,
    isLoading: kycLoading,
    error: kycError,
    isSuccess: kycSuccess,
  } = useKycCredential();
  const {
    data: credentialContent,
    isLoading: contentLoading,
    error: contentError,
    isSuccess: contentSuccess,
  } = useFetchCredentialContent(id);
  const {
    data: grants,
    isLoading: grantsLoading,
    error: grantsError,
    isSuccess: grantsSuccess,
    refetch: refetchGrants,
  } = useFetchGrants();

  const wallet = useMemo(() => {
    return credentialContent?.credentialSubject?.wallets.find(
      (wallet: TWallet) => {
        return (
          address &&
          compareAddresses(wallet.address, address) &&
          wallet.verified
        );
      },
    );
  }, [credentialContent, address]);
  const country =
    credentialContent?.credentialSubject?.residential_address_country;
  const isLoading = kycLoading || contentLoading || grantsLoading;
  const error = kycError || contentError || grantsError;
  const isSuccess = kycSuccess && contentSuccess && grantsSuccess;
  const shares = originalCredential?.shares;

  const state: TKycContextValue = useMemo(() => {
    return {
      id,
      status,
      country,
      wallet,
      isLoading,
      error,
      isSuccess,
      shares,
      grants,
      refetchGrants,
    };
  }, [
    id,
    status,
    country,
    wallet,
    isLoading,
    error,
    isSuccess,
    shares,
    grants,
    refetchGrants,
  ]);

  return <KycContext.Provider value={state}>{children}</KycContext.Provider>;
};
