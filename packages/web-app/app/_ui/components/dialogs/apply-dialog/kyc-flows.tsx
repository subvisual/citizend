'use client';

import { useDialog } from '@/app/_providers/dialog/context';
import { Dialog } from '@headlessui/react';
import { Button } from '../..';
import { EdgeLink } from '../../edge';
import { getProviderUrl } from '@/app/_providers/idos/get-provider-url';
import { useIdOS } from '@/app/_providers/idos';
import { Error } from '../../svg/error';
import { Spinner } from '../../svg/spinner';

export const MissingIdosData = () => {
  return (
    <div>
      <div className="text-center">
        <Dialog.Title
          as="h2"
          className="flex flex-col items-center pb-3 pt-8 text-gray-950"
        >
          <Error className="my-4 h-8 w-8 text-blue-500" />
          Missing ID
        </Dialog.Title>
        <p>Something went wrong. Please try again later or contact support.</p>
      </div>
    </div>
  );
};

export const UnlockIdosExternal = () => {
  const { close } = useDialog();
  const idOsButton = document.getElementById('idos');
  const isVisible = idOsButton?.className?.includes('visible');

  return (
    <div>
      <div className="text-center">
        <Dialog.Title as="h2" className="pb-3 pt-8 text-gray-950">
          Verify your ID
        </Dialog.Title>
        <div>
          <p>
            To be able to contribute to projects, you must unlock your idOS
            data.
          </p>
        </div>
        <div className="mb-3 mt-8 flex justify-center">
          <Button variant="secondary" onClick={close}>
            {isVisible
              ? `Unlock idOs on main window`
              : `Unlock idOs on your wallet's modal`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const BlockedCountry = () => {
  return (
    <div>
      <div className="text-center">
        <Dialog.Title
          as="h2"
          className="mt-8 flex flex-col items-center text-gray-950"
        >
          <Error className="my-4 h-8 w-8 text-blue-500" />
          Not allowed
        </Dialog.Title>
        <div className="mt-8">
          <p>
            Unfortunately, you’re not eligible to participate due to project’s
            list of restricted countries.
          </p>
        </div>
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
      <div className="text-center">
        <Dialog.Title as="h2" className="pb-3 pt-8 text-gray-950">
          Verify your ID
        </Dialog.Title>
        <div>
          <p>Your ID has been rejected.</p>
          <p>
            To be able to contribute to projects, you must complete ID Plus
            verification.
          </p>
          <p>Do you wish to verify your ID again?</p>
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

export const KycExpired = () => {
  const { close } = useDialog();
  const { address } = useIdOS();

  if (!address) return null;

  return (
    <div>
      <div className="text-center">
        <Dialog.Title as="h2" className="pb-3 pt-8 text-gray-950">
          Verify your ID
        </Dialog.Title>
        <div>
          <p>Your ID verification has expired.</p>
          <p>
            To be able to contribute to projects, you must complete ID Plus
            verification.
          </p>
          <p>Do you wish to verify your ID?</p>
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

export const PendingApproval = () => {
  return (
    <div>
      <div className="text-center">
        <Dialog.Title
          as="h2"
          className="flex flex-col items-center py-8 text-gray-950"
        >
          <Spinner className="mb-4 h-8 w-8 text-blue-500" />
          ID verification pending
        </Dialog.Title>
        <div className="text-sm text-mono-800">
          <p>
            Please wait for Fractal ID verification specialists to verify you.
          </p>
          <p>You will receive an email from Fractal ID once it’s completed.</p>
        </div>
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
      <div className="text-center">
        <Dialog.Title as="h2" className="pb-3 pt-8 text-gray-950">
          Verify your ID
        </Dialog.Title>
        <div>
          <p>
            To be able to contribute to projects, you must complete ID Plus
            verification.
          </p>
          <p>Do you wish to verify your ID?</p>
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
