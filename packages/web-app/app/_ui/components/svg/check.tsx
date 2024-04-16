import { TClassNameProps } from '@/app/_types';

export const Check = ({ className }: TClassNameProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="8" cy="8" r="8" fill="#3865FD" />
    <path d="M4 7.25L7.6 11L12 5" stroke="white" strokeWidth="2" />
  </svg>
);
