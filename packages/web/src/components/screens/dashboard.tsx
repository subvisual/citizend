/**
 * Module dependencies.
 */

import { Container } from 'src/components/core/container';
import { Navbar } from 'src/components/navbar';
import { Text } from 'src/components/core/text';
import { Web3Provider } from '@ethersproject/providers';
import { useAppStatus } from 'src/hooks/use-app-status';
import { useBalance } from 'src/hooks/use-balance';
import { useWeb3React } from '@web3-react/core';
import React from 'react';

/**
 * Export `DashboardScreen` component.
 */

export function DashboardScreen() {
  const { account } = useWeb3React<Web3Provider>();
  const balance = useBalance();
  const currentAppState = useAppStatus();

  return (
    <>
      <Navbar />

      <Container>
        <Text as={'h1'} variant={'title'}>
          {'Discovery DAO'}
        </Text>

        <div>
          <Text bold>{'Status: '}</Text>
          <Text>{currentAppState}</Text>
        </div>

        <div>
          <Text bold>{'Address: '}</Text>
          <Text>{account}</Text>
        </div>

        <div>
          <Text bold>{'My Contribution: '}</Text>
          <Text>{`${balance} aUsd`}</Text>
        </div>
      </Container>
    </>
  );
}
