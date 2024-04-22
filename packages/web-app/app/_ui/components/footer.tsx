import { InternalNavigation } from './internal-navigation';
import { Resources } from './resources';
import { SocialResources } from './social-resources';
import Link from 'next/link';
import { CitizendLogoFooter } from './svg/citizend-logo-footer';
import { SubscribeNewsletter } from './subscribe-newsletter';

export function Footer() {
  return (
    <footer
      className="bg-mono-900 bg-cover bg-no-repeat md:bg-transparent md:bg-background-footer-desktop"
      aria-labelledby="footer-heading"
    >
      <div className="flex flex-col px-6 py-14 md:px-27">
        <div>
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <CitizendLogoFooter className="w-[54px] md:w-[102px]" />
          <div className="mt-8 grid grid-cols-1 md:mt-14 md:grid-cols-footer md:gap-31 md:leading-10">
            <div>
              <p className="md:leading-1 pb-6 text-2xl md:text-3.5xl">
                Subscribe to our{' '}
                <span className="text-blue-500">newsletter</span> to stay in
                touch with our latest news
              </p>
              <SubscribeNewsletter />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6 py-14 md:py-0 md:pb-8">
                <InternalNavigation />
                <Resources />
              </div>
              <SocialResources />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse pt-14 md:flex-row md:justify-between">
          <div className="pt-14 text-xs font-medium leading-6 text-mono-50 md:pt-0">
            citizend © 2024 All rights reserved.
          </div>
          <div
            className="flex flex-wrap gap-6 text-xs leading-6 text-mono-400"
            role="list"
          >
            <Link
              href="https://citizend.xyz/legal/privacy-policy"
              role="listitem"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://citizend.xyz/legal/terms-conditions"
              role="listitem"
            >
              Terms of Service
            </Link>
            <Link href="/" role="listitem">
              AML Policy
            </Link>
            <Link href="/" role="listitem">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
