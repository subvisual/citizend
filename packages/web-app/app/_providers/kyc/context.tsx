import { idOSCredentialStatus } from '@/app/_types/idos';
import { Grant } from '@idos-network/idos-sdk';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

export type TWallet = {
  address: string;
  verified: boolean;
};

export type TKycContextValue = {
  country: string | undefined;
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
};

export const KycContext = createContext<TKycContextValue | null>(null);

export const useKyc = () => {
  const kyc = useContext(KycContext);

  if (!kyc) {
    throw new Error('Kyc is not initialized');
  }

  return kyc;
};
