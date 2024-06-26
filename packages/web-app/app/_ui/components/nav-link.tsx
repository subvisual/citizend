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

export const NavLink = ({
  href,
  name,
  topbar = false,
  className,
}: TNavLinkProps) => {
  const pathname = usePathname();
  const active =
    href === '/'
      ? href === pathname || pathname.startsWith('/projects')
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={clsx(
        'focus:outline-none md:focus-visible:text-mono-50 md:focus-visible:outline md:focus-visible:outline-2 md:focus-visible:outline-offset-0 md:focus-visible:outline-mono-50',
        topbar &&
          'rounded-lg md:px-4 md:py-3 md:text-mono-400 md:hover:text-mono-50',
        topbar && active && 'text-blue-500 md:bg-blue-500 md:text-mono-50',
        className,
      )}
      aria-current={active ? 'page' : undefined}
    >
      {name}
    </Link>
  );
};
