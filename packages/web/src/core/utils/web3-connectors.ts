/**
 * Module dependencies.
 */

import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

/**
 * `metamask` connector.
 */

const metamask = new InjectedConnector({
  supportedChainIds: [31337]
});

/**
 * `walletconnect` connector.
 */

const walletconnect = new WalletConnectConnector({
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
});

/**
 * Export `connectors`.
 */

export default {
  metamask,
  walletconnect
};
