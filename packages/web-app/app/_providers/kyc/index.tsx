'use client';

import { PropsWithChildren, useMemo } from 'react';
import { KycContext, TKycContextValue, TWallet } from './context';
import { useKycCredential } from '@/app/_lib/hooks';
import { useFetchCredentialContent, useFetchGrants } from '@/app/_lib/queries';
import { useIdOS } from '../idos';
import { compareAddresses } from '@/app/_lib/utils';
import { blockedCountries } from '@/app/_server/blocked-countries';

export const ERRORS = {
  MISSING_FRACTAL_AG: "Couldn't decrypt",
};

const processError = (error: Error | null): string | null => {
  if (!error) return null;

  if (error.message.includes(ERRORS.MISSING_FRACTAL_AG)) {
    return ERRORS.MISSING_FRACTAL_AG;
  }

  return error.message;
};

const checkIsBlockedCountry = (
  residentialCountry: string | undefined,
  idDocumentCountry: string | undefined,
): null | boolean => {
  if (!residentialCountry || !idDocumentCountry) return null;

  return blockedCountries.some(
    (blockedCountry) =>
      blockedCountry === residentialCountry ||
      blockedCountry === idDocumentCountry,
  );
};

export const KycProvider = ({ children }: PropsWithChildren) => {
  const { address } = useIdOS();
  const {
    id,
    credential: originalCredential,
    isLoading: kycLoading,
    error: kycError,
    isSuccess: kycSuccess,
    refetch: refetchKyc,
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
  const residentialCountry =
    credentialContent?.credentialSubject?.residential_address_country;
  const idDocumentCountry =
    credentialContent?.credentialSubject?.identification_document_country;
  const isLoading = kycLoading || contentLoading || grantsLoading;
  const error = processError(kycError || contentError || grantsError);
  const isSuccess = kycSuccess && contentSuccess && grantsSuccess;
  const shares = originalCredential?.shares;
  const isBlockedCountry = useMemo(
    () => checkIsBlockedCountry(residentialCountry, idDocumentCountry),
    [residentialCountry, idDocumentCountry],
  );

  const state: TKycContextValue = useMemo(() => {
    return {
      id,
      status: credentialContent?.status,
      residentialCountry,
      idDocumentCountry,
      isBlockedCountry,
      wallet,
      isLoading,
      error,
      isSuccess,
      shares,
      grants,
      refetchGrants,
      refetchKyc,
    };
  }, [
    id,
    credentialContent,
    residentialCountry,
    idDocumentCountry,
    isBlockedCountry,
    wallet,
    isLoading,
    error,
    isSuccess,
    shares,
    grants,
    refetchGrants,
    refetchKyc,
  ]);

  return <KycContext.Provider value={state}>{children}</KycContext.Provider>;
};
