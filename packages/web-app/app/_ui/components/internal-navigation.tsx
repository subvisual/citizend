'use client';

import clsx from 'clsx';
import { NavLink } from './nav-link';
import { TClassNameProps } from '@/app/_types';
import { useKyc } from '@/app/_providers/kyc/context';

type TMyProjectsLinkProps = {
  topbar?: boolean;
};

export const MyProjectsLink = ({ topbar = false }: TMyProjectsLinkProps) => {
  const { status } = useKyc();

  if (status === 'approved') {
    return <NavLink href="/my-projects" name="My Projects" topbar={topbar} />;
  }

  return null;
};

export const InternalNavigation = ({ className }: TClassNameProps) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <h3 className="text-sm text-mono-400">Navigation</h3>
      <nav className="mt-6 flex flex-col gap-6 md:mt-2 md:gap-3">
        <NavLink href="/" name="All Projects" />
        <MyProjectsLink />
      </nav>
    </div>
  );
};
