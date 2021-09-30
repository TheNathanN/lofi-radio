import React from 'react';
import Head from 'next/head';

import PlayerTransition from '../components/player-page/player-transition';
import PlayerContainer from '../components/player-page/player-container';

const PlayerPage = () => {
  return (
    <>
      <Head>
        <title>Lofi Radio| Player</title>
        <meta
          name='description'
          content='A playlist of lofi music for relaxing.'
        />
      </Head>
      {/* <PlayerTransition /> */}
      <PlayerContainer />
    </>
  );
};

export default PlayerPage;
