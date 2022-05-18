/**
 * Module dependencies.
 */

import { Link } from 'src/components/core/link';
import { StyledCard, Title } from './styles';
import { Text } from 'src/components/core/text';
import { media } from 'src/styles/breakpoints';
import { toast } from 'react-toastify';
import { useContracts } from 'src/context/contracts';
import React, { useCallback } from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  nextRelease: string;
  tokens: string;
  totalClaimed: string;
};

/**
 * `Grid` styled component.
 */

const Grid = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr;

  ${media.min.md`
    grid-template-columns: 1fr 1fr;
  `}
`;

/**
 * `FlexRow` styled component.
 */

const FlexRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

/**
 * Export `InfoCard` component.
 */

export function InfoCard(props: Props) {
  const { nextRelease, tokens, totalClaimed } = props;
  const contracts = useContracts();
  const assetAddress = contracts?.citizend.address;
  const addTokenToMetamask = useCallback(async () => {
    if (!window?.ethereum) {
      toast.error('We could not find any library for using web3.');

      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          options: {
            address: assetAddress,
            decimals: 18,
            symbol: 'CTND'
          },
          type: 'ERC20'
        }
      });
    } catch (error) {
      toast.error(
        'We could not add our token to your metamask. Try adding it manually or contact support.'
      );
    }
  }, [assetAddress]);

  return (
    <StyledCard>
      <Grid>
        <div>
          <Title>{'My tokens'}</Title>

          <Text as={'p'} noMargin variant={'body2'}>
            {tokens}
          </Text>
        </div>

        <Link
          onClick={addTokenToMetamask}
          style={{ alignSelf: 'flex-end', margin: 0 }}
        >
          {'Add token to metamask'}
        </Link>

        <FlexRow>
          <Text variant={'label'}>{'Total Claimed'}</Text>
          <Text noMargin>{totalClaimed}</Text>
        </FlexRow>

        <FlexRow>
          <Text variant={'label'}>{'Next Release'}</Text>
          <Text noMargin>{nextRelease}</Text>
        </FlexRow>
      </Grid>
    </StyledCard>
  );
}
