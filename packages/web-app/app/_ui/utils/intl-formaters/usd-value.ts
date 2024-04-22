const valueFormatter = new Intl.NumberFormat('default', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
});

export const usdValue = (value: bigint) => valueFormatter.format(value);
