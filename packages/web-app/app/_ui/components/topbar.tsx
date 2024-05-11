'use client';

import { WalletButton } from '@/app/_ui/components';
import { NavLink } from './nav-link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { NavigationMobile } from './navigation-mobile';
import { CitizendLogo } from './svg/citizend-logo';
import { MyProjectsLink } from './internal-navigation';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(
        document.getElementById('visible-area')?.scrollTop || 0,
      );
    };

    document
      .getElementById('visible-area')
      ?.addEventListener('scroll', updatePosition);

    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export function Topbar() {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={clsx(
        'sticky top-0 z-10 transition-all duration-100',
        scrollPosition > 40 && 'bg-mono-950',
      )}
    >
      <div className="mx-auto flex max-w-280 flex-row flex-wrap items-center justify-between px-6 py-5 md:justify-normal md:py-6">
        <CitizendLogo className="h-8 w-24 md:h-[52px] md:w-[157px]" />
        <nav className="ml-20 hidden flex-grow items-center gap-8 md:flex">
          <NavLink href="/" name="All Projects" topbar />
          <MyProjectsLink topbar />
        </nav>
        <div className="ml-auto flex flex-row gap-6">
          <WalletButton />
          <NavigationMobile className="md:hidden" />
        </div>
      </div>
    </header>
  );
}
