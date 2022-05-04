/**
 * Export `currencyConfig`.
 */

export const currencyConfig = {
  aUsd: {
    currency: 'aUSD',
    decimalPlaces: 12,
    decimalPlacesToDisplay: 6,
    skipTrailingZeros: true,
    symbol: undefined
  },
  ctnd: {
    currency: 'CTND',
    decimalPlaces: 18,
    decimalPlacesToDisplay: 6,
    skipTrailingZeros: true,
    symbol: undefined
  },
  usd: {
    currency: 'USD',
    decimalPlaces: 6,
    decimalPlacesToDisplay: 2,
    skipTrailingZeros: false,
    symbol: '$'
  }
} as const;
