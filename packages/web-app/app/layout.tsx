import type { Metadata } from 'next';
import { nohemi } from '@/app/_ui/fonts';
import '@rainbow-me/rainbowkit/styles.css';
import './_ui/global.css';
import { Footer, Topbar } from '@/app/_ui/components';
import { Providers } from './_providers';
import Image from 'next/image';
import backgroundDesktop from '../public/background-desktop.png';

export const metadata: Metadata = {
  title: {
    template: '%s | citizend: Token Launch Platform',
    default: 'citizend: Token Launch Platform',
  },
  description:
    'Citizend is the community-curated token launch platform of web3 enabling both community contributions and token launches in a secure, transparent and compliant way. Find the next early gem here.',
  keywords: [
    'Launchpad',
    'Web3',
    'Defi',
    'Citizend',
    'Token',
    'Sale',
    'IDO',
    'Citizend Community Sale',
    'Citizend Launchpad',
    'Citizend IDO',
    'Citizend Token Sale',
    'Citizend Token Launch',
  ],
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nohemi.variable} font-nohemi`}>
      <body className={`relative overflow-hidden bg-mono-900`}>
        <Image
          alt="background"
          src={backgroundDesktop}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
          className="fixed left-0 top-0 -z-10 h-screen w-screen"
        />
        <Providers>
          <div
            id="visible-area"
            className="flex h-screen w-screen flex-col overflow-y-auto"
          >
            <Topbar />
            <div className="grow bg-cover py-14 md:p-20">
              <div className="mx-auto max-w-280 px-6">{children}</div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
