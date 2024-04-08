type TTokenMetricsProps = {
  targetRaiseRange: string;
  totalSupply: string;
  minPricePerToken: string;
  maxPricePerToken: string;
  totalSupplyDistributed: string;
};

export const TokenMetrics = ({
  targetRaiseRange,
  totalSupply,
  minPricePerToken,
  maxPricePerToken,
  totalSupplyDistributed,
}: TTokenMetricsProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-mono-50 text-mono-950">
      <h4 className="border-b border-mono-200 px-8 py-6 font-medium uppercase">
        Token Metrics
      </h4>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Target Raise:</span>
          <span className="md:text-end">{targetRaiseRange}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Min. price per token:</span>
          <span className="md:text-end">{minPricePerToken}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Max price per token:</span>
          <span className="md:text-end">{maxPricePerToken}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">Total supply:</span>
          <span className="md:text-end">{totalSupply}</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <span className="text-mono-800">% total supply distributed:</span>
          <span className="md:text-end">{totalSupplyDistributed}</span>
        </div>
      </div>
    </div>
  );
};
