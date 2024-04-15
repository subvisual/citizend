import { TClassNameProps } from '@/app/_types';

export const ArrowRight = ({ className }: TClassNameProps) => (
  <svg
    width="35"
    height="32"
    viewBox="0 0 35 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="35" height="32" rx="6" fill="currentColor" />
    <path d="M17.5 8L25.4992 16L17.5 24" stroke="white" strokeMiterlimit="10" />
    <path d="M25.4992 16H9.5" stroke="white" strokeMiterlimit="10" />
  </svg>
);
