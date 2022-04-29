/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Link } from 'src/components/core/link';
import { Loader } from 'src/components/core/loading';
import { Modal } from 'src/components/core/modal';
import { ModalTitle } from './styles';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import React from 'react';
import styled from 'styled-components';

/**
 * Contribute again info URL.
 */

const contributeAgainInfoUrl =
  process.env.NEXT_PUBLIC_CONTRIBUTE_AGAIN_INFO_URL;

/**
 * `Props` type.
 */

type Props = {
  amount: string;
  isOpen: boolean;
  label: string;
};

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
 * `Flex` styled component.
 */

const Flex = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${media.max.ms`
    flex-direction: column;
  `}

  & + & {
    margin-bottom: 1rem;
    padding-top: 2rem;
  }
`;

/**
 * `FlexCenter` styled component.
 */

const FlexCenter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;

  ${media.min.ms`
    padding: 5rem 0;
  `}
`;

/**
 * Export `LoadingModal` component.
 */

export function LoadingModal(props: Props) {
  const { amount, isOpen, label } = props;

  return (
    <Modal isOpen={isOpen}>
      <ModalTitle>{'Please confirm the transaction in your wallet'}</ModalTitle>

      <Content>
        <Flex>
          <Text noMargin variant={'label'}>
            {label}
          </Text>

          <Text noMargin variant={'body2'}>
            {amount}
          </Text>
        </Flex>

        <FlexCenter>
          <Loader />
        </FlexCenter>

        <Lead>
          {
            "Keep in mind that if you want to contribute again, you'll need to use the same wallet. "
          }

          <Link href={contributeAgainInfoUrl}>{'Learn more'}</Link>

          {'.'}
        </Lead>
      </Content>
    </Modal>
  );
}
