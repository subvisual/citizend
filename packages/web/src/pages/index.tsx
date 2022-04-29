/**
 * Module dependencies.
 */

import { ConnectScreen } from 'src/components/screens/connect';
import { DashboardScreen } from 'src/components/screens/dashboard';
import { useSession } from 'src/context/session';
import Metatags from 'src/components/core/metatags';
import React from 'react';

/**
 * `Home` page.
 */

function Home() {
  const { active } = useSession();

  return (
    <>
      <Metatags />

      {active ? <DashboardScreen /> : <ConnectScreen />}
    </>
  );
}

// Prevents loosing context when params are being used.
Home.getInitialProps = () => ({});

/**
 * Export `Home` page.
 */

export default Home;
