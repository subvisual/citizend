'use client';

import { useFetchGrants, useFetchKycData } from '@/app/_lib/queries';
import { useIdOS } from '@/app/_providers/idos';
import { Dialog } from '@headlessui/react';
import { AcquireAccessGrantButton } from './acquire-access-grant-button';
import { getProviderUrl } from '@/app/_providers/idos/get-provider-url';
import Link from 'next/link';
import { Button } from '..';
import { useDialog } from '@/app/_providers/dialog/context';
import { useEffect } from 'react';

type TVerifyYourIdProps = {
  address: string;
  close: () => void;
};

const VerifyYourId = ({ address, close }: TVerifyYourIdProps) => {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            To be able to Contribute to this project, you must complete ID basic
            verification.
          </p>
        </div>
        <Link href={getProviderUrl(address)} className="mt-8">
          Verify my ID on IdOs to contribute
        </Link>
        <Button variant="secondary" onClick={close}>
          Skip for now
        </Button>
      </div>
    </div>
  );
};

type TCloseProp = {
  close: () => void;
};

// TODO: Add Rejected scenario
const PendingApproval = ({ close }: TCloseProp) => {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your kyc is being reviewed. Please try again later.
          </p>
        </div>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

const BlockedCountry = ({ close }: TCloseProp) => {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Ooops
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Sadly you are not allowed to contribute to this project due to
            country restrictions.
          </p>
        </div>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

type TIssueAccessGrantProps = {
  id: string;
  close: () => void;
};

const IssueAccessGrant = ({ id, close }: TIssueAccessGrantProps) => {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            You have successfully verified your ID. Issue an Access Grant to
            citizend so you can contribute to this project.
          </p>
        </div>
        <div className="mt-8 flex flex-col">
          <AcquireAccessGrantButton id={id} />
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const UnlockIdosExternal = ({ close }: TCloseProp) => {
  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <Button variant="secondary" onClick={close}>
          {`Unlock idOs on your wallet's modal`}
        </Button>
      </div>
    </div>
  );
};

const UnlockedIdos = () => {
  const { close } = useDialog();
  const { country, id, approved, isLoading } = useFetchKycData();
  const { data: grants, refetch } = useFetchGrants();
  const hasGrant = grants && grants.length > 1;

  console.log(
    '%c==>',
    'color: green; background: yellow; font-size: 20px',
    grants,
  );

  useEffect(() => {
    if (!hasGrant) {
      const interval = setInterval(() => {
        refetch();
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [hasGrant, refetch]);

  if (isLoading) return <UnlockIdosExternal close={close} />;

  if (!approved) return <PendingApproval close={close} />;

  if (country !== 'PT') return <BlockedCountry close={close} />;

  if (id && grants && !hasGrant)
    return <IssueAccessGrant id={id} close={close} />;

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

export const ContributeDialog = () => {
  const { close } = useDialog();
  const { address, hasProfile } = useIdOS();

  if (!address)
    return (
      <Button className="rounded-none rounded-b-lg" onClick={close}>
        Connect wallet first
      </Button>
    );

  if (!hasProfile) {
    return <VerifyYourId address={address} close={close} />;
  }

  return <UnlockedIdos />;
};

ContributeDialog.displayName = 'contributeDialog';
