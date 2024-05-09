import { sepolia } from 'viem/chains';

export const idOsConfig = {
  container: '#idos',
  // usePasskeys: window.localStorage.getItem("use"), <-- Check how to use later
  nodeUrl: process.env.NEXT_PUBLIC_IDOS_NODE_URL,
  evmGrantsOptions:
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? {
          contractAddress:
            process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS_MAINNET,
          chainId: `${sepolia.id}`,
        }
      : undefined,
};
