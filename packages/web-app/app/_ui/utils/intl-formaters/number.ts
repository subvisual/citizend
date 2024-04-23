export const number = (value: number | bigint) =>
  new Intl.NumberFormat('default').format(value);
