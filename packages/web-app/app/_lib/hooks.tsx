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
    isLoading,
    error,
    isSuccess,
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
      grants?.filter((grant) => grant.grantee === citizendPublicInfo?.grantee),
    [grants, citizendPublicInfo],
  );

  // check if at least one of the citizendGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (!citizendGrants?.length || !shares) return false;

    return citizendGrants.some(
      (grant) =>
        shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
    );
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

export const useHasProjectGrant = (projectId: string) => {
  const {
    shares,
    grants,
    isLoading: isKycLoading,
    error: kycError,
    isSuccess: isKycSucces,
  } = useKyc();
  const { data: projectPublicInfo, isSuccess: isProjectSuccess } =
    useProjectPublicInfo(projectId as TProjectInfoArgs);
  const isLoading = isKycLoading || !projectPublicInfo;
  const error = kycError;
  const isSuccess = isKycSucces && isProjectSuccess;

  const projectGrants = useMemo(
    () =>
      grants?.filter((grant) => grant.grantee === projectPublicInfo?.address),
    [grants, projectPublicInfo],
  );

  // check if at least one of the projectGrants dataId exists in the credential shares array
  const hasGrant = useMemo(() => {
    if (!projectGrants?.length || !shares) return false;

    return projectGrants.some(
      (grant) =>
        shares.includes(grant.dataId) && isValidGrant(grant.lockedUntil),
    );
  }, [projectGrants, shares]);

  return useMemo(() => {
    return {
      hasGrant,
      isLoading,
      error,
      isSuccess,
    };
  }, [hasGrant, isLoading, error, isSuccess]);
};
