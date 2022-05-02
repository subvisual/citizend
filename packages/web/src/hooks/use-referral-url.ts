/**
 * Module dependencies.
 */

import { Web3Provider } from '@ethersproject/providers';
import { addSearchParamsToUrl } from 'src/core/utils/url-resolver';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

/**
 * Export `useReferralUrl` hook.
 */

export function useReferralUrl(): string | undefined {
  const { account } = useWeb3React<Web3Provider>();

  if (!account) {
    return undefined;
  }

  return addSearchParamsToUrl(
    window.location.href,
    'referralCode',
    ethers.utils.keccak256(account)
  );
}
