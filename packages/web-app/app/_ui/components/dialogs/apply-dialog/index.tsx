'use client';

import { useProjectPublicInfo, usePublicInfo } from '@/app/_lib/queries';
import { useIdOS } from '@/app/_providers/idos';
import { Dialog } from '@headlessui/react';
import { AcquireAccessGrantButton } from '../acquire-access-grant-button';
import { Button } from '../..';
import { TProps, useDialog } from '@/app/_providers/dialog/context';
import { useMemo } from 'react';
import {
  BlockedCountry,
  KycExpired,
  KycOnIdosRedirect,
  KycRejected,
  PendingApproval,
  UnlockIdosExternal,
} from './kyc-flows';
import { useKyc } from '@/app/_providers/kyc/context';
import { useHasCitizendGrant, useHasProjectGrant } from '@/app/_lib/hooks';
import { TProjectInfoArgs } from '@/app/_server/projects';

type TProjectIdProps = {
  projectId: string;
};

type TIssueGrantProps = {
  name: string;
  grantee: string;
  encryptionPublicKey: string;
  lockTimeSpanSeconds: number;
};

const IssueAccessGrant = ({
  name,
  grantee,
  encryptionPublicKey,
  lockTimeSpanSeconds,
}: TIssueGrantProps) => {
  const { close } = useDialog();

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            You have successfully verified your ID. Issue an Access Grant to{' '}
            {name} so you can contribute.
          </p>
        </div>
        <div className="mt-8 flex flex-col">
          <AcquireAccessGrantButton
            grantee={grantee}
            encryptionPublicKey={encryptionPublicKey}
            lockTimeSpanSeconds={lockTimeSpanSeconds}
          />
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const IssueCitizendGrant = () => {
  const { data, isLoading, isError } = usePublicInfo();
  if (isLoading) return <p>Loading...</p>;
  if (
    isError ||
    !data?.grantee ||
    !data?.encryptionPublicKey ||
    !data?.lockTimeSpanSeconds
  )
    return <p>Something went wrong</p>;

  return <IssueAccessGrant name="Citizend" {...data} />;
};

const IssueProjectGrant = ({ projectId }: TProjectIdProps) => {
  const { data: citizendData } = usePublicInfo();
  // fix type
  const { data, isLoading, isError } = useProjectPublicInfo(
    projectId as TProjectInfoArgs,
  );

  if (isLoading) return <p>Loading...</p>;
  if (
    isError ||
    !data?.address ||
    !data?.publicKey ||
    !citizendData?.lockTimeSpanSeconds
  )
    return <p>Something went wrong</p>;

  return (
    <IssueAccessGrant
      name="this Project"
      grantee={data.address}
      encryptionPublicKey={data.publicKey}
      lockTimeSpanSeconds={citizendData.lockTimeSpanSeconds}
    />
  );
};

const ContributionAllowed = ({ projectId }: TProjectIdProps) => {
  const { close } = useDialog();
  const { hasGrant: hasCitizendGrant, isLoading: isLoadingCitizendGrant } =
    useHasCitizendGrant();
  const { hasGrant: hasProjectGrant, isLoading: isLoadingProjectGrant } =
    useHasProjectGrant(projectId);

  if (isLoadingCitizendGrant || isLoadingProjectGrant) return <p>Loading...</p>;

  if (!hasCitizendGrant) {
    return <IssueCitizendGrant />;
  }

  if (!hasProjectGrant) {
    return <IssueProjectGrant projectId={projectId} />;
  }

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h3" className="text-gray-900">
          Success
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">{`You've successfully applied for this project sale`}</p>
        </div>
      </div>
    </div>
  );
};

const blockedCountriesList = ['US', 'CN', 'KR', 'IR', 'KP', 'SY', 'CU'];

// 2 step -> User has verified their ID externally and now has to unlock IdOs and enclave
const UnlockKycData = ({ projectId }: TProjectIdProps) => {
  const { country, id, status, isLoading: isLoadingKyc } = useKyc();
  const isBlockedCountry = useMemo(() => {
    if (!country) return true;
    return blockedCountriesList.find(
      (blockedCountry) => blockedCountry === country,
    );
  }, [country]);

  //**KYC flows */
  if (isLoadingKyc) return <UnlockIdosExternal />;

  // Doesn't have kyc plus credential, so needs to be redirected to IdOs
  if (!id) return <KycOnIdosRedirect />;

  if (status === 'rejected') return <KycRejected />;
  if (status === 'pending' || status === 'contacted')
    return <PendingApproval />;
  if (status === 'expired') return <KycExpired />;
  if (status === 'approved' && isBlockedCountry) return <BlockedCountry />;
  //**KYC flows */

  // KYC complete & country allowed, move to next step AG generation
  if (status === 'approved') {
    return <ContributionAllowed projectId={projectId} />;
  }

  return (
    <p>Something went wrong and we could not retrieve your Kyc credentials</p>
  );
};

export const ApplyDialog = ({ projectId }: TProps) => {
  const { close } = useDialog();
  const { address, hasProfile } = useIdOS();

  // shouldn't be possible, just warding typescript
  if (!projectId) return <p>No project selected</p>;

  // shouldn't be possible, just warding typescript
  if (!address)
    return (
      <Button className="rounded-none rounded-b-lg" onClick={close}>
        Connect wallet first
      </Button>
    );

  // 1 step -> New user without KYC is redirected to IdOs to verify their ID
  if (!hasProfile) {
    return <KycOnIdosRedirect />;
  }

  return <UnlockKycData projectId={projectId} />;
};

ApplyDialog.displayName = 'applyDialog';
