/**
 * Module dependencies.
 */

import { StyledCard, Title } from './styles';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  nextRelease: string;
  tokens: string;
  totalClaimed: string;
};

/**
 * `Grid` styled component.
 */

const Grid = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr;

  ${media.min.md`
    grid-template-columns: 1fr 1fr;
  `}
`;

/**
 * `FlexRow` styled component.
 */

const FlexRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

/**
 * Export `InfoCard` component.
 */

export function InfoCard(props: Props) {
  const { nextRelease, tokens, totalClaimed } = props;

  return (
    <StyledCard>
      <div>
        <Title>{'My tokens'}</Title>

        <Text as={'p'} noMargin variant={'body2'}>
          {tokens}
        </Text>
      </div>

      <Grid>
        <FlexRow>
          <Text variant={'label'}>{'Total Claimed'}</Text>
          <Text noMargin>{totalClaimed}</Text>
        </FlexRow>

        <FlexRow>
          <Text variant={'label'}>{'Next Realease'}</Text>
          <Text noMargin>{nextRelease}</Text>
        </FlexRow>
      </Grid>
    </StyledCard>
  );
}
