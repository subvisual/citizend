'use client';

import Link from 'next/link';
import { TProjectSaleDetails } from '@/app/_types';
import { useCountdown } from '../hooks/useCountdown';
import { ArrowRight } from '../components/svg/arrow-right';
import { getRelativePath } from '../utils/getRelativePath';
import { BannerImage } from './banner-image';
import { Status } from './status';
import { usdValue } from '../utils/intl-formaters/usd-value';
import { usdRange } from '../utils/intl-formaters/usd-range';
import { shortDateRange } from '../utils/intl-formaters/date-range';
import { formatEther, parseEther } from 'viem/utils';

const Upcoming = ({
  minTarget,
  maxTarget,
  startRegistration,
  endRegistration,
  start,
}: TProjectSaleDetails) => {
  const targetedRaise = usdRange(minTarget, maxTarget);
  const registerPeriod = shortDateRange(startRegistration, endRegistration);
  const { days, hours, minutes, seconds } = useCountdown(start);

  return (
    <ul className="mt-8 flex flex-col gap-4">
      <li className="flex flex-col justify-between gap-3 md:flex-row">
        <span className="text-mono-400">Targeted Raise</span>
        <span>{targetedRaise}</span>
      </li>
      <li className="flex flex-col justify-between gap-3 md:flex-row">
        <span className="text-mono-400">Register period</span>
        <span>{registerPeriod}</span>
      </li>
      <li className="-mx-6 -mb-4 flex flex-row items-center gap-3 border-t border-t-mono-400 px-6 pt-4 md:-mx-8 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row">
          <span className="text-mono-400">Sale starts in:</span>
          <span>
            {days}d {hours}h {minutes}m {seconds}s
          </span>
        </div>
        <ArrowRight className="ml-auto items-center text-blue-500" />
      </li>
    </ul>
  );
};

const FullData = ({
  minTarget,
  maxTarget,
  minContribution,
  maxContribution,
  totalTokensForSale,
}: TProjectSaleDetails) => {
  const targetedRaise = usdRange(BigInt(formatEther(minTarget)), BigInt(formatEther(maxTarget)));
  const maxPrice = usdValue(maxContribution);
  const minPrice = usdValue(minContribution);

  const totalTokens = new Intl.NumberFormat('default').format(
    BigInt(formatEther(totalTokensForSale))
  );

  return (
    <ul className="mt-8 flex flex-col gap-4">
      <li className="flex flex-col justify-between gap-3 md:flex-row">
        <span className="text-mono-400">Targeted Raise</span>
        <span>{targetedRaise}</span>
      </li>
      <li className="flex flex-col justify-between gap-3 md:flex-row">
        <span className="text-mono-400">Max. price per token</span>
        <span>{maxPrice}</span>
      </li>
      <li className="flex flex-col justify-between gap-3 md:flex-row">
        <span className="text-mono-400">Min. price per token</span>
        <span>{minPrice}</span>
      </li>
      <li className="flex flex-col justify-between gap-3 md:flex-row">
        <span className="text-mono-400"># of tokens distributed</span>
        <span>{totalTokens}</span>
      </li>
    </ul>
  );
};

const Live = (props: TProjectSaleDetails) => {
  const { end } = props;
  const { days, hours, minutes, seconds } = useCountdown(end);

  return (
    <>
      <FullData {...props} />
      <li className="-mx-6 -mb-8 flex flex-row items-center gap-3 rounded-b-2.5xl bg-blue-500 px-4 py-3 md:-mx-8">
        <div className="flex flex-col gap-3 md:flex-row">
          <span>Sale ends in:</span>
          <span>
            {days}d {hours}h {minutes}m {seconds}s
          </span>
        </div>
        <ArrowRight className="ml-auto items-center text-transparent" />
      </li>
    </>
  );
};

const contentMap = {
  completed: FullData,
  upcoming: Upcoming,
  live: Live,
};

export const ProjectCard = (props: TProjectSaleDetails) => {
  const { project, status, url, background, backgroundMobile, logo } = props;
  const href = 'projects' + getRelativePath(url);
  const Content = contentMap[status];

  return (
    <Link
      className="relative flex flex-col gap-4 rounded-2.5xl bg-mono-900 p-6 md:max-w-md md:p-8"
      href={href}
    >
      <Status status={status} />
      <BannerImage
        background={background}
        backgroundMobile={backgroundMobile}
        logo={logo}
      />
      <div className="lead mt-11 self-center text-xl">{project}</div>
      <Content {...props} />
    </Link>
  );
};
