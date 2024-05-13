import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { useMemo } from 'react';
import { WalletClient } from 'viem';
import { useWalletClient } from 'wagmi';

function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  if (!account || !chain || !transport) {
    throw new Error(
      'Missing account, chain or transport, on walletClientToSigner',
    );
  }

  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  return useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient],
  );
}
