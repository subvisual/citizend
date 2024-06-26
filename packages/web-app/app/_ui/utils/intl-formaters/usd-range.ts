const rangeFormatter = new Intl.NumberFormat('default', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
  maximumSignificantDigits: 2,
});

export const usdRange = (min: bigint | number, max: bigint | number) =>
  rangeFormatter.formatRange(min, max);
