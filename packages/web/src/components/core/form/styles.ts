/**
 * Module dependencies.
 */

import { Text } from 'src/components/core/text';
import { ifProp } from 'styled-tools';
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
 * Export `Error` styled component.
 */

export const Error = styled(Text).attrs({
  bold: true,
  noMargin: true,
  variant: 'small'
})`
  color: var(--color-red500);
  display: block;
  grid-area: error;
  padding-top: 0.5rem;
  text-transform: uppercase;
`;

/**
 * Export `Field` styled component.
 */

export const Field = styled.div`
  border-bottom: 1px solid var(--color-white);
  display: grid;
  grid-template-areas: 'label label' 'input suffix';
  grid-template-columns: auto min-content;
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
