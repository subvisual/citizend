import Image from 'next/image';
import { CitizenBlackBackgroundLogo } from './svg/citizend-black-background-logo';
import Link from 'next/link';

type TStatus = {
  status: string;
};

const Status = ({ status }: TStatus) => {
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

export const ProjectCard = ({}) => {
  return (
    <Link
      className="relative flex flex-col gap-4 rounded-2.5xl bg-mono-900 p-8"
      href="projects/citizend"
    >
      <Status status="Upcoming" />
      <BannerImage />
      <div className="lead mt-11 self-center text-xl">Citizend</div>
      <ul className="mt-8 flex flex-col gap-4">
        <li className="flex flex-col justify-between gap-3 md:flex-row">
          <span className="text-mono-400">Targeted Raise</span>
          <span>$1,000,000 - $2,000,000</span>
        </li>
        <li className="flex flex-col justify-between gap-3 md:flex-row">
          <span className="text-mono-400">Register period</span>
          <span>26/04/24 - 03/05/24</span>
        </li>
      </ul>
    </Link>
  );
};
