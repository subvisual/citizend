import clsx from 'clsx';
import { NavLink } from './nav-link';
import { TClassNameProps } from '@/app/_types';

export const InternalNavigation = ({ className }: TClassNameProps) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <h3 className="text-mono-400">Navigation</h3>
      <nav className="mt-6 flex flex-col gap-6">
        <NavLink href="/" name="All Projects" />
        <NavLink href="/projects/my-projects" name="My Projects" />
      </nav>
    </div>
  );
};
