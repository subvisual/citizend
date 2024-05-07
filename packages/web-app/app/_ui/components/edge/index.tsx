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
      className="group relative flex rounded-lg text-mono-900 hover:text-mono-800 focus:outline-none md:focus:outline md:focus-visible:outline-2 md:focus-visible:outline-mono-50"
    >
      <svg
        width="17"
        height="58"
        viewBox="0 0 17 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block"
      >
        <path
          d="M7.85455 7.85455L15.5 1H17V57H5C2.79086 57 1 55.2091 1 53V14L7.85455 7.85455Z"
          fill="currentColor"
        />
        <path
          d="M17 57H6C3.23858 57 1 54.7614 1 52V15.2387C1 13.8144 1.60746 12.4576 2.66992 11.509L13.0173 2.27031C13.9336 1.45219 15.1189 1 16.3473 1H17"
          stroke="#3865FD"
          strokeWidth="2"
        />
      </svg>
      <div className="z-10 flex h-[58px] items-center justify-center py-2 font-medium text-mono-50 group-hover:bg-mono-800 md:-mx-0.5 md:border-b-2 md:border-t-2 md:border-blue-500 md:bg-mono-900 md:px-6">
        <span className="mr-3 hidden md:block">{children}</span>
        {avatar}
      </div>
      <svg
        width="17"
        height="58"
        viewBox="0 0 17 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.14545 50.1455L1.5 57H0V1H12C14.2091 1 16 2.79086 16 5V44L9.14545 50.1455Z"
          fill="currentColor"
        />
        <path
          d="M0 1H11C13.7614 1 16 3.23858 16 6V42.7613C16 44.1856 15.3925 45.5424 14.3301 46.491L3.98275 55.7297C3.06645 56.5478 1.88105 57 0.652668 57H0"
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
