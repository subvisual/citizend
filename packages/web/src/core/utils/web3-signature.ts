/**
 * Module dependencies.
 */

import { Signer, utils } from 'ethers';
import toLower from 'lodash/toLower';

/**
 * `fractalSignMessage`.
 */

const fractalSignMessage = 'Signature to validate address ownership';

/**
 * `getMessageBytes`.
 */

export function encodeMessage(message: string) {
  return utils.arrayify(utils.id(message));
}

/**
 * Export `signMessage`.
 */

export function signMessage(
  signer: Signer,
  address: string,
  message: string
): Promise<string> {
  return signer.signMessage(encodeMessage(message));
}

/**
 * Export `verifySignedMessage`.
 */

export function verifySignedMessage(message: string, signature: string) {
  return utils.verifyMessage(encodeMessage(message), signature);
}

/**
 * Export `verifyAccountOwnership`.
 */

export async function verifyAccountOwnership(
  address: string,
  signer: Signer | undefined
): Promise<boolean> {
  if (!address || !signer) {
    return Promise.reject('verifyAccountOwnership invalid args');
  }

  let signature = window.localStorage.getItem(address);

  if (!signature) {
    signature = await signMessage(signer, address, fractalSignMessage);
  }

  const recoveredAddress = verifySignedMessage(fractalSignMessage, signature);
  const isVerified = toLower(address) === toLower(recoveredAddress);

  if (isVerified) {
    window.localStorage.setItem(address, signature);
  }

  return isVerified;
}
