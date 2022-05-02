/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Container } from 'src/components/core/container';
import { Modal } from 'src/components/core/modal';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  chainName: string;
  isOpen: boolean;
  onChangeNetwork: any;
};

/**
 * `Title` styled component.
 */

const Title = styled(Text).attrs({
  as: 'p',
  variant: 'lead'
})`
  margin-bottom: 3rem;
`;

/**
 * `Lead` styled component.
 */

const Lead = styled(Text)`
  margin: 0;

  ${media.min.sm`
    padding: 0 3rem;
  `}
`;

/**
 * `Content` styled component.
 */

const Content = styled(Container)`
  ${media.max.sm`
    padding: 0.5rem;
  `}
`;

/**
 * `FlexCenter` styled component.
 */

const FlexCenter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 5rem 0;
`;

/**
 * Export `WrongChainModal` component.
 */

export function WrongChainModal(props: Props) {
  const { chainName, isOpen, onChangeNetwork } = props;

  return (
    <Modal isOpen={isOpen}>
      <Title>{'Wrong network selected'}</Title>

      <Content>
        <Lead>
          {`The currently selected network cannot interact with our services. Please switch to ${chainName} to continue.`}
        </Lead>

        <FlexCenter>
          <Button onClick={onChangeNetwork}>{`Switch to ${chainName}`}</Button>
        </FlexCenter>
      </Content>
    </Modal>
  );
}
