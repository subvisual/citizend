/**
 * Module dependencies.
 */

import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import ReactCountdown, { CountdownProps } from 'react-countdown';
import hexagonSvg from 'src/assets/svgs/hexagon.svg';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = CountdownProps & {
  title: string;
};

/**
 * `Section` styled component.
 */

const Section = styled.section`
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

/**
 * `Grid` styled component.
 */

const Grid = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

/**
 * `Wrapper` styled component.
 */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
`;

/**
 * `SectionTitle` styled component.
 */

const SectionTitle = styled(Text).attrs({ variant: 'lead' })`
  display: block;
  margin-bottom: 3rem;
  text-align: center;
`;

/**
 * `NumericLabel` styled component.
 */

const NumericLabel = styled(Text).attrs({ variant: 'body2' })`
  align-items: center;
  display: flex;
  font-family: var(--druke-wide-font-family);
  height: 5rem;
  justify-content: center;
  margin: 0;
  width: 5rem;

  ${media.max.sm`
    height: 4rem;
    width: 4rem;
  `}

  & > span:last-child {
    position: relative;
    top: 1px;
  }
`;

/**
 * `Label` styled component.
 */

const Label = styled(Text).attrs({ uppercase: true, variant: 'small' })`
  font-family: var(--druke-wide-font-family);
  margin: 0;
  padding-top: 0.75rem;

  ${media.max.sm`
    font-size: 0.5rem;
    padding-top: 0.25rem;
  `}
`;

/**
 * `Hexagon` styled component.
 */

const Hexagon = styled(Svg).attrs({
  icon: hexagonSvg,
  size: '5rem'
})`
  position: absolute;

  ${media.max.sm`
    max-width: 4rem;
  `}
`;

/**
 * Export `Countdown` component.
 */

export function Countdown(props: Props) {
  const { date, title } = props;

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>

      <ReactCountdown
        date={date}
        renderer={({ formatted }) => (
          <Grid>
            {Object.entries(formatted).map(([key, value]) => (
              <Wrapper key={key + value}>
                <NumericLabel>
                  <Hexagon />

                  <span>{value}</span>
                </NumericLabel>

                <Label>{key}</Label>
              </Wrapper>
            ))}
          </Grid>
        )}
      />
    </Section>
  );
}
