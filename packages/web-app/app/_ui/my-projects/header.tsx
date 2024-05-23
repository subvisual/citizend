import { useCtzndSaleCapStatus, useCtzndSaleStatus } from '@/app/_lib/hooks';
import { useTotalInvestedUsdcCtznd } from '@/app/_lib/queries';
import { useReadCtzndSaleInvestorCount } from '@/wagmi.generated';
import { useCountdown } from '../hooks/useCountdown';
import Image from 'next/image';
import { usdValue } from '../utils/intl-formaters/usd-value';
import { number } from '../utils/intl-formaters/number';
import { TProjectSaleDetails } from '@/app/_types';
import { getRelativePath } from '../utils/getRelativePath';

export const Header = ({ project, logo, end }: TProjectSaleDetails) => {
  const { data: numberOfParticipants } = useReadCtzndSaleInvestorCount({
    query: {
      staleTime: 0,
    },
  });
  const totalCommittedUsdc = useTotalInvestedUsdcCtznd();
  const status = useCtzndSaleStatus();
  const formattedNumberOfParticipants = number(numberOfParticipants || 0);
  const saleCapStatus = useCtzndSaleCapStatus();
  const projectTitle =
    project === 'citizend' ? 'Citizend Community Sale' : project;
  const { days, hours, minutes, seconds } = useCountdown(end);

  return (
    <div className="flex flex-col rounded-md bg-mono-50 px-6 py-8 text-mono-950">
      <h2 className="flex items-center gap-4 text-2xl">
        <Image
          src={getRelativePath(logo)}
          alt={`${project} logo`}
          width={40}
          height={40}
        />
        <div className="relative flex w-full flex-col md:flex-row md:items-center">
          {projectTitle}
          {status === 'completed' ? (
            <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-full rounded-full bg-blue-500 px-2 pb-0.5 pt-1 text-xs uppercase leading-3 text-mono-50">
              Closed
            </div>
          ) : null}
          {status === 'live' ? (
            <>
              <div className="flex">
                <div className="pr-4 text-base uppercase text-mono-800 md:pl-6">
                  Live
                </div>
                <div className="ml-1 h-4 w-4 animate-pulse rounded-full bg-green-500" />
              </div>
              <div className="ml-auto w-56 text-base font-normal">
                Sale ends in {days}d {hours}h {minutes}m {seconds}s
              </div>
            </>
          ) : null}
        </div>
      </h2>
      <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 md:px-14 md:pt-8">
        <div className="flex flex-col gap-2 md:border-r md:border-mono-200">
          <h3 className="text-sm text-mono-800">Number of participants</h3>
          <div>{formattedNumberOfParticipants}</div>
        </div>
        <div className="flex flex-col gap-2 md:border-r md:border-mono-200">
          <h3 className="text-sm text-mono-800">Total amount committed</h3>
          <div>{usdValue(totalCommittedUsdc)}</div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-mono-800">Rising Tide Mechanism</h3>
          <div>
            {saleCapStatus === 'above'
              ? 'ON (max. target reached)'
              : 'OFF (total contributed below max.)'}
          </div>
        </div>
      </div>
    </div>
  );
};
