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
    template: '%s | Citizend',
    default: 'Citizend',
  },
  description: 'The community-curated token launch platform of web3',
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
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${nohemi.className} overflow-hidden`}>
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
          className="fixed left-0 top-0 -z-10 h-screen w-screen antialiased"
        />
        <Providers>
          <div className="flex h-screen w-screen flex-col overflow-y-auto">
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
