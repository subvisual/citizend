/**
 * Module dependencies.
 */

import { Separator } from 'src/components/core/separator';
import { Svg } from 'src/components/core/svg';
import { Text, textStyles } from 'src/components/core/text';
import { Web3Provider } from '@ethersproject/providers';
import { ifProp } from 'styled-tools';
import { media } from 'src/styles/breakpoints';
import { toast } from 'react-toastify';
import { useFractalKYCUrl } from 'src/hooks/use-kyc-url';
import { useReferralUrl } from 'src/hooks/use-referral-url';
import { useWalletConnect } from 'src/hooks/use-wallet-connect';
import { useWeb3React } from '@web3-react/core';
import React, { useCallback } from 'react';
import checkSvg from 'src/assets/svgs/check.svg';
import errorSvg from 'src/assets/svgs/error.svg';
import hexagonalStrokeSvg from 'src/assets/svgs/hexagon-stroked.svg';
import linkSvg from 'src/assets/svgs/link.svg';
import logotypeSvg from 'src/assets/svgs/logotype.svg';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  isKycApproved: boolean;
};

/**
 * `Nav` styled component.
 */

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem var(--container-padding);
  position: relative;
  z-index: 10;

  ${media.min.sm`
    padding: 2.5rem var(--container-padding);
  `}
`;

/**
 * `AddressLabel` styled component.
 */

const AddressLabel = styled(Text).attrs({
  role: 'button',
  variant: 'body'
})`
  font-weight: 500;
`;

/**
 * `MenuWrapper` styled component.
 */

const MenuWrapper = styled(Text).attrs({
  noMargin: true,
  variant: 'label'
})`
  position: relative;
`;

/**
 * `Menu` styled component.
 */

const Menu = styled.ul`
  ${textStyles.body}

  background: var(--color-white);
  box-shadow: 0px 8px 12px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-blue700);
  display: grid;
  grid-gap: 10px 0;
  opacity: 0;
  padding: 20px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(0.5rem);
  transition: var(--transition-default);
  transition-property: transform, opacity;
  width: 285px;

  ${MenuWrapper}:hover &,
  ${MenuWrapper}:focus &,
  ${MenuWrapper}:focus-within & {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
`;

/**
 * `GroupLabel` styled component.
 */

const GroupLabel = styled(Text).attrs({
  as: 'p',
  bold: true
})`
  margin: 0;
`;

/**
 * `FlexRow` styled component.
 */

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

/**
 * `StyledSeparator` styled component.
 */

const StyledSeparator = styled(Separator)`
  margin: 0.75rem 0;
`;

/**
 * `Link` styled component.
 */

const Link = styled.a`
  ${textStyles.body}

  appearance: none;
  background: none;
  border: none;
  display: inline-block;
  margin: 0;
  text-align: left;
  width: 100%;

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
  }
`;

/**
 * `Truncated` styled component.
 */

const Truncated = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 200px;
`;

/**
 * `ApprovalStateSvg` styled component.
 */

const ApprovalStateSvg = styled(Svg).attrs({
  size: '1.25rem'
})`
  top: -1px;
`;

/**
 * `HexagonalShape` styled component.
 */

const HexagonalShape = styled(Svg).attrs({
  icon: hexagonalStrokeSvg,
  size: '3.75rem'
})<{ hasError: boolean }>`
  left: -25%;
  position: absolute;
  top: -1.3rem;
  transform: rotate(-90deg);
  z-index: -1;

  ${ifProp(
    'hasError',
    `
    &::after {
      background: var(--color-red500);
      border-radius: 50%;
      content: '';
      height: 1.25rem;
      inset: 0 0 auto auto;
      position: absolute;
      width: 1.25rem;
    }
  `
  )}
`;

/**
 * Export `Navbar` component.
 */

export function Navbar(props: Props) {
  const { isKycApproved } = props;
  const { account } = useWeb3React<Web3Provider>();
  const { onDisconnect } = useWalletConnect();
  const kycUrl = useFractalKYCUrl();
  const referralUrl = useReferralUrl();
  const copyReferralToClipboard = useCallback(() => {
    navigator.clipboard.writeText(referralUrl).then(() => {
      toast.info('Referral URL copied to clipboard.');
    });
  }, [referralUrl]);

  return (
    <Nav>
      <Svg icon={logotypeSvg} size={'116px'} />

      {account?.length && (
        <MenuWrapper role={'button'}>
          <HexagonalShape hasError={!isKycApproved} />

          <AddressLabel>
            {`${account.substring(0, 4)}...${account.substring(
              account.length - 4,
              account.length
            )}`}
          </AddressLabel>

          <Menu>
            <GroupLabel>{'KYC Verification'}</GroupLabel>

            <Link href={kycUrl} rel={'noopener'} target={'_blank'}>
              <FlexRow>
                <span>{'Fractal ID'}</span>
                <ApprovalStateSvg icon={isKycApproved ? checkSvg : errorSvg} />
              </FlexRow>
            </Link>

            <Separator style={{ color: 'transparent' }} />

            <GroupLabel>{'My referral link'}</GroupLabel>

            <Link
              aria-label={'Copy referral URL to clipboard'}
              onClick={copyReferralToClipboard}
            >
              <FlexRow>
                <Truncated>{referralUrl}</Truncated>
                <ApprovalStateSvg icon={linkSvg} />
              </FlexRow>
            </Link>

            <StyledSeparator />

            <Link as={'button'} onClick={onDisconnect}>
              {'Disconnect'}
            </Link>
          </Menu>
        </MenuWrapper>
      )}
    </Nav>
  );
}
