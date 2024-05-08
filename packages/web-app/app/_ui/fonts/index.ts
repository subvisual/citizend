import localFont from 'next/font/local';

export const nohemi = localFont({
  src: [
    {
      path: './nohemi-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './nohemi-normal.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-nohemi',
});
