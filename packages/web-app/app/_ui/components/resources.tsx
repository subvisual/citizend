import { TClassNameProps } from '@/app/_types';
import clsx from 'clsx';
import Link from 'next/link';

export const Resources = ({ className }: TClassNameProps) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <h3 className="text-sm text-mono-400">Resources</h3>
      <div className="mt-6 flex flex-col gap-6 md:mt-2 md:gap-3">
        <Link href="https://docs.citizend.xyz/citizend">Docs</Link>
        <Link href="https://citizend.xyz/blog">Blog</Link>
        <Link href="https://drive.google.com/drive/u/0/folders/18JXQk1MGJaLEjT1-ZiYaMZCtWdcqbsdj">
          Brand Assets
        </Link>
      </div>
    </div>
  );
};
