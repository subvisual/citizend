import Link from 'next/link';
import { Twitter } from '../components/svg/Twitter';
import { Fractal } from '../components/svg/Fractal';
import { formatDate } from '../utils/intl-formaters/date';
import { Discord } from '../components/svg/Discord';
import { ApplyButton } from './apply-button';
import { getProviderUrl } from '@/app/_providers/idos/get-provider-url';
import { Tooltip } from '../components/tooltip';

type THowToParticipateProps = {
  saleDate: bigint;
  startRegistration: bigint;
  endRegistration: bigint;
  error: any;
};

export const HowToParticipate = ({
  saleDate,
  startRegistration,
  endRegistration,
  error,
}: THowToParticipateProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        How to participate
      </h4>
      <div className="flex flex-col gap-4 px-8 py-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Registration opens</span>
          <span>{formatDate(startRegistration)}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Registration closes</span>
          <span>{formatDate(endRegistration)}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Contribution opens (24h)</span>
          <span>{formatDate(saleDate)}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-8 pb-8">
        <div className="text-mono-800">Conditions to participate:</div>
        <div className="flex items-center gap-3">
          <Link href={getProviderUrl()} className="text-blue-500">
            <Fractal />
          </Link>
          <label
            htmlFor="kyc-check"
            className="relative flex capitalize text-blue-500"
          >
            Get your Citizend Passport (KYC verified)
            <div className="absolute -right-4 -top-2">
              <Tooltip
                text="Please complete this step as soon as possible. KYC verification may take up to 48h to be processed as is required to participate"
                className="-translate-x-3/4 -translate-y-full"
              />
            </div>
          </label>
          <input
            id="kyc-check"
            name="kyc-check"
            type="checkbox"
            className="ml-auto h-5 w-5 rounded border-mono-800 bg-transparent text-blue-500 focus:ring-mono-800"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://twitter.com/citizendxyz"
            className="text-blue-500"
          >
            <Twitter />
          </Link>
          <label htmlFor="twitter-check" className="capitalize text-blue-500">
            Follow Citizend on X
          </label>
          <input
            id="twitter-check"
            name="twitter-check"
            type="checkbox"
            className="ml-auto h-5 w-5 rounded border-mono-800 bg-transparent text-blue-500 focus:ring-mono-800"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://discord.com/invite/citizend"
            className="text-blue-500"
          >
            <Discord />
          </Link>
          <label htmlFor="discord-check" className="capitalize text-blue-500">
            Join Citizend on Discord
          </label>
          <input
            id="discord-check"
            name="discord-check"
            type="checkbox"
            className="ml-auto h-5 w-5 rounded border-mono-800 bg-transparent text-blue-500 focus:ring-mono-800"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://twitter.com/citizendxyz/status/1788492675030585402"
            className="text-blue-500"
          >
            <Twitter />
          </Link>
          <label
            htmlFor="announcement-check"
            className="capitalize text-blue-500"
          >
            Like and share this announcement on X
          </label>
          <input
            id="announcement-check"
            name="announcement-check"
            type="checkbox"
            className="ml-auto h-5 w-5 rounded border-mono-800 bg-transparent text-blue-500 focus:ring-mono-800"
          />
        </div>
        <p className="pt-10 text-mono-800">
          Citizens, residents (tax holders or otherwise) or Green Card holders
          of the United States of America, and citizens or residents of BVI,
          Cayman Islands, North Korea, Iran, Russia, Venezuela, and Canada are
          not eligible to participate in citizend’s Community Sale.
        </p>
      </div>
      <ApplyButton error={error} isLoading={false} />
    </div>
  );
};
