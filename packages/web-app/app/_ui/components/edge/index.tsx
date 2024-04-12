import { TChildren } from '@/app/_types';
import Link from 'next/link';

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface IEdgeBorderProps extends IButtonProps {
  avatar: React.ReactNode;
}

const Edge = ({ children }: TChildren) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="56"
      viewBox="0 0 16 56"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.66992 10.509L12.0173 1.27031C12.9336 0.452189 14.1189 0 15.3473 0H16V56H5C2.23858 56 0 53.7614 0 51V14.2387C0 12.8144 0.607458 11.4576 1.66992 10.509Z"
        fill="currentColor"
      />
    </svg>
    <div className="-mx-0.5 flex h-14 items-center justify-center bg-blue-500 px-6 py-2 font-medium text-mono-50 group-hover:bg-blue-400 ">
      {children}
    </div>
    <svg
      width="16"
      height="56"
      viewBox="0 0 16 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.3301 45.491L3.98275 54.7297C3.06645 55.5478 1.88105 56 0.652668 56H0V0H11C13.7614 0 16 2.23857 16 5V41.7613C16 43.1856 15.3925 44.5424 14.3301 45.491Z"
        fill="currentColor"
      />
    </svg>
  </>
);

export const EdgeBorderButton = ({
  children,
  onClick,
  avatar,
}: IEdgeBorderProps) => {
  return (
    <button
      onClick={onClick}
      className="md:focus-visible:outlin-2 group relative flex rounded-lg text-mono-900 hover:text-mono-800 focus:outline-none md:focus:outline md:focus-visible:outline-mono-50"
    >
      <svg
        width="16"
        height="56"
        viewBox="0 0 16 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <path
          d="M12.6833 2.01625L2.33594 11.2549C1.48597 12.0138 1 13.0992 1 14.2387V51C1 53.2091 2.79086 55 5 55H15V1.0151C14.1431 1.08977 13.3295 1.43925 12.6833 2.01625Z"
          fill="currentColor"
          stroke="#3865FD"
          strokeWidth="2"
        />
      </svg>
      <div className="z-10 flex h-14 items-center justify-center py-2 font-medium text-mono-50 group-hover:bg-mono-800 md:-mx-0.5 md:border-b-2 md:border-t-2 md:border-blue-500 md:bg-mono-900 md:px-6">
        <span className="mr-3 hidden md:block">{children}</span>
        {avatar}
      </div>
      <svg
        width="16"
        height="56"
        viewBox="0 0 16 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <path
          d="M3.31673 53.9838L13.6641 44.7451C14.514 43.9862 15 42.9008 15 41.7613V5C15 2.79086 13.2091 1 11 1H1V54.9849C1.85693 54.9102 2.67049 54.5608 3.31673 53.9838Z"
          fill="currentColor"
          stroke="#3865FD"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export const EdgeButton = ({ children, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex rounded-md text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
    >
      <Edge>{children}</Edge>
    </button>
  );
};

type TLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const EdgeLink = ({ children, href }: TLinkProps) => {
  return (
    <Link
      href={href}
      className="group flex rounded-md text-blue-500 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mono-400"
    >
      <Edge>{children}</Edge>
    </Link>
  );
};
