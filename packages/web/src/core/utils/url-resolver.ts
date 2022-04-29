/**
 * Module dependencies.
 */

import { resolve } from 'url';

/**
 * Export `absoluteUrlResolver`.
 */

export function absoluteUrlResolver(path: string): string {
  const url: string = process.env.NEXT_PUBLIC_BASE_URL;

  return resolve(url, path);
}

/**
 * Export `addSearchParamsToUrl` util.
 */

export function addSearchParamsToUrl(
  originalUrl: string,
  key: string,
  value: string
): string {
  if (!originalUrl) {
    return '';
  }

  const url = new URL(originalUrl);

  url.searchParams.set(key, value);

  return url.toString();
}
