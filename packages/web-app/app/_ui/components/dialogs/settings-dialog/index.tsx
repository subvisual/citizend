'use client';

import { Dialog } from '@headlessui/react';
import { Avatar } from '../../avatar';
import { Address } from './address';
import { Balance } from './balance';
import { DisconnectMenu } from './disconnect';

export function SettingsDialog() {
  return (
    <>
      <Dialog.Title
        as="h4"
        className="relative flex w-full justify-center pb-6 text-mono-950"
      >
        <div className="">Settings</div>
      </Dialog.Title>
      <div className="flex flex-col divide-y divide-mono-300">
        <div className="flex items-center gap-3 pb-6">
          <Avatar />
          <Address />
        </div>
        <div className="flex gap-2 py-6">
          <Balance />
        </div>
        <div className="flex gap-2 pt-6">
          <DisconnectMenu />
        </div>
      </div>
    </>
  );
}

SettingsDialog.displayName = 'settingsDialog';
