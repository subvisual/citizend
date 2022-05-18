/**
 * Module dependencies.
 */

import { MetaMaskInpageProvider } from '@metamask/providers';

/**
 * Modules declarations.
 */

declare module '*.svg';
declare module '*.css';
declare module '*.json';
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}
