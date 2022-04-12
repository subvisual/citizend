/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Loader } from 'src/components/core/loading';
import { Modal } from 'src/components/core/modal';
import { TermsAndPrivacyLink } from './terms-and-privacy-link';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
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
 * Export `ModalConnecting` component.
 */

export function ModalConnecting({ isOpen }: Props) {
  return (
    <Modal isOpen={isOpen}>
      <Title>{'Sign the message in your wallet to continue'}</Title>

      <Content>
        <Lead>
          {
            "Citizend uses this signature to verify that you're the owner of this Ethereum address."
          }
        </Lead>

        <FlexCenter>
          <Loader />
        </FlexCenter>

        <TermsAndPrivacyLink />
      </Content>
    </Modal>
  );
}
