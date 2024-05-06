'use client';

import { Grant, idOSCredentialStatus } from '@/app/_types/idos';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

export type TWallet = {
  address: string;
  verified: boolean;
};

export type TKycContextValue = {
  residentialCountry: string | undefined;
  idDocumentCountry: string | undefined;
  wallet: TWallet | undefined;
  id: string | undefined;
  status: idOSCredentialStatus | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  error: any;
  shares: string[] | undefined;
  grants: Grant[] | null | undefined;
  refetchGrants: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<Grant[] | null | undefined, Error>>;
  refetchKyc: (options?: RefetchOptions | undefined) => Promise<
    QueryObserverResult<
      | {
          shares: string[];
          credential_type: string;
          human_id: string;
          id: string;
          issuer: string;
          original_id: string;
          credential_level: string;
          credential_status: idOSCredentialStatus;
        }[]
      | null,
      Error
    >
  >;
};

export const KycContext = createContext<TKycContextValue | null>(null);

export const useKyc = () => {
  const kyc = useContext(KycContext);

  if (!kyc) {
    throw new Error('Kyc is not initialized');
  }

  return kyc;
};
