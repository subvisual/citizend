'use client';

import { useDialog } from '@/app/_providers/dialog/context';
import { Dialog } from '@headlessui/react';
import { Button } from '../..';
import { EdgeLink } from '../../edge';
import { getProviderUrl } from '@/app/_providers/idos/get-provider-url';
import { useIdOS } from '@/app/_providers/idos';

export const UnlockIdosExternal = () => {
  const { close } = useDialog();
  const idOsButton = document.getElementById('idos');
  const isVisible = idOsButton?.className?.includes('visible');

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <Button variant="secondary" onClick={close}>
          {isVisible
            ? `Unlock idOs on main window`
            : `Unlock idOs on your wallet's modal`}
        </Button>
      </div>
    </div>
  );
};

export const BlockedCountry = () => {
  const { close } = useDialog();

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

export const KycRejected = () => {
  const { close } = useDialog();
  const { address } = useIdOS();

  if (!address) return null;

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your kyc has been rejected. Please try again, or contact idOS
            support.
          </p>
        </div>
        <div className="mb-3 mt-8 flex justify-center">
          <EdgeLink href={getProviderUrl(address)}>Verify ID</EdgeLink>
        </div>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

export const KycExpired = () => {
  const { close } = useDialog();
  const { address } = useIdOS();

  if (!address) return null;

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your kyc has expired. To be able to Contribute to this project, you
            must complete ID basic verification.
          </p>
        </div>
        <div className="mb-3 mt-8 flex justify-center">
          <EdgeLink href={getProviderUrl(address)}>Verify ID</EdgeLink>
        </div>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

export const PendingApproval = () => {
  const { close } = useDialog();

  return (
    <div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title as="h2" className="text-gray-900">
          Verify your ID
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your kyc is being reviewed. Please try again once it is approved.
          </p>
        </div>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
};

export const KycOnIdosRedirect = () => {
  const { close } = useDialog();
  const { address } = useIdOS();

  if (!address) return null;

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
        <div className="mb-3 mt-8 flex justify-center">
          <EdgeLink href={getProviderUrl(address)}>Verify ID</EdgeLink>
        </div>
        <Button variant="secondary" onClick={close}>
          Skip for now
        </Button>
      </div>
    </div>
  );
};
