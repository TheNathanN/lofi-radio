import React from 'react';
import Head from 'next/head';
import PlayerContainer from '../components/player-page/player-container';

const PlayerPage = () => {
  return (
    <>
      <Head>
        <title>Lofi Radio | Player</title>
        <meta
          name='description'
          content='A playlist of lofi music for relaxing.'
        />
      </Head>
      <PlayerContainer />
    </>
  );
};

export default PlayerPage;
