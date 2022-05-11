/**
 * Module dependencies.
 */

import { Text } from 'src/components/core/text';
import React from 'react';
import styled from 'styled-components';

/**
 * `Section` styled component.
 */

const Section = styled.section`
  max-width: 100%;
  overflow: hidden;
  position: relative;
`;

/**
 * `Container` styled component.
 */

const Container = styled.section`
  margin: 0 auto;
  max-width: 640px;
  padding: 3rem 2rem 0;
  text-align: center;
`;

/**
 * `Title` styled component.
 */

const Title = styled(Text).attrs({ variant: 'lead' })`
  display: block;
  margin-bottom: 3rem;
`;

/**
 * `Label` styled component.
 */

const Label = styled(Text).attrs({ variant: 'body' })`
  margin: 0;
  padding-top: 0.75rem;
`;

/**
 * Export `UnknownDate` component.
 */

export function UnknownDate() {
  return (
    <Section>
      <Container>
        <Title>
          {'Vesting will begin after the public sale has concluded'}
        </Title>

        <Label>{'Keep checking this page for updates.'}</Label>
      </Container>
    </Section>
  );
}
