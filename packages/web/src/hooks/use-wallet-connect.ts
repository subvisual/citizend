/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'src/context/session';
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
 * Export `useWalletConnect` hook.
 */

export function useWalletConnect(): Result {
  const { account, activate, active, deactivate, error } =
    useWeb3React<Web3Provider>();
  const { onLogout } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleDisconnect = useCallback(() => {
    deactivate();
    onLogout();
  }, [deactivate, onLogout]);

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
    if ((error as any)?.code === -32002) {
      toast.info(
        'Check your wallet permissions. There should be a pending authorization.'
      );
    }
  }, [error]);

  useEffect(() => {
    const provider = window.localStorage.getItem(localeStorageKey);

    if (
      provider &&
      Object.keys(connectors).includes(provider) &&
      !!window.localStorage.getItem('addresses')
    ) {
      handleConnectProvider(provider as Provider);
    }
  }, [account, handleConnectProvider]);

  return {
    active: isActive,
    isLoading,
    onConnect: handleConnectProvider,
    onDisconnect: handleDisconnect
  };
}
