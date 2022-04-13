/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Navbar } from 'src/components/navbar';
import { ProjectInfoCard } from 'src/components/dashboard/project-info-card';
import { SaleState, useSale } from 'src/hooks/use-sale';
import { currencyConfig } from 'src/core/constants';
import {
  formatCompactNumber,
  formatCurrency,
  formatDate
} from 'src/core/utils/formatters';

import { useAppStatus } from 'src/hooks/use-app-status';
import React from 'react';

/**
 * Export `DashboardScreen` component.
 */

export function DashboardScreen() {
  const { balance, contributions, price, raised } = useSale() as SaleState;
  const { vestingStart } = useAppStatus();

  return (
    <>
      <Navbar />

      <Container>
        <ProjectInfoCard
          contributions={contributions}
          myContribution={formatCurrency(balance, currencyConfig.aUsd)}
          price={formatCurrency(price, currencyConfig.usd)}
          raised={formatCompactNumber(raised, currencyConfig.usd)}
          vestingStart={formatDate(vestingStart)}
        />
      </Container>
    </>
  );
}
