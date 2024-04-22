'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type TRedirectProps = {
  href: string;
};

export const Redirect = ({ href }: TRedirectProps) => {
  const router = useRouter();

  useEffect(() => {
    router.push(href);
  }, [router, href]);

  return null;
};
