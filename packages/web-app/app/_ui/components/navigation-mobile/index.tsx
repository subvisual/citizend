'use client';

import React, { useState } from 'react';
import { Overlay } from './overlay';
import { BurgerMenu } from './burger-menu';
import { NavLink } from '../nav-link';
import Link from 'next/link';
import clsx from 'clsx';

type TNavigationMobileProps = {
  classNames?: string;
};

export const NavigationMobile = ({ classNames }: TNavigationMobileProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          'flex items-center text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
          classNames,
        )}
      >
        <span className="sr-only">Open navigation menu</span>
        <BurgerMenu openDialog={() => setOpen(true)} />
      </div>
      <Overlay open={open} setOpen={setOpen}>
        <h3 className="text-mono-400">Navigation</h3>
        <nav className="mt-6 flex flex-col gap-6">
          <NavLink href="/" name="All Projects" />
          <NavLink href="/projects/my-projects" name="My Projects" />
        </nav>
        <h3 className="mt-8 text-sm text-mono-400">Resources</h3>
        <div className="mt-6 flex flex-col gap-6">
          <Link href="/">Docs</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Brand Assets</Link>
        </div>
      </Overlay>
    </>
  );
};
