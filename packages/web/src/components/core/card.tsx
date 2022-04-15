/**
 * Module dependencies.
 */

import { media } from 'src/styles/breakpoints';
import styled from 'styled-components';

/**
 * `Card` styled component.
 */

export const Card = styled.div`
  backdrop-filter: blur(20px);
  background-color: rgba(78, 94, 124, 0.83);
  padding: var(--container-padding);

  ${media.min.sm`
    padding: 2.5rem;
  `}
`;
