import { TClassNameProps } from '@/app/_types';
import clsx from 'clsx';
import Link from 'next/link';

export const Resources = ({ className }: TClassNameProps) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <h3 className="text-sm text-mono-400">Resources</h3>
      <div className="mt-6 flex flex-col gap-6 md:mt-2 md:gap-3">
        <Link href="/">Docs</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Brand Assets</Link>
      </div>
    </div>
  );
};
