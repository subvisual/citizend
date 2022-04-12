/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Modal } from 'src/components/core/modal';
import { Svg } from 'src/components/core/svg';
import { TermsAndPrivacyLink } from './terms-and-privacy-link';
import { Text } from 'src/components/core/text';
import React from 'react';
import metamaskSvg from 'src/assets/svgs/metamask.svg';
import styled from 'styled-components';
import walletconnectSvg from 'src/assets/svgs/walletconnect.svg';

/**
 * `Props` type.
 */

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  onConnect: (provider: string) => void;
};

/**
 * `ConnectButton` styled component.
 */

const ConnectButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  border-radius: 0.5rem;
  color: inherit;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding: 1rem;
  transition: background-color var(--transition-default);

  & + & {
    margin-bottom: 5rem;
  }

  :focus,
  :hover {
    background-color: var(--color-blue400);
    outline: none;
  }
`;

/**
 * `Title` styled component.
 */

const Title = styled(Text).attrs({
  as: 'p',
  variant: 'lead'
})`
  margin-bottom: 5rem;
`;

/**
 * Export `ModalWalletConnect` component.
 */

export function ModalWalletConnect(props: Props) {
  const { isOpen, onConnect, onRequestClose } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Title>{'Connect your wallet'}</Title>

      <Container centered>
        <ConnectButton
          aria-label={'Connect wallet with Metamask'}
          onClick={() => {
            onConnect('metamask');
          }}
        >
          <Svg icon={metamaskSvg} size={'162px'} />
        </ConnectButton>

        <ConnectButton
          aria-label={'Connect wallet with WalletConnect'}
          onClick={() => {
            onConnect('walletconnect');
          }}
        >
          <Svg icon={walletconnectSvg} size={'182px'} />
        </ConnectButton>

        <TermsAndPrivacyLink />
      </Container>
    </Modal>
  );
}
