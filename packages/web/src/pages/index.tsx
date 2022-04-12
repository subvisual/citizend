/**
 * Module dependencies.
 */

import { ListName } from 'src/hooks/use-owner-action';
import { Web3Provider } from '@ethersproject/providers';
import { useAccountKycStatus } from 'src/hooks/use-kyc-status';
import { useAppStatus } from 'src/hooks/use-app-status';
import { useBalance } from 'src/hooks/use-balance';
import { useWeb3React } from '@web3-react/core';
import Metatags from 'src/components/core/metatags';
import React from 'react';
import styled from 'styled-components';
import useWalletConnect from 'src/hooks/use-wallet-connect';

/**
 * `Label` styled component.
 */

const Label = styled.h3`
  margin: 8px;
`;

/**
 * `Home` page.
 */

function Home() {
  const { account, active } = useWeb3React<Web3Provider>();
  const { connectStatus, onConnect, onDisconnect } = useWalletConnect();
  const balance = useBalance();
  const currentAppState = useAppStatus();
  const kycStatus = useAccountKycStatus(ListName);

  return (
    <>
      <Metatags />

      <h2>{`Discovery DAO | ${currentAppState}`}</h2>
      <Label>{`Account: ${account ?? '-'}`}</Label>
      <Label>{`KYC status: ${kycStatus ? '🟢' : '🔴'}`}</Label>
      <hr />

      {active ? (
        <>
          <h3>{`My Contribution: ${balance} aUsd`}</h3>

          <button onClick={onDisconnect} type={'button'}>
            {'Disconnect'}
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              onConnect('metamask');
            }}
            type={'button'}
          >
            {'Metamask'}
          </button>

          <button
            onClick={() => {
              onConnect('walletconnect');
            }}
            type={'button'}
          >
            {'Wallet Connect'}
          </button>
        </>
      )}

      {connectStatus === 'loading' && (
        <div style={{ paddingTop: '50px' }}>
          <div>{'Sign the message in your wallet to continue'}</div>
        </div>
      )}
    </>
  );
}

/**
 * Export `Home` page.
 */

export default Home;
