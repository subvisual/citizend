const valueFormatter = new Intl.NumberFormat('default', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
});

const getValue = (value: bigint | number | string): number | bigint => {
  if (typeof value === 'string') {
    return parseFloat(value);
  }
  return value;
};

export const usdValue = (initialValue: bigint | number | string) => {
  const value = getValue(initialValue);

  return valueFormatter.format(value);
};
