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
 * `ConnectStatus` type.
 */

type ConnectStatus = 'loading' | 'error' | 'success';

/**
 * `Result` type.
 */

type Result = {
  connectStatus: ConnectStatus | null;
  onConnect: (provider: Provider) => void;
  onDisconnect: () => void;
};

/**
 * `useWalletConnect` hook.
 */

function useWalletConnect(): Result {
  const { activate, deactivate } = useWeb3React<Web3Provider>();
  const [connectStatus, setConnectStatus] = useState<ConnectStatus | null>(
    null
  );
  const handleConnectProvider = useCallback(
    (provider: Provider) => {
      setConnectStatus('loading');

      activate(connectors[provider])
        .then(() => {
          setConnectStatus('success');
          window.localStorage.setItem(localeStorageKey, provider);
        })
        .catch(() => {
          setConnectStatus('error');
        });
    },
    [activate]
  );

  const handleDisconnect = useCallback(() => {
    deactivate();
    window.localStorage.removeItem(localeStorageKey);
  }, [deactivate]);

  useEffect(() => {
    const provider = window.localStorage.getItem(localeStorageKey);

    if (provider && Object.keys(connectors).includes(provider)) {
      handleConnectProvider(provider as Provider);
    }
  }, [handleConnectProvider]);

  return {
    connectStatus,
    onConnect: handleConnectProvider,
    onDisconnect: handleDisconnect
  };
}

/**
 * Export `useWalletConnect` hook.
 */

export default useWalletConnect;
