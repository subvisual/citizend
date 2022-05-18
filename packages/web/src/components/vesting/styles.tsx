/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Card } from 'src/components/core/card';
import { Text } from 'src/components/core/text';
import React from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  title: string;
  value: string;
  isConfirming: boolean;
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
 * `dots` keyframes.
 */

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }

  40% {
    color: white;
    text-shadow: .25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0);
  }

  60% {
    text-shadow: .25em 0 0 white, .5em 0 0 rgba(0,0,0,0);
  }

  80%, 100% {
    text-shadow: .25em 0 0 white, .5em 0 0 white;
  }
`;

/**
 * `Dots` styled component.
 */

const Dots = styled.span`
  &::after {
    animation: ${dots} 1.5s steps(5, end) infinite;
    content: ' .';
  }
`;

/**
 * Export `ClaimActionCard` component.
 */

export function ClaimActionCard(props: Props) {
  const { isConfirming, isDisabled, onClick, title, value } = props;

  return (
    <StyledCard>
      <div>
        <Title>{title}</Title>

        <Text noMargin>{value}</Text>
      </div>

      <Button disabled={isDisabled} onClick={isDisabled ? undefined : onClick}>
        {!isConfirming ? 'Claim' : <Dots>{'Processing'}</Dots>}
      </Button>
    </StyledCard>
  );
}
