/**
 * Module dependencies.
 */

import { Separator } from 'src/components/core/separator';
import { Svg } from 'src/components/core/svg';
import { Text, textStyles } from 'src/components/core/text';
import { Web3Provider } from '@ethersproject/providers';
import { ifProp } from 'styled-tools';
import { media } from 'src/styles/breakpoints';
import { useWeb3React } from '@web3-react/core';
import checkSvg from 'src/assets/svgs/check.svg';
import errorSvg from 'src/assets/svgs/error.svg';
import hexagonalStrokeSvg from 'src/assets/svgs/hexagon-stroked.svg';
import logotypeSvg from 'src/assets/svgs/logotype.svg';
import styled from 'styled-components';
import useWalletConnect from 'src/hooks/use-wallet-connect';

/**
 * `Props` type.
 */

type Props = {
  isKycApproved: boolean;
};

/**
 * Fractal KYC URL.
 */

const fractalKycUrl = process.env.NEXT_PUBLIC_FRACTAL_KYC_URL;

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
  background: var(--color-white);
  box-shadow: 0px 8px 12px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-blue700);
  opacity: 0;
  padding: 20px;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 100%;
  transform: translateY(0.5rem);
  transition: var(--transition-default);
  transition-property: transform, opacity;
  width: 234px;

  ${MenuWrapper}:hover &,
  ${MenuWrapper}:focus &,
  ${MenuWrapper}:focus-within & {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
`;

/**
 * `MenuTitle` styled component.
 */

const MenuTitle = styled(Text).attrs({
  as: 'p',
  bold: true
})`
  margin-bottom: 0.5rem;
`;

/**
 * `Link` styled component.
 */

const Link = styled.a`
  ${textStyles.body}

  appearance: none;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding-top: 0.75rem;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
  }
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
            <MenuTitle>{'KYC Verification'}</MenuTitle>

            <Link href={fractalKycUrl} rel={'noopener'} target={'_blank'}>
              <span>{'Fractal ID '}</span>

              <ApprovalStateSvg icon={isKycApproved ? checkSvg : errorSvg} />
            </Link>

            <Separator />

            <Link as={'button'} onClick={onDisconnect}>
              {'Disconnect'}
            </Link>
          </Menu>
        </MenuWrapper>
      )}
    </Nav>
  );
}
