/**
 * Module dependencies.
 */

import { ListName } from 'src/hooks/use-owner-action';
import { Svg } from 'src/components/core/svg';
import { Text } from 'src/components/core/text';
import { Web3Provider } from '@ethersproject/providers';
import { useAccountKycStatus } from 'src/hooks/use-kyc-status';
import { useWeb3React } from '@web3-react/core';
import logotypeSvg from 'src/assets/svgs/logotype.svg';
import styled from 'styled-components';
import useWalletConnect from 'src/hooks/use-wallet-connect';

/**
 * `Nav` styled component.
 */

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem var(--container-padding);
  right: 0;
  top: 0;
  z-index: 10;
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
 * `Link` styled component.
 */

const Link = styled.a`
  display: block;

  :not(:last-child) {
    padding-bottom: 1rem;

    ::after {
      background-color: var(--color-blue700);
      content: '';
      display: block;
      height: 1px;
      inset: auto 0 0 0;
      margin-top: 0.5rem;
      opacity: 0.2;
    }
  }
`;

/**
 * Export `Navbar` component.
 */

export function Navbar() {
  const { account } = useWeb3React<Web3Provider>();
  const { onDisconnect } = useWalletConnect();
  const kycStatus = useAccountKycStatus(ListName);

  return (
    <Nav>
      <Svg icon={logotypeSvg} size={'116px'} />

      {account?.length && (
        <MenuWrapper role={'button'}>
          {`${account.substring(0, 4)}...${account.substring(
            account.length - 4,
            account.length
          )}`}

          <Menu>
            <Text as={'p'} bold>
              {'KYC Verification'}
            </Text>

            <Link href={'/'}>
              {'Fractal ID '} {kycStatus ? '🟢' : '🔴'}
            </Link>

            <Link onClick={onDisconnect} role={'button'}>
              {'Disconnect'}
            </Link>
          </Menu>
        </MenuWrapper>
      )}
    </Nav>
  );
}
