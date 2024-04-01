'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type TNavLinkProps = {
  href: string;
  name: string;
  className?: string;
};

export const NavLink = ({ href, name, className }: TNavLinkProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        'rounded-lg px-4 py-3 font-medium text-mono-400 hover:text-mono-50 focus-visible:text-mono-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-mono-50',
        active && 'bg-blue-500 text-mono-50',
        className,
      )}
    >
      {name}
    </Link>
  );
};
