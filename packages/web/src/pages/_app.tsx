/**
 * Module dependencies.
 */

import { AppProps, NextWebVitalsMetric } from 'next/app';
import { ContractsProvider } from 'src/context/contracts';
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import { GlobalStyle } from 'src/styles/global';
import { PageContent } from 'src/components/page-content';
import { ToastContainer } from 'react-toastify';
import { Web3ReactProvider } from '@web3-react/core';
import Head from 'next/head';
import React from 'react';
import packageJson from 'package.json';

/**
 * Performance debug.
 */

const performanceDebug = process.env.NEXT_PUBLIC_PERFORMANCE_DEBUG;
const debug: boolean = performanceDebug === 'true';

/**
 * Export `reportWebVitals`.
 *
 * Measure the performance of pages .
 */

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === 'production' && debug) {
    console.log(metric); // eslint-disable-line no-console
  }
}

/**
 * Get library.
 */

function getLibrary(provider: ExternalProvider): Web3Provider {
  const library = new Web3Provider(provider);

  library.pollingInterval = 12000;

  return library;
}

/**
 * `PageApp` page.
 */

const PageApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta content={'IE=edge'} httpEquiv={'X-UA-Compatible'} />

        <meta content={'text/html;charset=utf-8'} httpEquiv={'Content-Type'} />

        <meta
          content={
            'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
          }
          name={'viewport'}
        />

        <meta content={packageJson.version} name={'version'} />

        <meta content={'true'} name={'HandheldFriendly'} />

        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`
          }}
        />
      </Head>

      <GlobalStyle />

      <ToastContainer
        autoClose={10000}
        closeOnClick
        hideProgressBar
        position={'top-center'}
        theme={'dark'}
      />

      <Web3ReactProvider getLibrary={getLibrary}>
        <ContractsProvider>
          <PageContent>
            <Component {...pageProps} />
          </PageContent>
        </ContractsProvider>
      </Web3ReactProvider>
    </>
  );
};

/**
 * Export `PageApp` page.
 */

export default PageApp;
