/**
 * Module dependencies.
 */

import { last } from 'lodash/last';
import { toast } from 'react-toastify';

/**
 * Export `onBlockchainReject`.
 */

export function onBlockchainReject(error: any) {
  if (error?.code === 4001) {
    return;
  }

  const message = error?.data?.message;

  if (message?.includes('exceeds balance')) {
    toast.error(
      "You don't have enough funds in your wallet. Please add funds to your wallet and try again!"
    );

    return;
  }

  const reason = last(message.split(':'));

  toast.error(
    <>
      {'Unfortunately, your transaction failed. \n'}

      {reason && (
        <small style={{ display: 'inline-block' }}>{`Reason: ${reason}`}</small>
      )}
    </>
  );
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
