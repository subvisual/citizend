/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import Metatags from 'src/components/core/metatags';
import React from 'react';
import useWalletConnect from 'src/hooks/use-wallet-connect';

/**
 * `ConnectWallet` component.
 */

const ConnectWallet = () => {
  const { account, active } = useWeb3React<Web3Provider>();
  const { connectStatus, onConnect, onDisconnect } = useWalletConnect();

  return (
    <div>
      <div>{`Account: ${account ?? '-'}`}</div>

      <div>{`Connection Status: ${active ? '🟢' : '🔴'}`}</div>

      {active ? (
        <button onClick={onDisconnect} type={'button'}>
          {'Disconnect'}
        </button>
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
    </div>
  );
};

/**
 * `Home` page.
 */

function Home() {
  return (
    <>
      <Metatags />

      <ConnectWallet />
    </>
  );
}

/**
 * Export `Home` page.
 */

export default Home;
