/**
 * Export colors palette.
 */

import { FlattenSimpleInterpolation, css } from 'styled-components';

/**
 * Export `breakpoints`.
 */

export const breakpoints = {
  lg: 1200,
  md: 992,
  ms: 768,
  sm: 576,
  xl: 1440,
  xs: 480,
  xxl: 1920,
  xxs: 320
};

/**
 * `Breakpoints` type.
 */

type Breakpoints = keyof typeof breakpoints;

/**
 * `CssArgs` type.
 */

type CssArgs = TemplateStringsArray | [];

/**
 * `Media` type.
 */

type Media = Record<
  'min' | 'max',
  Record<
    Breakpoints,
    (
      styles: TemplateStringsArray,
      ...interpolations: CssArgs
    ) => FlattenSimpleInterpolation
  >
>;

/**
 * Render query.
 */

function renderQuery(orientation: string, value: number) {
  return (styles: TemplateStringsArray, ...interpolations: CssArgs) => css`
    @media (${orientation}: ${value}px) {
      ${css(styles, ...interpolations)}
    }
  `;
}

/**
 * Media util.
 */

export const media = Object.entries(breakpoints).reduce(
  (queries, [key, value]: [Breakpoints, number]) => ({
    max: {
      ...queries.max,
      [key]: renderQuery('max-width', value - 1)
    },
    min: {
      ...queries.min,
      [key]: renderQuery('min-width', value)
    }
  }),
  {
    max: {},
    min: {}
  }
) as Media;
