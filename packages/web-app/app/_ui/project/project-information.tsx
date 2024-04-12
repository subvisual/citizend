import Link from 'next/link';
import { Twitter } from '../components/svg/Twitter';
import { Fractal } from '../components/svg/Fractal';

type TProjectInformationProps = {
  saleDate: bigint;
  startRegistration: bigint;
  endRegistration: bigint;
  applied: boolean;
};

const formatDate = (date: bigint) => {
  try {
    const numberDate = parseInt(date.toString());

    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    }).format(numberDate);
  } catch (error) {
    console.log(error);
    return '';
  }
};

const formatDateRange = (start: bigint, end: bigint) => {
  try {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    });

    const startDate = parseInt(start.toString());
    const endDate = parseInt(end.toString());

    const result = dateFormatter.formatRange(startDate, endDate);

    return result.replace('–', 'to');
  } catch (error) {
    console.error(error);
    return '';
  }
};

export const ProjectInformation = ({
  saleDate,
  startRegistration,
  endRegistration,
  applied,
}: TProjectInformationProps) => {
  const sale = formatDate(saleDate);
  const registrations = formatDateRange(startRegistration, endRegistration);

  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Project Information
      </h4>
      <div className="flex flex-col gap-4 px-8 py-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Citizend Community Sale</span>
          <span>{sale}</span>
        </div>
        {!applied ? (
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <span className="text-mono-800">Registrations</span>
            <span className="">{registrations}</span>
          </div>
        ) : null}
      </div>
      {!applied ? (
        <div className="flex flex-col gap-4 px-8 pb-8">
          <div className="text-mono-800">Condition to participate:</div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-blue-500">
              <Fractal />
            </Link>
            ID Plus verification by Fractal ID
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-blue-500">
              <Twitter />
            </Link>
            Follow Citizend on X
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-blue-500">
              <Twitter />
            </Link>
            Like and quote this post
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-blue-500">
              <Twitter />
            </Link>
            Follow Citizend TG group
          </div>
          <p className="pt-10 text-mono-800">
            Please keep in mind that for compliance results, residents of the
            following countries are not allowed to participate, so even if your
            KYC status is approved, you may not be able to take part in the
            sale.
          </p>
        </div>
      ) : null}
    </div>
  );
};
