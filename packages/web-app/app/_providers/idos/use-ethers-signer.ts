import { BrowserProvider, JsonRpcSigner } from 'ethers';
import { useEffect, useState } from 'react';
import { WalletClient } from 'viem';
import { useWalletClient } from 'wagmi';

function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  if (!account || !chain || !transport) {
    console.log('Missing account, chain or transport, on walletClientToSigner');
    return undefined;
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

// /** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  const [signer, setSigner] = useState<JsonRpcSigner | undefined>();

  useEffect(() => {
    const loadClient = async () => {
      if (walletClient) {
        const signerResult = await walletClientToSigner(walletClient);
        setSigner(signerResult);
      }
    };
    loadClient();

    return () => {
      setSigner(undefined);
    };
  }, [walletClient]);

  return signer;
}
