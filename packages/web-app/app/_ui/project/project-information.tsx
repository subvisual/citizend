import { formatDate } from '../utils/intl-formaters/date';

export const ProjectInformation = ({ saleDate }: { saleDate: bigint }) => (
  <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
    <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
      Project Information
    </h4>
    <div className="flex flex-col gap-4 px-8 py-8">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <span className="text-mono-800">Contribution opens (24h)</span>
        <span>{formatDate(saleDate)}</span>
      </div>
    </div>
  </div>
);
