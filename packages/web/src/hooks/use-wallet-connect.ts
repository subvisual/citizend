/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { useCallback, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import connectors from 'src/core/utils/web3-connectors';

/**
 * Locale storage key.
 */

const localeStorageKey = 'provider';

/**
 * `Provider` type.
 */

type Provider = keyof typeof connectors;

/**
 * `Result` type.
 */

type Result = {
  active: boolean;
  isLoading: boolean;
  onConnect: (provider: Provider) => void;
  onDisconnect: () => void;
};

/**
 * `useWalletConnect` hook.
 */

function useWalletConnect(): Result {
  const { activate, active, deactivate } = useWeb3React<Web3Provider>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleDisconnect = useCallback(() => {
    deactivate();
    window.localStorage.removeItem(localeStorageKey);
  }, [deactivate]);

  const handleConnectProvider = useCallback(
    (provider: Provider) => {
      setIsLoading(true);

      activate(connectors[provider]).finally(() => {
        setIsLoading(false);
      });
    },
    [activate]
  );

  useEffect(() => {
    if (active !== isActive) {
      setIsActive(active);
      window.localStorage.setItem(localeStorageKey, 'metamask');
    }
  }, [active, isActive]);

  useEffect(() => {
    const provider = window.localStorage.getItem(localeStorageKey);

    if (provider && Object.keys(connectors).includes(provider)) {
      handleConnectProvider(provider as Provider);
    }
  }, [handleConnectProvider]);

  return {
    active: isActive,
    isLoading,
    onConnect: handleConnectProvider,
    onDisconnect: handleDisconnect
  };
}

/**
 * Export `useWalletConnect` hook.
 */

export default useWalletConnect;
