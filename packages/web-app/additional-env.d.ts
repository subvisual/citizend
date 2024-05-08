declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_WC_PROJECT_ID: string;
      NEXT_PUBLIC_ENABLE_TESTNETS: string;
      NEXT_PUBLIC_PROFILE_PROVIDER_BASE: string;
      NEXT_PUBLIC_IDOS_NODE_URL: string;
      NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS_MAINNET: `0x${string}`;
      NEXT_PUBLIC_IDOS_CONTRACT_ADDRESS_ARBITRUM: `0x${string}`;
      NEXT_CITIZEND_WALLET_PRIVATE_KEY: `0x${string}`;
      NEXT_PUBLIC_CONTRIBUTE_OPEN: string;
      NEXT_PUBLIC_APPLY_OPEN: string;
      NEXT_ACTIVE_CAMPAIGN_API_KEY: string;
      NEXT_ACTIVE_CAMPAIGN_ACCOUNT_NAME: string;
      NEXT_PUBLIC_ALCHEMY_MAINNET: string;
      NEXT_PUBLIC_ALCHEMY_SEPOLIA: string;
      NEXT_PUBLIC_DAPP_HOST: string;
    }
  }
}

export {};
