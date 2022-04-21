/**
 * Module dependencies.
 */

import {
  Context,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

/**
 * `Props` type.
 */

type Props = {
  children: ReactNode;
};

/**
 * `Session` type.
 */

type Session = {
  active: boolean;
  authenticate: (address: string) => void;
  onLogout: () => void;
};

/**
 * `SessionContext`.
 */

const SessionContext: Context<Session> = createContext({} as Session);

/**
 * Export `useSession` hook.
 */

export function useSession(): Session {
  return useContext(SessionContext);
}

/**
 * `getStoredAddresses`.
 */

const getStoredAddresses = () => {
  try {
    return JSON.parse(window.localStorage.getItem('addresses')) ?? [];
  } catch (error) {
    return [];
  }
};

/**
 * Export `SessionProvider` component.
 */

export function SessionProvider({ children }: Props) {
  const { account, active } = useWeb3React<Web3Provider>();
  const [activeSession, setActiveSession] = useState<boolean>();
  const [addresses, setAddresses] = useState<string[]>(getStoredAddresses);
  const onLogout = useCallback(() => {
    setAddresses([]);
    window.localStorage.clear();
  }, []);

  const authenticate = useCallback(address => {
    setAddresses(addresses => {
      const allAddresses = [...addresses, address];

      window.localStorage.setItem('addresses', JSON.stringify(allAddresses));

      return allAddresses;
    });
  }, []);

  const sessionState = useMemo(
    () => ({
      active: activeSession,
      authenticate,
      onLogout
    }),
    [activeSession, authenticate, onLogout]
  );

  useEffect(() => {
    const isSigned = addresses.includes(account);
    const isActive = isSigned && active;

    if (isActive !== activeSession) {
      setActiveSession(isActive);
    }
  }, [active, account, addresses, activeSession]);

  return (
    <SessionContext.Provider value={sessionState}>
      {children}
    </SessionContext.Provider>
  );
}
