/**
 * Export `colors`.
 */

export const colors = {
  black: '#000000',
  blue200: '#769fca',
  blue400: '#546382',
  blue500: '#42526c',
  blue600: '#37445a',
  blue650: '#334054',
  blue700: '#323e52',
  green500: '#728e99',
  grey500: '#a5a4a9',
  red500: '#ca7676',
  white: '#ffffff'
};

/**
 * Export `ColorName` type.
 */

export type ColorName = keyof typeof colors;
