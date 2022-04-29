/**
 * Module dependencies.
 */

import { addSearchParamsToUrl } from 'src/core/utils/url-resolver';
import { useRouter } from 'next/router';

/**
 * Fractal KYC URL.
 */

const fractalKycUrl =
  process.env.NEXT_PUBLIC_FRACTAL_KYC_URL ||
  'https://fractal.id/authorize?client_id=R_vWT88xBSxJ5ScZb33S5HDnHiMa5q8AdeaQj5phgGc&redirect_uri=https%3A%2F%2Fdiscovery-dao.vercel.app&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread';

/**
 * Export `useFractalKYCUrl` hook.
 */

export function useFractalKYCUrl() {
  const { query } = useRouter();
  const referralCode =
    query?.referralCode ?? window.localStorage.getItem('referralCode');

  if (!referralCode || typeof referralCode !== 'string') {
    return fractalKycUrl;
  }

  window.localStorage.setItem('referralCode', referralCode);

  return addSearchParamsToUrl(fractalKycUrl, 'state', referralCode);
}
