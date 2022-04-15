/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Countdown } from 'src/components/countdown';
import { ListName } from 'src/hooks/use-owner-action';
import { Navbar } from 'src/components/navbar';
import { ProjectInfoCard } from 'src/components/dashboard/project-info-card';
import { SaleForm } from 'src/components/dashboard/sale-form';
import { SaleState, useSale } from 'src/hooks/use-sale';
import { currencyConfig } from 'src/core/constants';
import {
  formatCompactNumber,
  formatCurrency,
  formatDate
} from 'src/core/utils/formatters';

import { media } from 'src/styles/breakpoints';
import { useAccountKycStatus } from 'src/hooks/use-kyc-status';
import { useAppStatus } from 'src/hooks/use-app-status';
import React from 'react';
import styled from 'styled-components';

/**
 * `StyledContainer` styled component.
 */

const StyledContainer = styled(Container)`
  display: grid;
  grid-gap: 5rem;
  padding-bottom: 3rem;
  padding-top: 3rem;

  ${media.min.md`
    padding-bottom: 5rem;
    padding-top: 5rem;
  `}
`;

/**
 * Export `DashboardScreen` component.
 */

export function DashboardScreen() {
  const { balance, contributions, price, raised } = useSale() as SaleState;
  const { state, vestingStart } = useAppStatus();
  const kycStatus = useAccountKycStatus(ListName);

  return (
    <>
      <Navbar isKycApproved={!!kycStatus} />

      <StyledContainer>
        <ProjectInfoCard
          contributions={contributions}
          myContribution={formatCurrency(balance, currencyConfig.aUsd)}
          price={formatCurrency(price, currencyConfig.usd)}
          raised={formatCompactNumber(raised, currencyConfig.usd)}
          vestingStart={formatDate(vestingStart)}
        />

        {state === 'COUNTDOWN' && !!vestingStart && (
          <Countdown
            date={new Date(vestingStart).getTime()}
            title={'Vesting period starting in:'}
          />
        )}

        {state === 'SALE' && (
          <SaleForm disabled={!kycStatus} tokenPrice={price} />
        )}
      </StyledContainer>
    </>
  );
}
