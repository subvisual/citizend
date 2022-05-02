/**
 * Module dependencies.
 */

import { ServerStyleSheet } from 'styled-components';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

/**
 * `PageDocument` page.
 */

class PageDocument extends Document<DocumentInitialProps> {
  /**
   * Get initial props.
   */

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  /**
   * Render.
   */

  render() {
    return (
      <Html>
        <Head>
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap'
            }
            rel={'stylesheet'}
          />

          <link
            as={'font'}
            crossOrigin={''}
            href={'/fonts/druk-wide-bold.otf'}
            rel={'preload'}
          />

          <link
            as={'font'}
            crossOrigin={''}
            href={'/fonts/druk-wide-medium.otf'}
            rel={'preload'}
          />

          <link
            href={'/favicon/apple-icon-57x57.png'}
            rel={'apple-touch-icon'}
            sizes={'57x57'}
          />

          <link
            href={'/favicon/apple-icon-60x60.png'}
            rel={'apple-touch-icon'}
            sizes={'60x60'}
          />

          <link
            href={'/favicon/apple-icon-72x72.png'}
            rel={'apple-touch-icon'}
            sizes={'72x72'}
          />

          <link
            href={'/favicon/apple-icon-76x76.png'}
            rel={'apple-touch-icon'}
            sizes={'76x76'}
          />

          <link
            href={'/favicon/apple-icon-114x114.png'}
            rel={'apple-touch-icon'}
            sizes={'114x114'}
          />

          <link
            href={'/favicon/apple-icon-120x120.png'}
            rel={'apple-touch-icon'}
            sizes={'120x120'}
          />

          <link
            href={'/favicon/apple-icon-144x144.png'}
            rel={'apple-touch-icon'}
            sizes={'144x144'}
          />

          <link
            href={'/favicon/apple-icon-152x152.png'}
            rel={'apple-touch-icon'}
            sizes={'152x152'}
          />

          <link
            href={'/favicon/apple-icon-180x180.png'}
            rel={'apple-touch-icon'}
            sizes={'180x180'}
          />

          <link
            href={'/favicon/android-icon-192x192.png'}
            rel={'icon'}
            sizes={'192x192'}
            type={'image/png'}
          />

          <link
            href={'/favicon/favicon-32x32.png'}
            rel={'icon'}
            sizes={'32x32'}
            type={'image/png'}
          />

          <link
            href={'/favicon/favicon-96x96.png'}
            rel={'icon'}
            sizes={'96x96'}
            type={'image/png'}
          />

          <link
            href={'/favicon/favicon-256x256.png'}
            rel={'icon'}
            sizes={'256x256'}
            type={'image/png'}
          />

          <link
            href={'/favicon/favicon-16x16.png'}
            rel={'icon'}
            sizes={'16x16'}
            type={'image/png'}
          />

          <link href={'/manifest.json'} rel={'manifest'} />
          <meta content={'#ffffff'} name={'msapplication-TileColor'} />
          <meta
            content={'/favicon/ms-icon-144x144.png'}
            name={'msapplication-TileImage'}
          />
          <meta content={'#ffffff'} name={'theme-color'} />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

/**
 * Export `PageDocument` page.
 */

export default PageDocument;
