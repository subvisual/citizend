import { TProjectStatus } from '@/app/_types';
import clsx from 'clsx';

const colorMap = {
  completed: ['bg-mono-50', 'text-blue-500'],
  upcoming: ['bg-blue-500', 'text-mono-50'],
  live: ['bg-green-500', 'text-mono-950'],
};

export const Status = ({ status }: { status: TProjectStatus }) => {
  const colors = colorMap[status];
  return (
    <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 content-center items-center justify-center">
      <div className={clsx('rounded-lg px-9 py-3 capitalize', ...colors)}>
        {status !== 'upcoming' ? status : 'Starting Soon'}
      </div>
    </div>
  );
};
