/**
 * Module dependencies.
 */

import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { utils } from 'ethers';

/**
 * `supportedChain` environment variable.
 */

const supportedChain: string = process.env.NEXT_PUBLIC_CHAIN_ID || '595';

/**
 * Export `supportedChainIds`.
 */

export const supportedChainIds = [Number(supportedChain)];

/**
 * `chainConfigs`.
 */

export const chainConfigs = {
  '595': {
    blockExplorerUrls: ['https://blockscout.mandala.acala.network/'],
    chainId: utils.hexValue(595),
    chainName: 'Mandala TC7',
    nativeCurrency: {
      decimals: 12,
      name: 'Acala USD',
      symbol: 'ACA'
    },
    rpcUrls: ['https://tc7-eth.aca-dev.network']
  },
  '686': {
    blockExplorerUrls: ['https://blockscout.karura.network/'],
    chainId: utils.hexValue(686),
    chainName: 'Karura',
    nativeCurrency: {
      decimals: 12,
      name: 'Karura USD',
      symbol: 'KAR'
    },
    rpcUrls: ['https://eth-rpc-karura.aca-api.network/']
  },
  '31337': {
    blockExplorerUrls: ['http://127.0.0.1:8545'],
    chainId: utils.hexValue(595),
    chainName: 'Localhost',
    nativeCurrency: {
      decimals: 12,
      name: 'Acala USD',
      symbol: 'ACA'
    },
    rpcUrls: ['/']
  }
};

/**
 * `chainConfig`.
 */

export const chainConfig = chainConfigs?.[supportedChain];
console.log("chainConfig: ", chainConfig);


/**
 * `metamask` connector.
 */

const metamask = new InjectedConnector({ supportedChainIds });

/**
 * `walletconnect` connector.
 */

const walletconnect = new WalletConnectConnector({
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  supportedChainIds
});

/**
 * Export `connectors`.
 */

export default {
  metamask,
  walletconnect
};
