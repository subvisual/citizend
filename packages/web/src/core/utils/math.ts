/**
 * Module dependencies.
 */

import BigNumber from 'bignumber.js';

/**
 * Export `NumericValue` type.
 */

export type NumericValue = number | string | BigNumber;

/**
 * Export `roundDown`.
 */

export function roundDown(value: NumericValue, decimalPlaces?: number): string {
  return new BigNumber(value).toFixed(
    decimalPlaces ?? 2,
    BigNumber.ROUND_FLOOR
  );
}

/**
 * Export `roundUp`.
 */

export function roundUp(
  value: NumericValue | undefined,
  decimalPlaces?: number
): string {
  if (!value) {
    return '0';
  }

  return new BigNumber(value).toFixed(decimalPlaces ?? 2, BigNumber.ROUND_CEIL);
}
