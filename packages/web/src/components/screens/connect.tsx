/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Container } from 'src/components/core/container';
import { Modal } from 'src/components/core/modal';
import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { useAppStatus } from 'src/hooks/use-app-status';
import React, { useState } from 'react';
import metamaskSvg from 'src/assets/svgs/metamask.svg';
import styled from 'styled-components';
import useWalletConnect from 'src/hooks/use-wallet-connect';
import walletconnectSvg from 'src/assets/svgs/walletconnect.svg';

/**
 * `ConnectContent` styled component.
 */

const ConnectContent = styled.div`
  display: grid;
  grid-gap: 3rem;
`;

/**
 * `ConnectButton` styled component.
 */

const ConnectButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  transition: color var(--transition-default);

  :focus,
  :hover {
    color: var(--color-blue200);
  }
`;

/**
 * `TermsAndPrivacyLink` component.
 */

function TermsAndPrivacyLink() {
  return (
    <Text as={'p'} noMargin style={{ padding: '0 3rem' }}>
      {
        'By connecting my wallet, I confirm I have read and accepted the Terms of Service and Privacy Policy'
      }
    </Text>
  );
}

/**
 * Export `ConnectScreen` component.
 */

export function ConnectScreen() {
  const { connectStatus, onConnect } = useWalletConnect();
  const currentAppState = useAppStatus();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Text as={'h1'} variant={'title'}>
        {'Discovery DAO'}
      </Text>

      <div style={{ marginBottom: '5rem' }}>
        <Text bold>{'Status: '}</Text>
        <Text>{currentAppState}</Text>
      </div>

      {currentAppState !== 'SOON' && (
        <Button
          onClick={() => {
            setIsOpen(open => !open);
          }}
        >
          {'Connect'}
        </Button>
      )}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <ConnectContent>
          <Text as={'p'} variant={'lead'}>
            {'Connect your wallet'}
          </Text>

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
        </ConnectContent>
      </Modal>

      <Modal isOpen={connectStatus === 'loading'}>
        <Text as={'p'} variant={'lead'}>
          {'Sign the message in your wallet to continue'}
        </Text>

        <Text as={'p'}>
          {
            "Citizend uses this signature to verify that you're the owner of this Ethereum address."
          }
        </Text>

        <TermsAndPrivacyLink />
      </Modal>
    </Container>
  );
}
