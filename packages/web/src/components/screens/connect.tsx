/**
 * Module dependencies.
 */

import { AwaitingSignatureModal } from 'src/components/modals/awaiting-signature-modal';
import { Button } from 'src/components/core/button';
import { ConnectWalletModal } from 'src/components/modals/connect-wallet-modal';
import { Container } from 'src/components/core/container';
import { HexagonShape } from 'src/components/connect/hexagon-shape';
import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { Web3Provider } from '@ethersproject/providers';
import { WrongChainModal } from 'src/components/modals/wrong-chain-modal';
import { chainConfig } from 'src/core/utils/web3-connectors';
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
import styled from 'styled-components';

/**
 * `Grid` styled component.
 */

const Grid = styled(Container)`
  display: grid;
  grid-template-areas: '. . .' 'text . hexagon' '. . . ';
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 150px auto 150px;

  ${media.min.sm`
    grid-template-rows: 200px auto 200px;
  `}

  ${media.max.md`
    position: relative;
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
  top: 20%;

  ${media.max.md`
    display: none;
  `}
`;

/**
 * `Shape` styled component.
 */

const ShapeWrapper = styled.div`
  height: 100%;
  inset: 20% 0 0 0;
  position: absolute;
  transform: scale(1.2);
  width: 100%;

  ${media.min.xs`
    transform: scale(1.4);
  `}

  ${media.min.sm`
    left: 36%;
    top: 40%;
    transform: scale(1.9);
  `}

  ${media.min.md`
    inset: 0;
    transform: scale(1);
  `}
`;

/**
 * `Shape` styled component.
 */

const Shape = styled.div`
  backdrop-filter: blur(24px);
  background-color: rgba(72, 88, 118, 0.56);
  clip-path: url(#svgPathDesktop);
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;

  ${media.max.md`
    clip-path: url(#svgPathMobile);
  `}
`;

/**
 * `isUnsupportedChainIdError` util.
 */

function isUnsupportedChainIdError(error: any) {
  return (
    error?.name === 'UnsupportedChainIdError' ||
    error?.message.includes('Unsupported chain id')
  );
}

/**
 * Export `ConnectScreen` component.
 */

export function ConnectScreen() {
  const {
    account,
    active,
    error: web3Error,
    library
  } = useWeb3React<Web3Provider>();
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
      if (!active || !account) {
        onConnect(provider);

        return;
      }

      verifyOwnership(account, library.getSigner(0));
    },
    [active, account, library, onConnect, verifyOwnership]
  );

  const handleNetworkChange = useCallback(async () => {
    if (!(window as any)?.ethereum) {
      toast.error('We could not find any library for using web3.');

      return;
    }

    const { ethereum } = window as any;

    try {
      setIsOpen(false);

      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainConfig.chainId }]
      });

      if (!account) {
        toast.info('Network correctly changed. Connect again to continue.');
      }
    } catch (error) {
      if (error.code !== 4902) {
        toast.error(
          'We could not switch your wallet to the correct network. Please try again. If persists try adding the chain configuration manually.'
        );

        return;
      }

      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [chainConfig]
        });
      } catch (error) {
        if (error.code === 4001) {
          // User rejected the request.
          return;
        }

        if (error.code === -32002) {
          toast.info(
            `Check your wallet network permissions. There should be a pending authorization for adding the ${chainConfig.name} network.`
          );

          return;
        }

        toast.error(
          'We could not add our network to metamask. Try adding the chain manually or contact support.'
        );
      }
    }
  }, [account]);

  useEffect(() => {
    if (isOpen && account && library?.getSigner && !isPending && !error) {
      verifyOwnership(account, library.getSigner(0));
    }
  }, [account, isOpen, error, library, isPending, verifyOwnership]);

  return (
    <Grid>
      <svg height={'0'} width={'0'} xmlns={'http://www.w3.org/2000/svg'}>
        <clipPath id={'svgPathDesktop'}>
          <path
            d={
              'M1099 398.263V0H0V697.98l110.037 110.977A57.601 57.601 0 0 0 150.939 826h521.837a57.6 57.6 0 0 0 40.813-16.954l368.621-370.137a57.61 57.61 0 0 0 16.79-40.646Z'
            }
            fill={'#000'}
          />
        </clipPath>

        <clipPath id={'svgPathMobile'}>
          <path
            d={
              'M183.347 0a57.602 57.602 0 0 1 34.939 16.66l98.933 99.37A57.6 57.6 0 0 1 334 156.669v141.06a57.602 57.602 0 0 1-16.781 40.64l-98.933 99.37a57.6 57.6 0 0 1-40.819 16.96H37.533A57.6 57.6 0 0 1 .896 441.546V12.852A57.605 57.605 0 0 1 31.652 0h151.695Z'
            }
            fill={'#000'}
          />
        </clipPath>
      </svg>

      <ShapeWrapper>
        <Shape />
      </ShapeWrapper>

      <RightContent>
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

      {account && <AwaitingSignatureModal isOpen={isPending} />}

      <ConnectWalletModal
        isOpen={isOpen && !isUnsupportedChainIdError(web3Error)}
        onConnect={handleOnConnect}
        onRequestClose={() => {
          setIsOpen(false);
        }}
      />

      <WrongChainModal
        chainName={chainConfig.chainName}
        isOpen={isUnsupportedChainIdError(web3Error)}
        onChangeNetwork={handleNetworkChange}
      />
    </Grid>
  );
}
