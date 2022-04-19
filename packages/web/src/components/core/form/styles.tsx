/**
 * Module dependencies.
 */

import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { ifProp } from 'styled-tools';
import errorInfoSvg from 'src/assets/svgs/error-info.svg';
import styled from 'styled-components';

/**
 * Export `FormField` styled component.
 */

export const FormField = styled.div<{ disabled: boolean }>`
  align-items: center;
  margin-bottom: 3rem;

  & + &:not(:last-child) {
    margin-bottom: 0;
  }

  ${ifProp(
    'disabled',
    `
      opacity: 0.5;
      pointer-events: none;
    `
  )}
`;

/**
 * Export `Field` styled component.
 */

export const Field = styled.div<{ hasError: boolean }>`
  display: grid;
  grid-template-areas: 'label label' 'input suffix';
  grid-template-columns: auto min-content;
  position: relative;

  &::after {
    background-color: var(--color-${ifProp('hasError', 'red500', 'white')});
    content: '';
    height: 2px;
    inset: auto 0 0 0;
    position: absolute;
    transition: var(--transition-default);
    transition-property: box-shadow, color, height;
    width: 100%;
  }

  &:focus-within::after {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    height: 3px;
  }
`;

/**
 * Export `Label` styled component.
 */

export const Label = styled(Text).attrs({
  as: 'p',
  bold: true,
  uppercase: true,
  variant: 'label'
})`
  grid-area: label;
`;

/**
 * `ErrorInfoSvg` styled component.
 */

const ErrorInfoSvg = styled(Svg).attrs({
  icon: errorInfoSvg,
  size: '1.25rem'
})`
  margin-right: 0.5rem;
`;

/**
 * Export `ErrorLabel` styled component.
 */

export const ErrorLabel = styled(Text).attrs({
  bold: true,
  noMargin: true,
  variant: 'small'
})`
  align-items: center;
  color: var(--color-white);
  display: block;
  display: flex;
  grid-area: error;
  padding-top: 0.5rem;
`;

/**
 * Export `Error` component.
 */

export function Error({ children }: { children: string }) {
  if (!children) {
    return null;
  }

  return (
    <ErrorLabel>
      <ErrorInfoSvg />

      {children}
    </ErrorLabel>
  );
}
