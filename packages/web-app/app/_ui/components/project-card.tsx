import Image from 'next/image';
import { CitizenBlackBackgroundLogo } from './svg/citizend-black-background-logo';
import Link from 'next/link';
import { TProjectSaleDetails, TProjectStatus } from '@/app/_types';

const Status = ({ status }: { status: TProjectStatus }) => {
  return (
    <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 content-center items-center justify-center">
      <div className="rounded-lg bg-blue-500 px-9 py-3">{status}</div>
    </div>
  );
};

const BannerImage = () => (
  <div className="relative">
    <Image
      src="/citizend-card-desktop.png"
      alt="Citizend Project brand hexagonal shapes"
      width={363}
      height={210}
      priority
      className="hidden rounded-xl md:block"
    />
    <Image
      src="/citizend-card-mobile.png"
      alt="Citizend Project brand hexagonal shapes"
      width={278}
      height={161}
      priority
      className="rounded-xl  md:hidden"
    />
    <div className="absolute -bottom-11 left-1/2 -translate-x-1/2">
      <CitizenBlackBackgroundLogo />
    </div>
  </div>
);

export const ProjectCard = ({
  project,
  status,
  rate,
  minTarget,
  maxTarget,
  start,
  end,
  minContribution,
  maxContribution,
  totalTokensForSale,
  url,
  logo,
  background,
  backgroundMobile,
}: TProjectSaleDetails) => {
  //substring get the last segment after the last slash
  const href = 'projects/' + url.substring(url.lastIndexOf('/') + 1);
  const rangeFormatter = new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 1,
  });
  const targetedRaise = rangeFormatter.formatRange(minTarget, maxTarget);
  const dateFormatter = new Intl.DateTimeFormat('default', {
    month: 'short',
    day: 'numeric',
    year: '2-digit',
  });

  // needs to be updated as this is actually investment period
  const registerPeriod = dateFormatter.formatRange(start, end);

  return (
    <Link
      className="relative flex flex-col gap-4 rounded-2.5xl bg-mono-900 p-8"
      href={href}
    >
      <Status status={status} />
      <BannerImage />
      <div className="lead mt-11 self-center text-xl">{project}</div>
      <ul className="mt-8 flex flex-col gap-4">
        <li className="flex flex-col justify-between gap-3 md:flex-row">
          <span className="text-mono-400">Targeted Raise</span>
          <span>{targetedRaise}</span>
        </li>
        <li className="flex flex-col justify-between gap-3 md:flex-row">
          <span className="text-mono-400">Register period</span>
          <span>{registerPeriod}</span>
        </li>
      </ul>
    </Link>
  );
};
