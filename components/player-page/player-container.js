import React, { useContext, useEffect, useState } from 'react';
import styles from './player-container.module.scss';
import AppContext from '../../context/app-context';

import PlayerAlbums from './player-albums';
import PlayerPlaylist from './player-playlist';
import PlayerController from './player-controller';

const PlayerContainer = () => {
  const { setOnPlayer, setSearchedAlbum } = useContext(AppContext);

  useEffect(() => {
    setOnPlayer(true);
    setSearchedAlbum('');
  }, [setOnPlayer, setSearchedAlbum]);

  return (
    <main className={styles['player-container']}>
      <section className={styles['albums-container']}>
        <PlayerAlbums />
      </section>
      <section className={styles['player']}>
        <PlayerController />
      </section>
      <section className={styles['songs-container']}>
        <PlayerPlaylist />
      </section>
    </main>
  );
};

export default PlayerContainer;
