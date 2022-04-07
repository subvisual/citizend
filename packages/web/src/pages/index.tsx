/**
 * Module dependencies.
 */

import Metatags from 'src/components/core/metatags';
import React, { ReactElement } from 'react';

/**
 * `Home` page.
 */

const Home = (): ReactElement => {
  return (
    <>
      <Metatags />

      <div>{'Hello world'}</div>
    </>
  );
};

/**
 * Export `Home` page.
 */

export default Home;
