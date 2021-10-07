import React, { useContext, useEffect, useState } from 'react';
import styles from './player-container.module.scss';
import AppContext from '../../context/app-context';

import { getAlbumInfo } from '../../data/music';

import PlayerAlbums from './player-albums';
import PlayerPlaylist from './player-playlist';
import PlayerController from './player-controller';

const PlayerContainer = () => {
  const { setOnPlayer, setSearchedAlbum, selectedAlbum, open, menuMode } =
    useContext(AppContext);

  const [_albumInfo] = getAlbumInfo(selectedAlbum);

  useEffect(() => {
    setOnPlayer(true);
    setSearchedAlbum('');
  }, [setOnPlayer, setSearchedAlbum]);

  return (
    <main
      className={styles['player-container']}
      style={
        _albumInfo && {
          background: `linear-gradient(9deg, ${
            _albumInfo ? _albumInfo.color2 : 'black'
          } , rgb(22, 22, 41) 30%)`,
        }
      }
    >
      <section
        className={`${styles['albums-container']} ${styles['open-albums']}`}
      >
        <PlayerAlbums />
      </section>
      <section className={`${styles['player']} ${styles['open-player']}`}>
        <PlayerController />
      </section>
      <section
        className={`${styles['songs-container']} ${styles['open-songs']}`}
      >
        <PlayerPlaylist />
      </section>
      {!open && menuMode === 'main' && (
        <section className={styles['main-menu']}>
          <p>Albums</p>
          <p>Playlist</p>
        </section>
      )}
    </main>
  );
};

export default PlayerContainer;
