/**
 * Module dependencies.
 */

import { absoluteUrlResolver } from 'src/core/utils/url-resolver';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { ReactElement, useMemo } from 'react';

/**
 * Default title.
 */

const defaultTitle = 'Citizend';

/**
 * `Props` type.
 */

type Props = {
  description?: string;
  image?: string;
  keywords?: string;
  pageTitle?: string;
  title?: string;
};

/**
 * `Metatags` component.
 */

const Metatags = (props: Props): ReactElement => {
  const { description, image, keywords, pageTitle, title } = props;
  const router = useRouter();
  const pageUrl = useMemo(() => {
    const route = router.asPath.split(/[?#]/)[0];

    return absoluteUrlResolver(route);
  }, [router]);

  const imageUrl = image ?? absoluteUrlResolver('/static/images/share.jpg');
  const normalizedPageTitle = useMemo(() => {
    if (pageTitle && pageTitle === defaultTitle) {
      return pageTitle;
    }

    if (pageTitle) {
      return `${pageTitle} - ${defaultTitle}`;
    }

    return defaultTitle;
  }, [pageTitle]);

  return (
    <Head>
      <title>{normalizedPageTitle}</title>

      {description && <meta content={description} name={'description'} />}

      {keywords && <meta content={keywords} name={'keywords'} />}

      <meta content={imageUrl} name={'image'} />

      {title && <meta content={title} property={'og:title'} />}

      {description && (
        <meta content={description} property={'og:description'} />
      )}

      <meta content={imageUrl} property={'og:image'} />

      <meta content={pageUrl} property={'og:url'} />

      <meta content={defaultTitle} property={'og:site_name'} />

      <meta content={'website'} property={'og:type'} />

      {title && <meta content={title} name={'twitter:title'} />}

      {description && (
        <meta content={description} name={'twitter:description'} />
      )}

      <meta content={imageUrl} name={'twitter:image'} />

      <meta content={'summary_large_image'} name={'twitter:card'} />

      <meta content={'Untile, hello@untile.pt'} name={'author'} />

      <meta content={defaultTitle} name={'copyright'} />

      <link href={pageUrl} rel={'canonical'} />

      {process.env.NODE_ENV === 'production' && (
        <meta content={'index, follow'} name={'robots'} />
      )}
    </Head>
  );
};

/**
 * Export `Metatags` component.
 */

export default Metatags;
