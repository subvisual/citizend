/**
 * Module dependencies.
 */

import { Card } from 'src/components/core/card';
import { Separator } from 'src/components/core/separator';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  myContribution: string;
  contributions: string;
  price: string;
  raised: string;
  vestingStart: string;
};

/**
 * `StyledCard` styled component.
 */

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${media.min.md`
    flex-direction: row;
  `}
`;

/**
 * `Label` styled component.
 */

const Label = styled(Text).attrs({
  as: 'p',
  bold: true,
  uppercase: true,
  variant: 'label'
})`
  margin-bottom: 0.25rem;

  ${media.min.md`
    margin-bottom: 1.75rem;
  `}
`;

/**
 * `StyledSeparator` styled component.
 */

const StyledSeparator = styled(Separator)`
  margin-bottom: 1.5rem;

  ${media.min.md`
    display: none;
  `}
`;

/**
 * `Value` styled component.
 */

const Value = styled(Text).attrs({ as: 'p' })`
  ${media.max.md`
    margin-bottom: 1.75rem;
  `}
`;

/**
 * Export `ProjectInfoCard` component.
 */

export function ProjectInfoCard(props: Props) {
  const { contributions, myContribution, price, raised, vestingStart } = props;

  return (
    <StyledCard>
      <div>
        <Label>{'Project'}</Label>

        <Text as={'p'} variant={'body2'}>
          {'Citizend token sale'}
        </Text>

        {vestingStart && (
          <>
            <Text noMargin variant={'small'}>
              {'Vesting starting at:'}
            </Text>

            <Value noMargin variant={'small'}>
              {vestingStart}
            </Value>
          </>
        )}

        <StyledSeparator />
      </div>

      <div>
        <Label>{'Contributions'}</Label>
        <Value>{contributions}</Value>
      </div>

      <div>
        <Label>{'Raised'}</Label>
        <Value>{raised}</Value>
      </div>

      <div>
        <Label>{'Price'}</Label>
        <Value>{price}</Value>
      </div>

      <div>
        <Label>{'My Contribution'}</Label>
        <Value>{myContribution}</Value>
      </div>
    </StyledCard>
  );
}
