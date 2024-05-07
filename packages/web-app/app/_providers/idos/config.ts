import { mainnet, sepolia } from 'viem/chains';

export const idOsConfig = {
  container: '#idos',
  // usePasskeys: window.localStorage.getItem("use"), <-- Check how to use later
  nodeUrl: process.env.NEXT_PUBLIC_IDOS_NODE_URL,
  evmGrantsOptions: {
    contractAddress: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS_MAINNET,
    chainId:
      process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
        ? `${sepolia.id}`
        : `${mainnet.id}`,
  },
};
