import { DataFields } from './contribution/DataFields';

export const TokenMetrics = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
        <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
          Token Metrics
        </h4>
        <DataFields />
      </div>
    </div>
  );
};
