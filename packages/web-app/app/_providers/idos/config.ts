export const idOsConfig = {
  container: '#idos',
  // usePasskeys: window.localStorage.getItem("use"), <-- Check how to use later
  nodeUrl: process.env.NEXT_PUBLIC_IDOS_NODE_URL,
  evmGrantsOptions: {
    contractAddress: process.env.NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS,
    chainId: process.env.NEXT_PUBLIC_IDOS_CHAIN_ID,
  },
};
