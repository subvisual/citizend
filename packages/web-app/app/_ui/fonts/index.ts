import localFont from 'next/font/local';

export const nohemi = localFont({
  src: [
    {
      path: './nohemi-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './nohemi-normal.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-nohemi',
});
