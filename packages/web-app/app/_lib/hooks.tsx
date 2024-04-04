import { useMemo } from 'react';
import {
  useFetchCredentials,
  useFetchGrants,
  useProjectPublicInfo,
  usePublicInfo,
} from './queries';
import { useKyc } from '../_providers/kyc/context';
import { isValidGrant } from './utils';
import { TProjectInfoArgs } from '../_server/projects';

export const useKycCredential = () => {
  const {
    data: credentials,
    isLoading,
    error,
    isSuccess,
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
    status: credential?.credential_status,
    isLoading,
    error,
    isSuccess,
  };
};

export const useHasCitizendGrant = () => {
  const { shares, isLoading, error, isSuccess } = useKyc();
  const { data: citizendPublicInfo, isSuccess: isServerQuerySuccess } =
    usePublicInfo();
  const {
    data: citizendGrants,
    isLoading: isLoadingGrants,
    error: grantsError,
    isSuccess: isGrantsSuccess,
    refetch,
  } = useFetchGrants(citizendPublicInfo?.grantee);

  // check if at least one of the citizendGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (!citizendGrants || !shares) return false;

    return citizendGrants.some(
      (grant) =>
        shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
    );
  }, [citizendGrants, shares]);

  return {
    hasGrant,
    isLoading: isLoading || isLoadingGrants,
    error: error || grantsError,
    isSuccess: isSuccess && isServerQuerySuccess && isGrantsSuccess,
    refetch,
  };
};

export const useHasProjectGrant = (projectId: string) => {
  const { shares, isLoading, error, isSuccess } = useKyc();
  const { data: projectPublicInfo, isSuccess: isProjectSuccess } =
    useProjectPublicInfo(projectId as TProjectInfoArgs);
  const {
    data: projectGrants,
    isLoading: isLoadingGrants,
    error: grantsError,
    isSuccess: isGrantsSuccess,
    refetch,
  } = useFetchGrants(projectPublicInfo?.address);

  // check if at least one of the projectGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (!projectGrants || !shares) return false;

    return projectGrants.some(
      (grant) =>
        shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
    );
  }, [projectGrants, shares]);

  return {
    hasGrant,
    isLoading: isLoading || isLoadingGrants,
    error: error || grantsError,
    isSuccess: isSuccess && isProjectSuccess && isGrantsSuccess,
    refetch,
  };
};
