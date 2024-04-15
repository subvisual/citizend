import { TClassNameProps } from '@/app/_types';

export const Error = ({ className }: TClassNameProps) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16Z"
      fill="white"
      stroke="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.4002 16L8 9.59977L9.59977 8L16 14.4002L22.4002 8L24 9.59977L17.5998 16L24 22.4002L22.4002 24L16 17.5998L9.59977 24L8 22.4002L14.4002 16Z"
      fill="currentColor"
    />
  </svg>
);
