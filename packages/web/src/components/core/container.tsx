/**
 * Module dependencies.
 */

import { ifProp } from 'styled-tools';
import styled from 'styled-components';

/**
 * Export `Container` styled component.
 */

export const Container = styled.div<{ centered?: boolean }>`
  padding: 0 var(--container-padding);

  ${ifProp(
    'centered',
    `
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  )}
`;
