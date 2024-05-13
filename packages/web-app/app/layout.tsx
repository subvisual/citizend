import type { Metadata } from 'next';
import { nohemi } from '@/app/_ui/fonts';
import '@rainbow-me/rainbowkit/styles.css';
import './_ui/global.css';
import { Footer, Topbar } from '@/app/_ui/components';
import { Providers } from './_providers';
import Image from 'next/image';
import backgroundDesktop from '../public/background-desktop.png';
import Head from 'next/head';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image:
    'https://uploads-ssl.webflow.com/6613ccb2950e14dbbe77a183/661fab3674735b20d0c82435_citizend-share-image.jpg',
  url: 'https://app.citizend.xyz',
  sameAs: [
    'https://twitter.com/citizendxyz',
    'https://discord.com/invite/citizendxyz',
    'https://t.me/+QcSyoxz9bpYyZDhk',
    'https://medium.com/@citizendxyz',
  ],
  logo: 'https://uploads-ssl.webflow.com/6613ccb2950e14dbbe77a183/66214110832182d072dc54f2_citizend-logo.png',
  name: 'citizend: Token Launch Platform',
  description:
    'Citizend is the community-curated token launch platform of web3 enabling both community contributions and token launches in a secure, transparent and compliant way. Find the next early gem here.',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DAPP_HOST),
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
  openGraph: {
    title: 'citizend: Token Launch Platform',
    description:
      'Citizend is the community-curated token launch platform of web3 enabling both community contributions and token launches in a secure, transparent and compliant way. Find the next early gem here.',
    url: 'https://app.citizend.xyz',
    siteName: 'Citizend app',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nohemi.variable} font-nohemi`}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
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
        <div
          id="idos-root"
          className="justify-end text-mono-950  md:justify-center"
        >
          <div className="flex min-w-full flex-col items-center gap-5 rounded-md bg-mono-50 p-6 pb-16 md:min-w-96 md:pb-10">
            <h2 className="text-center">Verify your ID</h2>
            <p className="text-center md:max-w-96">
              To be able to contribute to projects, you must unlock your
              Citizend Passport data on idOS.
            </p>
            <div className="flex flex-col">
              <div id="idos" className="flex flex-col rounded-sm *:h-10"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
