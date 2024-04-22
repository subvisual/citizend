const rangeFormatter = new Intl.NumberFormat('default', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
  maximumSignificantDigits: 1,
});

export const usdRange = (min: bigint, max: bigint) =>
  rangeFormatter.formatRange(min, max);
