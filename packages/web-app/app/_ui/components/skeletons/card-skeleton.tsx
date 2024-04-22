import { TClassNameProps } from '@/app/_types';
import clsx from 'clsx';

export const CardSkeleton = ({ className }: TClassNameProps) => (
  <div className={clsx('w-full rounded-2.5xl bg-mono-950', className)}>
    <div
      className={clsx(
        'w-full animate-pulse rounded-2.5xl bg-gradient-to-br from-mono-800 to-mono-900',
        className,
      )}
    />
  </div>
);
