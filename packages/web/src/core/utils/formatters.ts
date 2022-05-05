/* eslint no-irregular-whitespace: ["error", { "skipRegExps": true }] */

/**
 * Module dependencies.
 */

import { NumericValue, roundDown, roundUp } from './math';
import BigNumber from 'bignumber.js';
import dayjs from 'src/core/utils/dayjs';
import dropWhile from 'lodash/dropWhile';
import size from 'lodash/size';
import takeWhile from 'lodash/takeWhile';

/**
 * `locale` constant.
 */

const locale = 'en-US';

/**
 * Maximum decimal places.
 */

const maximumDecimalPlaces = 8;

/**
 * `NullableNumber` type.
 */

type NullableNumber = NumericValue | null | undefined;

/**
 * `NumberOptions` type.
 */

type NumberOptions = Intl.NumberFormatOptions & {
  currency?: string;
  decimalPlacesToDisplay?: number | null;
  skipTrailingZeros?: boolean | null;
  toRoundUp?: boolean;
};

/**
 * Export `CurrencyOptions` type.
 */

export type CurrencyOptions = NumberOptions & {
  symbol?: string | null;
  toRoundUp?: boolean;
};

/**
 * Export `DateTimeOptions` type.
 */

export type DateTimeOptions = {
  hideDate?: boolean;
  hideHour?: boolean;
};

/**
 * Currency formatter.
 */

function currencyFormatter(options: NumberOptions): Intl.NumberFormat {
  const { decimalPlacesToDisplay, skipTrailingZeros, ...rest } = options;

  const maximumFractionDigits = Math.min(
    decimalPlacesToDisplay ?? 2,
    maximumDecimalPlaces
  );

  return new Intl.NumberFormat(locale, {
    ...rest,
    maximumFractionDigits,
    minimumFractionDigits: skipTrailingZeros ? undefined : maximumFractionDigits
  });
}

/**
 * Convert number to string.
 */

function convertNumberToString(value: NullableNumber): string {
  const parsedValue = new BigNumber(value ?? NaN);

  return parsedValue.isNaN() ? '0' : parsedValue.toString(10);
}

/**
 * Export `formatNumber`.
 */

export function formatNumber(
  value: string,
  options: NumberOptions
): Intl.NumberFormatPart[] {
  const formatter = currencyFormatter(options);
  const round = options.toRoundUp ? roundUp : roundDown;
  const [integer, decimal] = value.split('.');
  const integerParts = formatter.formatToParts(parseFloat(integer));
  const hideDecimals = !decimal && options.skipTrailingZeros;
  const decimalParts = formatter.formatToParts(
    parseFloat(
      round(`0.${decimal ?? '0'}`, options.decimalPlacesToDisplay ?? 2)
    )
  );

  return [
    ...takeWhile<Intl.NumberFormatPart>(
      integerParts,
      ({ type }) => type !== 'decimal'
    ),
    ...dropWhile<Intl.NumberFormatPart>(
      !hideDecimals ? decimalParts : [],
      ({ type }) => type !== 'decimal'
    )
  ];
}

/**
 * Export `formatCurrency`.
 */

export function formatCurrency(
  rawValue: NullableNumber,
  options: CurrencyOptions
): string {
  const {
    currency,
    decimalPlacesToDisplay,
    skipTrailingZeros,
    symbol,
    toRoundUp
  } = options;

  const value = convertNumberToString(rawValue ?? '0');

  try {
    const result = formatNumber(value, {
      currency,
      decimalPlacesToDisplay,
      skipTrailingZeros,
      style: currency ? 'currency' : 'decimal',
      toRoundUp
    });

    return result.map(({ value }) => value).join('');
  } catch (error: any) {
    const formatter = new Intl.NumberFormat(locale);
    const formattedValue = formatter.format(Number(value));
    const currencySymbol = symbol ?? currency;
    const whitespace = size(currencySymbol) > 1 ? ' ' : '';
    const fallback = !currencySymbol
      ? formattedValue
      : `${currencySymbol}${whitespace}${formattedValue}`;

    if (!error.toString().includes('currency code')) {
      return fallback;
    }

    try {
      // Unsupported currencies are treated as BTC, then the symbol is swapped.
      const formattedParts = formatNumber(value, {
        currency: 'BTC',
        decimalPlacesToDisplay,
        skipTrailingZeros,
        style: 'currency'
      });

      return formattedParts
        .map(({ value }) => value)
        .join('')
        .replace(/^BTC */, `${currencySymbol}${whitespace}`)
        .replace(/^-BTC */, `${currencySymbol}${whitespace}`)
        .replace(/ *BTC$/, `${whitespace}${currencySymbol}`);
    } catch (error) {
      return fallback;
    }
  }
}

/**
 * Export `formatCompactNumber`.
 */

export function formatCompactNumber(
  value: NullableNumber,
  options?: CurrencyOptions
): string {
  const { currency, decimalPlacesToDisplay = 1, symbol } = options ?? {};
  const numericValue = convertNumberToString(value ?? '0');
  const [integer, fraction = ''] = numericValue.split('.');
  const compactSignificantDigits = integer.length % 3 || 3;
  const decimalPlaces = decimalPlacesToDisplay ?? 0;
  const maximumSignificantDigits = compactSignificantDigits + decimalPlaces;
  const digitsToHide =
    numericValue.replace('.', '').length -
    maximumSignificantDigits -
    fraction.length;
  const truncatedValue =
    Math.trunc(Number(numericValue) / 10 ** digitsToHide) * 10 ** digitsToHide;

  try {
    return new Intl.NumberFormat(locale, {
      compactDisplay: 'short',
      currency,
      maximumSignificantDigits,
      notation: 'compact',
      style: currency ? 'currency' : undefined
    }).format(truncatedValue);
  } catch (error) {
    const whitespace = size(symbol ?? currency) > 1 ? ' ' : '';

    return new Intl.NumberFormat(locale, {
      compactDisplay: 'short',
      currency: 'BTC',
      maximumSignificantDigits,
      notation: 'compact',
      style: currency ? 'currency' : undefined
    })
      .format(truncatedValue)
      .replace(/^BTC */, `${symbol ?? currency}${whitespace}`)
      .replace(/^-BTC */, `${symbol ?? currency}${whitespace}`)
      .replace(/ *BTC$/, `${whitespace}${symbol ?? currency}`);
  }
}

/**
 * Export `formatDate`.
 */

export function formatDate(date: number, options?: { hideHours: boolean }) {
  if (!date) {
    return '';
  }

  return dayjs
    .unix(date)
    .utc()
    .format(options?.hideHours ? 'DD/MM/YYYY' : 'DD/MM/YYYY hh:mm Z');
}
