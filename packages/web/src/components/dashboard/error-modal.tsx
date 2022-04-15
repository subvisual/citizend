/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Modal } from 'src/components/core/modal';
import { Text } from 'src/components/core/text';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  lead: string;
  title: string;
  onRequestClose: () => void;
  isOpen: boolean;
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
 * `Content` styled component.
 */

const Content = styled(Container)`
  display: grid;
  grid-gap: 2rem;
`;

/**
 * Export `ErrorModal` component.
 */

export function ErrorModal(props: Props) {
  const { lead, title, ...modalProps } = props;

  return (
    <Modal {...modalProps}>
      <Title>{title}</Title>

      <Content>
        <Text noMargin>{lead}</Text>
      </Content>
    </Modal>
  );
}
