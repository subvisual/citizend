/**
 * Module dependencies.
 */

import { Text } from 'src/components/core/text';
import styled from 'styled-components';

/**
 * Export `ModalTitle` styled component.
 */

export const ModalTitle = styled(Text).attrs({
  as: 'p',
  variant: 'lead'
})`
  margin-bottom: 5rem;
`;
