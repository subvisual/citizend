import { TClassNameProps } from '@/app/_types';
import clsx from 'clsx';

export const Spinner = ({ className }: TClassNameProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx('animate-spin', className)}
  >
    <path
      opacity="0.6"
      d="M11.9999 22C13.1044 22 13.9998 21.1046 13.9998 20C13.9998 18.8954 13.1044 18 11.9999 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 11.9999 22Z"
      fill="currentColor"
    />
    <path
      d="M11.9999 6.00002C13.1044 6.00002 13.9998 5.10458 13.9998 4.00001C13.9998 2.89543 13.1044 2 11.9999 2C10.8954 2 10 2.89543 10 4.00001C10 5.10458 10.8954 6.00002 11.9999 6.00002Z"
      fill="currentColor"
    />
    <path
      opacity="0.7"
      d="M6.34269 19.6572C7.44721 19.6572 8.34261 18.7618 8.34261 17.6572C8.34261 16.5527 7.44721 15.6572 6.34269 15.6572C5.23817 15.6572 4.34277 16.5527 4.34277 17.6572C4.34277 18.7618 5.23817 19.6572 6.34269 19.6572Z"
      fill="currentColor"
    />
    <path
      opacity="0.3"
      d="M17.6571 8.34279C18.7617 8.34279 19.6571 7.44736 19.6571 6.34278C19.6571 5.23821 18.7617 4.34277 17.6571 4.34277C16.5526 4.34277 15.6572 5.23821 15.6572 6.34278C15.6572 7.44736 16.5526 8.34279 17.6571 8.34279Z"
      fill="currentColor"
    />
    <path
      opacity="0.8"
      d="M4.00092 14.001C5.10599 14.001 6.00183 13.1052 6.00183 12C6.00183 10.8949 5.10599 9.99902 4.00092 9.99902C2.89584 9.99902 2 10.8949 2 12C2 13.1052 2.89584 14.001 4.00092 14.001Z"
      fill="currentColor"
    />
    <path
      opacity="0.4"
      d="M19.9999 14C21.1044 14 21.9998 13.1046 21.9998 12C21.9998 10.8954 21.1044 10 19.9999 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 19.9999 14Z"
      fill="currentColor"
    />
    <path
      opacity="0.9"
      d="M6.34269 8.34377C7.44721 8.34377 8.34261 7.44833 8.34261 6.34376C8.34261 5.23918 7.44721 4.34375 6.34269 4.34375C5.23817 4.34375 4.34277 5.23918 4.34277 6.34376C4.34277 7.44833 5.23817 8.34377 6.34269 8.34377Z"
      fill="currentColor"
    />
    <path
      opacity="0.5"
      d="M17.6571 19.6582C18.7617 19.6582 19.6571 18.7628 19.6571 17.6582C19.6571 16.5536 18.7617 15.6582 17.6571 15.6582C16.5526 15.6582 15.6572 16.5536 15.6572 17.6582C15.6572 18.7628 16.5526 19.6582 17.6571 19.6582Z"
      fill="currentColor"
    />
  </svg>
);
