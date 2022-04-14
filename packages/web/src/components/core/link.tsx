/**
 * Module dependencies.
 */

import { textStyles } from 'src/components/core/text';
import styled from 'styled-components';

/**
 * Export `Link` styled component.
 */

export const Link = styled.a.attrs({
  rel: 'noopener',
  target: '_blank'
})`
  ${textStyles.body}

  font-weight: bold;
  text-decoration: underline;
  transition: color var(--transition-default);

  :focus,
  :hover {
    color: var(--color-blue200);
  }
`;
