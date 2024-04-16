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
  MissingIdosData,
} from './kyc-flows';
import { useKyc } from '@/app/_providers/kyc/context';
import { useHasCitizendGrant, useHasProjectGrant } from '@/app/_lib/hooks';
import { TProjectInfoArgs } from '@/app/_server/projects';
import { ERRORS } from '@/app/_providers/kyc';
import { Check } from '../../svg/check';
import { Spinner } from '../../svg/spinner';
import { Error } from '../../svg/error';
import { blockedCountries } from '@/app/_server/blocked-countries';

type TProjectIdProps = {
  projectId: string;
};

const IssueCitizendGrant = () => {
  const { hasGrant: hasCitizendGrant, isLoading: isLoadingCitizendGrant } =
    useHasCitizendGrant();
  const { data, isLoading, isError } = usePublicInfo();

  if (isLoading || isLoadingCitizendGrant)
    return <Spinner className="h-5 w-5" />;

  if (
    isError ||
    !data?.grantee ||
    !data?.encryptionPublicKey ||
    !data?.lockTimeSpanSeconds
  )
    return <Error className="h-4 w-4 text-blue-500" />;

  if (hasCitizendGrant) return <Check />;

  return <AcquireAccessGrantButton {...data} />;
};

const IssueProjectGrant = ({ projectId }: TProjectIdProps) => {
  const { hasGrant: hasCitizendGrant } = useHasCitizendGrant();
  const { data: citizendData } = usePublicInfo();
  const { hasGrant: hasProjectGrant, isLoading: isLoadingProjectGrant } =
    useHasProjectGrant(projectId);
  // fix type
  const { data, isLoading, isError } = useProjectPublicInfo(
    projectId as TProjectInfoArgs,
  );

  if (isLoading || isLoadingProjectGrant || !hasCitizendGrant)
    return <Spinner className="h-5 w-5" />;

  if (
    isError ||
    !data?.address ||
    !data?.publicKey ||
    !citizendData?.lockTimeSpanSeconds
  )
    return <Error className="h-4 w-4 text-blue-500" />;

  if (hasProjectGrant) return <Check />;

  return (
    <AcquireAccessGrantButton
      grantee={data.address}
      encryptionPublicKey={data.publicKey}
      lockTimeSpanSeconds={citizendData.lockTimeSpanSeconds}
    />
  );
};

const Complete = () => (
  <div>
    <div className="text-center">
      <Dialog.Title
        as="h2"
        className="flex flex-col items-center py-8 text-gray-950"
      >
        <Check className="mb-4 h-8 w-8" />
        Congratulations
      </Dialog.Title>
      <p>
        You’re eligible to participate in the community sale that will take
        place on the 5th of May.
      </p>
      <p>
        We will send a reminder to everyone who is eligible 24h before the sale.
      </p>
    </div>
  </div>
);

const ContributionAllowed = ({ projectId }: TProjectIdProps) => {
  const { hasGrant: hasProjectGrant } = useHasProjectGrant(projectId);
  const { hasGrant: hasCitizendGrant } = useHasCitizendGrant();

  if (hasProjectGrant && hasCitizendGrant) return <Complete />;

  return (
    <div>
      <div className="text-center">
        <Dialog.Title
          as="h2"
          className="flex flex-col items-center pt-8 text-gray-950"
        >
          <Spinner className="mb-4 h-8 w-8 text-blue-500" />
          Proceed in your wallet
        </Dialog.Title>
        <div className="mt-2 flex flex-col items-start gap-3">
          <p className="mb-2 text-sm">
            To be able to contribute to projects you must issue an access grant
            to Citizend and to the project.
          </p>
          <p className="flex items-center gap-5">
            <IssueCitizendGrant />
            <span>Citizend Access Grant</span>
          </p>
          <p className="flex items-center gap-5">
            <IssueProjectGrant projectId={projectId} />{' '}
            <span>Project Access Grant</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// 2 step -> User has verified their ID externally and now has to unlock IdOs and enclave
const UnlockKycData = ({ projectId }: TProjectIdProps) => {
  const { country, id, status, isLoading: isLoadingKyc, error } = useKyc();
  const isBlockedCountry = useMemo(() => {
    if (!country) return false;
    return blockedCountries.some(
      (blockedCountry) => blockedCountry === country,
    );
  }, [country]);

  //**KYC flows */
  if (isLoadingKyc) return <UnlockIdosExternal />;

  // Doesn't have kyc plus credential, so needs to be redirected to IdOs
  // or doesn't have issue an AG to the app
  if (!id || error === ERRORS.MISSING_FRACTAL_AG) return <KycOnIdosRedirect />;
  if (isBlockedCountry) return <BlockedCountry />;

  if (status === 'rejected') return <KycRejected />;
  if (status === 'pending' || status === 'contacted')
    return <PendingApproval />;
  if (status === 'expired') return <KycExpired />;
  //**KYC flows */

  // KYC complete & country allowed, move to next step AG generation
  if (status === 'approved' && country) {
    return <ContributionAllowed projectId={projectId} />;
  }

  return <MissingIdosData />;
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
