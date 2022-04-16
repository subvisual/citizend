/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Card } from 'src/components/core/card';
import { Text } from 'src/components/core/text';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  title: string;
  value: string;
  isDisabled?: boolean;
  onClick: () => void;
};

/**
 * Export `Title` styled component.
 */

export const Title = styled(Text).attrs({
  as: 'p',
  bold: true,
  uppercase: true,
  variant: 'label'
})`
  margin-bottom: 1.25rem;
`;

/**
 * Export `StyledCard` styled component.
 */

export const StyledCard = styled(Card)`
  display: grid;
  grid-gap: 2.25rem;
`;

/**
 * Export `ClaimActionCard` component.
 */

export function ClaimActionCard(props: Props) {
  const { isDisabled, onClick, title, value } = props;

  return (
    <StyledCard>
      <div>
        <Title>{title}</Title>

        <Text noMargin>{value}</Text>
      </div>

      <Button disabled={isDisabled} onClick={isDisabled ? undefined : onClick}>
        {'Claim'}
      </Button>
    </StyledCard>
  );
}
