'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type TNavLinkProps = {
  href: string;
  name: string;
  className?: string;
  topbar?: boolean;
};

export const NavLink = ({ href, name, topbar, className }: TNavLinkProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'rounded-lg focus:outline-none ',
        topbar &&
          'md:px-4 md:py-3 md:font-medium md:text-mono-400 md:hover:text-mono-50 md:focus-visible:text-mono-50 md:focus-visible:outline md:focus-visible:outline-2 md:focus-visible:outline-offset-0 md:focus-visible:outline-mono-50',
        topbar && active && 'text-blue-500 md:bg-blue-500 md:text-mono-50',
        className,
      )}
      aria-current={active ? 'page' : undefined}
    >
      {name}
    </Link>
  );
};
