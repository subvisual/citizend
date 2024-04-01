'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

type TOverlayProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
};

type TCloseProps = {
  setOpen: (open: boolean) => void;
};

const Close = ({ setOpen }: TCloseProps) => {
  return (
    <button
      type="button"
      onClick={() => setOpen(false)}
      className="text-mono-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-mono-50"
    >
      <span className="sr-only">Close panel</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4002 12L4 5.59977L5.59977 4L12 10.4002L18.4002 4L20 5.59977L13.5998 12L20 18.4002L18.4002 20L12 13.5998L5.59977 20L4 18.4002L10.4002 12Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export function Overlay({ open, setOpen, children }: TOverlayProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen">
                  <div className="flex h-full flex-col overflow-y-scroll bg-mono-950 py-5 shadow-xl">
                    <div className="px-6 pb-5">
                      <div className="flex items-start items-center justify-between">
                        <Dialog.Title className="text-gray-900">
                          <Image
                            src="/citizend-logo.svg"
                            alt="Citizend Logo"
                            width={96}
                            height={31}
                            priority
                            className="md:hidden"
                          />
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <Close setOpen={setOpen} />
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-8 flex-1 px-6">{children}</div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
