/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Countdown } from 'src/components/countdown';
import { Navbar } from 'src/components/navbar';
import { ProjectInfoCard } from 'src/components/dashboard/project-info-card';
import { SaleForm } from 'src/components/dashboard/sale-form';
import { SaleState, useSale } from 'src/hooks/use-sale';
import { ShareReferralModal } from 'src/components/modals/share-referral-modal';
import { Vesting } from 'src/components/vesting';
import { Web3Provider } from '@ethersproject/providers';
import { currencyConfig } from 'src/core/constants';
import {
  formatCompactNumber,
  formatCurrency,
  formatDate
} from 'src/core/utils/formatters';

import { media } from 'src/styles/breakpoints';
import { useAppStatus } from 'src/hooks/use-app-status';
import { useIsKYCApproved } from 'src/hooks/use-kyc-status';
import { useWeb3React } from '@web3-react/core';
import React, { useState } from 'react';
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
 * `getReferralStorageKey`.
 */

const getReferralStorageKey = (address: string) => `referralCode${address}`;

/**
 * Export `DashboardScreen` component.
 */

export function DashboardScreen() {
  const { account } = useWeb3React<Web3Provider>();
  const { balance, contributions, price, raised } = useSale() as SaleState;
  const { state, vestingStart } = useAppStatus();
  const kycApproved = useIsKYCApproved();
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(() => {
    return !window.localStorage.getItem(getReferralStorageKey(account));
  });

  return (
    <>
      <Navbar isKycApproved={!!kycApproved} />

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
            date={vestingStart}
            title={'Vesting period starting in:'}
          />
        )}

        {state === 'SALE' && (
          <SaleForm disabled={!kycApproved} tokenPrice={price} />
        )}

        {state === 'VESTING' && <Vesting />}
      </StyledContainer>

      <ShareReferralModal
        isOpen={isShareModalOpen}
        onRequestClose={() => {
          setIsShareModalOpen(false);
          window.localStorage.setItem(getReferralStorageKey(account), 'true');
        }}
      />
    </>
  );
}
