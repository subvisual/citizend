/**
 * Module dependencies.
 */

import { ClaimActionCard } from './styles';
import { InfoCard } from './info-card';
import { LoadingModal } from 'src/components/modals/loading-modal';
import { currencyConfig } from 'src/core/constants';
import { formatCurrency } from 'src/core/utils/formatters';
import { media } from 'src/styles/breakpoints';
import { useClaim, useRefund, useVesting } from 'src/hooks/use-vesting';
import React, { useMemo } from 'react';
import styled from 'styled-components';

/**
 * `Grid` styled component.
 */

const Grid = styled.section`
  display: grid;
  grid-gap: 2.5rem;
  position: relative;

  ${media.min.md`
    grid-gap: 1rem;
    grid-template-columns: 2fr 1fr 1fr;
  `}
`;

/**
 * Export `Vesting` component.
 */

export function Vesting() {
  const vestingState = useVesting();
  const refund = useRefund();
  const claim = useClaim();
  const { claimable, refundable, tokens, totalClaimed } = useMemo(
    () => ({
      claimable: formatCurrency(vestingState.claimable, currencyConfig.ctnd),
      refundable: formatCurrency(vestingState.refundable, currencyConfig.aUsd),
      tokens: formatCurrency(vestingState.tokens, currencyConfig.ctnd),
      totalClaimed: formatCurrency(
        vestingState.alreadyClaimed,
        currencyConfig.ctnd
      )
    }),
    [vestingState]
  );

  return (
    <Grid>
      <InfoCard
        nextRelease={vestingState.nextRelease}
        tokens={tokens}
        totalClaimed={totalClaimed}
      />

      <ClaimActionCard
        isConfirming={claim.isConfirming}
        isDisabled={!!vestingState.claimEnabled}
        onClick={() => {
          claim.run();
        }}
        title={'Available to claim'}
        value={claimable}
      />

      <LoadingModal
        amount={claimable}
        isOpen={claim.isPending}
        label={'Claimed value'}
      />

      {vestingState.refundEnabled && (
        <>
          <ClaimActionCard
            isConfirming={refund.isConfirming}
            isDisabled={!!vestingState.refundEnabled}
            onClick={() => {
              refund.run();
            }}
            title={'Refund available'}
            value={refundable}
          />

          <LoadingModal
            amount={refundable}
            isOpen={refund.isPending}
            label={'Refund after cap calculations'}
          />
        </>
      )}
    </Grid>
  );
}
