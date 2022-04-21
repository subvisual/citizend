/**
 * Module dependencies.
 */

import { AwaitingSignatureModal } from '../signature/awaiting-signature-modal';
import { Button } from 'src/components/core/button';
import { Container } from 'src/components/core/container';
import { HexagonShape } from 'src/components/connect/hexagon-shape';
import { ModalWalletConnect } from 'src/components/connect/modal-wallet-connect';
import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { Web3Provider } from '@ethersproject/providers';
import { media } from 'src/styles/breakpoints';
import { toast } from 'react-toastify';
import { useAppStatus } from 'src/hooks/use-app-status';
import { useAsync } from 'react-async';
import { useSession } from 'src/context/session';
import { useWalletConnect } from 'src/hooks/use-wallet-connect';
import { useWeb3React } from '@web3-react/core';
import { verifyAccountOwnership } from 'src/core/utils/web3-signature';
import React, { useCallback, useEffect, useState } from 'react';
import logotypeSvg from 'src/assets/svgs/logotype.svg';
import shapeSvg from 'src/assets/svgs/hexagon-rounded.svg';
import styled from 'styled-components';

/**
 * `Grid` styled component.
 */

const Grid = styled(Container)`
  display: grid;
  grid-template-areas: '. . .' 'text . hexagon' '. . . ';
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 150px auto 150px;
  position: relative;

  ${media.min.sm`
    grid-template-rows: 200px auto 200px;
  `}
`;

/**
 * `Content` styled component.
 */

const Content = styled.div`
  position: relative;
`;

/**
 * `RightContent` styled component.
 */

const RightContent = styled(Content)`
  grid-area: text;
`;

/**
 * `Logotype` styled component.
 */

const Logotype = styled(Svg).attrs({
  icon: logotypeSvg,
  size: '116px'
})`
  margin-bottom: 2.5rem;
`;

/**
 * `Title` styled component.
 */

const Title = styled(Text).attrs({
  as: 'h1',
  variant: 'title'
})`
  margin-bottom: 1.75rem;
`;

/**
 * `HexagonWrapper` styled component.
 */

const HexagonWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  grid-area: hexagon;
  justify-content: flex-end;
  position: relative;
  text-align: center;
  top: 10%;

  ${media.max.md`
    display: none;
  `}
`;

/**
 * `Shape` styled component.
 */

const Shape = styled(Svg).attrs({
  icon: shapeSvg,
  size: '270%'
})`
  left: -115%;
  position: absolute;
  top: -30%;
  transform: scale(0.9);

  ${media.min.sm`
    left: -100%;
    top: -85%;
    transform: scale(0.8);
  `}

  ${media.min.md`
    left: -77%;
    top: -177%;
    transform: none;
  `}

  svg {
    max-width: 1600px;
  }
`;

/**
 * Export `ConnectScreen` component.
 */

export function ConnectScreen() {
  const { account, library } = useWeb3React<Web3Provider>();
  const { onConnect, onDisconnect } = useWalletConnect();
  const { state } = useAppStatus();
  const { authenticate } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsOpen(open => !open);
  }, []);

  const {
    error,
    isPending,
    run: verifyOwnership
  } = useAsync({
    deferFn: ([account, signer]) => verifyAccountOwnership(account, signer),
    onReject: () => {
      onDisconnect();
      setIsOpen(false);
      toast.error(
        "To continue we need you to sign our message so that we can verify that you're the owner of this Ethereum address."
      );
    },
    onResolve: (isOwner: boolean) => {
      if (isOwner && account) {
        authenticate(account);
      }
    }
  });

  const handleOnConnect = useCallback(
    provider => {
      if (!account) {
        onConnect(provider);

        return;
      }

      verifyOwnership(account, library.getSigner(0));
    },
    [account, library, onConnect, verifyOwnership]
  );

  useEffect(() => {
    if (isOpen && account && library?.getSigner && !isPending && !error) {
      verifyOwnership(account, library.getSigner(0));
    }
  }, [account, isOpen, error, library, isPending, verifyOwnership]);

  return (
    <Grid>
      <RightContent>
        <Shape />

        <Content>
          <Logotype />

          <Title>{'Become citizend'}</Title>

          <Text as={'p'} style={{ marginBottom: '4rem' }}>
            {'Connect your wallet to continue'}
          </Text>

          {state !== 'SOON' && (
            <Button onClick={toggleModal}>{'Connect wallet'}</Button>
          )}
        </Content>
      </RightContent>

      <HexagonWrapper>
        <HexagonShape />
      </HexagonWrapper>

      {account ? (
        <AwaitingSignatureModal isOpen={isPending} />
      ) : (
        <ModalWalletConnect
          isOpen={isOpen}
          onConnect={handleOnConnect}
          onRequestClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Grid>
  );
}
