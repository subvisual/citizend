/**
 * Module dependencies.
 */

import { ReactNode } from 'react';
import { ifProp, switchProp } from 'styled-tools';
import isEmpty from 'lodash/isEmpty';
import styled, { css } from 'styled-components';

/**
 * `FontProperties` type.
 */

type FontProperties = {
  fontFamily: string;
  fontSize: string | number;
  fontWeight: string | number;
  letterSpacing?: string;
  lineHeight: string | number;
};

/**
 * Check if value is truly and return result, otherwise returns empty string.
 */

const ifValue = (value, result) => (value && result) || '';

/**
 * `createFontStyle` util.
 */

const createFontStyle = (properties: FontProperties) => {
  if (isEmpty(properties) || !properties) {
    throw new Error(`🚨 No font properties provided.`);
  }

  const { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } =
    properties;

  return css`
    ${ifValue(letterSpacing, `letter-spacing: ${letterSpacing};`)}
    ${ifValue(fontWeight, `font-weight: ${fontWeight};`)}
    ${ifValue(fontSize, `font-size: ${fontSize};`)}
    ${ifValue(lineHeight, `line-height: ${lineHeight};`)}
    ${ifValue(fontFamily, `font-family: var(${fontFamily});`)}
    margin: 0 0 1.5rem;
    padding: 0;
  `;
};

/**
 * `body2` styles.
 */

const body2Styles = {
  fontFamily: '--montserrat-font-family',
  fontSize: '1.5rem',
  fontWeight: 400,
  lineHeight: 1.33
} as const;

/**
 * `body` styles.
 */

const bodyStyles = {
  fontFamily: '--montserrat-font-family',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.25
} as const;

/**
 * `title` styles.
 */

const titleStyles = {
  fontFamily: '--druke-wide-font-family',
  fontSize: 'clamp(1.5rem, 0.125rem + 8.333vw, 5rem)',
  fontWeight: 500,
  letterSpacing: '2.2px',
  lineHeight: 1.2
} as const;

/**
 * `lead` styles.
 */

const leadStyles = {
  fontFamily: '--montserrat-font-family',
  fontSize: 'clamp(1.2rem, -0.5rem + 8.333vw, 2.5rem)',
  fontWeight: 700,
  lineHeight: 1.2
} as const;

/**
 * `labelStyles` styles.
 */

const labelStyles = {
  fontFamily: '--druke-wide-font-family',
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: '1rem'
} as const;

/**
 * `smallStyles` styles.
 */

const smallStyles = {
  fontFamily: '--montserrat-font-family',
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: '1rem'
} as const;

/**
 * Variants themes.
 */

export const variantsThemes = {
  body: createFontStyle(bodyStyles),
  body2: createFontStyle(body2Styles),
  label: createFontStyle(labelStyles),
  lead: createFontStyle(leadStyles),
  small: createFontStyle(smallStyles),
  title: createFontStyle(titleStyles)
} as const;

/**
 * `Props` type.
 */

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'strong';
  bold?: boolean;
  children: ReactNode;
  noMargin?: boolean;
  uppercase?: boolean;
  variant?: keyof typeof variantsThemes;
};

/**
 * Export `Text` styled component.
 */

export const Text = styled.span<Props>`
  ${switchProp('variant', variantsThemes, variantsThemes.body)}
  ${ifProp('bold', 'font-weight: 700;')}
  ${ifProp('noMargin', 'margin: 0;')}
  ${ifProp('uppercase', 'text-transform: uppercase;')}
`;
