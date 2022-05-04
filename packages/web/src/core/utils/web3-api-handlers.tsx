/**
 * Module dependencies.
 */

import { toast } from 'react-toastify';

/**
 * Export `onBlockchainReject`.
 */

export function onBlockchainReject(error: any) {
  // eslint-disable-next-line no-console
  console.log("error: ", error);

  if (error?.code === 4001) {
    return;
  }

  const message = error?.data?.message;

  if (message?.includes('exceeds balance')) {
    toast.error(
      "You don't have enough funds in your wallet. Please add funds to your wallet and try again."
    );

    return;
  }

  toast.error(`
    Unfortunately, your transaction failed to be written to the blockchain.
    This is usually because of network congestion.
    Please try again.
  `);
}

/**
 * Module dependencies.
 */

export function onBlockchainResolve(message?: string) {
  return () => {
    toast.success(
      message ||
        'The transaction is now pending on the blockchain and it will be validated soon.'
    );
  };
}
