'use client';

import { idOS } from '@idos-network/idos-sdk';
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useEthersSigner } from './use-ethers-signer';
import { IdOSContext } from './context';
import { idOsConfig } from './config';
import { getProviderUrl } from './get-provider-url';
import { useQueryClient } from '@tanstack/react-query';
import { appSignal } from '@/app/app-signal';

export const IdOsProvider = ({ children }: PropsWithChildren) => {
  const queryClient = useQueryClient();
  const [hasProfile, setHasProfile] = useState(false);
  const [hasSigner, setHasSigner] = useState(false);
  const [sdk, setSdk] = useState<idOS | null>(null);
  const ethSigner = useEthersSigner();
  const { disconnect } = useDisconnect();
  const { address: userAddress, isConnected } = useAccount();

  // Load SDK once wallet is connected
  useEffect(() => {
    const loadSdk = async () => {
      const ref = await idOS.init(idOsConfig);

      setSdk(ref);
    };
    if (isConnected && !sdk) {
      loadSdk();
    }
  }, [isConnected, sdk]);

  useEffect(() => {
    const initialize = async () => {
      if (!ethSigner || !userAddress || !sdk) return;

      const profile = await sdk.hasProfile(userAddress);
      setHasProfile(profile);

      // Authenticate by signing a message
      if (profile) {
        let count = 0;
        while (count < 2) {
          try {
            const signer = await sdk.setSigner('EVM', ethSigner);
            if (!signer?.address) throw new Error('Signer not set');
            setHasSigner(true);
            break;
          } catch (error: any) {
            count++;
            if (count === 2) {
              await sdk.reset({ enclave: true });
              await appSignal.sendError(
                new Error(
                  `Exceeded maximum retries for trying to set signer: ${error?.message}`,
                ),
              );
            }
          }
        }
      }
    };

    initialize();
  }, [ethSigner, userAddress, sdk]);

  const handleDisconnect = useCallback(async () => {
    if (!sdk || !isConnected) return;
    disconnect();
    queryClient.removeQueries();
    await sdk?.reset({ enclave: true });
    setHasProfile(false);
    setHasSigner(false);
  }, [sdk, queryClient, disconnect, isConnected]);

  const state = useMemo(() => {
    return {
      sdk,
      hasProfile,
      hasSigner,
      address: userAddress,
      getProviderUrl,
      disconnect: handleDisconnect,
      reset: async () => {
        await sdk?.reset({ enclave: true });
      },
    };
  }, [sdk, hasProfile, userAddress, hasSigner, handleDisconnect]);

  return <IdOSContext.Provider value={state}>{children}</IdOSContext.Provider>;
};

export { useIdOS } from './context';
