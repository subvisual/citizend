'use client';

import React, { useState } from 'react';
import { Overlay } from './overlay';
import { BurgerMenu } from './burger-menu';
import Link from 'next/link';
import clsx from 'clsx';
import { InternalNavigation } from '../internal-navigation';
import { TClassNameProps } from '@/app/_types';
import { Resources } from '../resources';

export const NavigationMobile = ({ className }: TClassNameProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          'flex items-center text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
          className,
        )}
      >
        <span className="sr-only">Open navigation menu</span>
        <BurgerMenu openDialog={() => setOpen(true)} />
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <InternalNavigation />
        <Resources className="mt-8" />
      </Overlay>
    </>
  );
};
