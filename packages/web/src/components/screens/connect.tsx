/**
 * Module dependencies.
 */

import { Button } from 'src/components/core/button';
import { Container } from 'src/components/core/container';
import { HexagonShape } from 'src/components/connect/hexagon-shape';
import { ModalConnecting } from 'src/components/connect/modal-connecting';
import { ModalWalletConnect } from 'src/components/connect/modal-wallet-connect';
import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import { useAppStatus } from 'src/hooks/use-app-status';
import React, { useCallback, useState } from 'react';
import logotypeSvg from 'src/assets/svgs/logotype.svg';
import shapeSvg from 'src/assets/svgs/hexagon-rounded.svg';
import styled from 'styled-components';
import useWalletConnect from 'src/hooks/use-wallet-connect';

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
  const { isLoading, onConnect } = useWalletConnect();
  const { state } = useAppStatus();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsOpen(open => !open);
  }, []);

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

      <ModalWalletConnect
        isOpen={isOpen}
        onConnect={onConnect}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      />

      {!!state && <ModalConnecting isOpen={isLoading} />}
    </Grid>
  );
}
