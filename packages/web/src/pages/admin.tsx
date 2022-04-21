/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { useOwnerAction } from 'src/hooks/use-owner-action';
import { useWalletConnect } from 'src/hooks/use-wallet-connect';
import { useWeb3React } from '@web3-react/core';
import Metatags from 'src/components/core/metatags';
import React, { useState } from 'react';

/**
 * `OwnerActions` component.
 */

function OwnerActions() {
  const [address, setAddress] = useState('');
  const { addToRegistry } = useOwnerAction();

  return (
    <form style={{ marginBottom: 40 }}>
      <input
        name={'address'}
        onChange={event => {
          setAddress(event.target.value);
        }}
        placeholder={'Wallet Address'}
        type={'text'}
        value={address}
      />

      <button
        onClick={() => {
          addToRegistry(address)
            // eslint-disable-next-line no-console
            .then(console.log)
            // eslint-disable-next-line no-console
            .catch(console.error);
        }}
        type={'button'}
      >
        {'Validate KYC'}
      </button>
    </form>
  );
}

/**
 * `Admin` page.
 */

function Admin() {
  const { active } = useWeb3React<Web3Provider>();
  const { onConnect, onDisconnect } = useWalletConnect();

  return (
    <>
      <Metatags />

      <a href={'/'}>{' <- Go Home'}</a>

      <h1>{'Admin Page'}</h1>

      {active ? (
        <>
          <OwnerActions />

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
    </>
  );
}

/**
 * Export `getStaticProps` util.
 */

export function getStaticProps() {
  if (process.env.NODE_ENV !== 'development') {
    return {
      notFound: true
    };
  }

  return {
    props: {}
  };
}

/**
 * Export `Admin` page.
 */

export default Admin;
