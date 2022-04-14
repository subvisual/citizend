/**
 * Module dependencies.
 */

import { Card } from 'src/components/core/card';
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
  margin-top: 3rem;

  ${media.min.md`
    flex-direction: row;
    margin-top: 8rem;
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
 * `Value` styled component.
 */

const Value = styled(Text).attrs({ as: 'p' })`
  ${media.max.md`
    margin-bottom: 1.75rem;
  `}
`;

/**
 * `Separator` styled component.
 */

const Separator = styled.div`
  background-color: var(--color-white);
  height: 1px;
  margin-bottom: 1.5rem;
  opacity: 0.3;

  ${media.min.md`
    display: none;
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

        <Separator />
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
