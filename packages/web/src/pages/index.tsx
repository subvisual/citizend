/**
 * Module dependencies.
 */

import { ConnectScreen } from 'src/components/screens/connect';
import { DashboardScreen } from 'src/components/screens/dashboard';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import Metatags from 'src/components/core/metatags';
import React from 'react';

/**
 * `Home` page.
 */

function Home() {
  const { active } = useWeb3React<Web3Provider>();

  return (
    <>
      <Metatags />

      {!active ? <ConnectScreen /> : <DashboardScreen />}
    </>
  );
}

/**
 * Export `Home` page.
 */

export default Home;
