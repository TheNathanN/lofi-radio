import React, { useContext, useEffect, useState } from 'react';
import styles from './player-container.module.scss';
import AppContext from '../../context/app-context';

import { getAlbumInfo } from '../../data/music';

import PlayerAlbums from './player-albums';
import PlayerPlaylist from './player-playlist';
import PlayerController from './player-controller';

const PlayerContainer = () => {
  const {
    setOnPlayer,
    setSearchedAlbum,
    selectedAlbum,
    open,
    menuMode,
    setMenuMode,
  } = useContext(AppContext);

  const [_albumInfo] = getAlbumInfo(selectedAlbum);

  useEffect(() => {
    setOnPlayer(true);
    setSearchedAlbum('');
  }, [setOnPlayer, setSearchedAlbum, setMenuMode]);

  return (
    <main
      className={styles['player-container']}
      style={
        _albumInfo && {
          background: `linear-gradient(9deg, ${
            _albumInfo ? _albumInfo.color2 : 'black'
          } , rgb(22, 22, 41) 60%)`,
        }
      }
    >
      <section
        className={
          open && menuMode === 'albums'
            ? `${styles['albums-container']} ${styles['open-albums']}`
            : `${styles['albums-container']}`
        }
      >
        <PlayerAlbums />
      </section>
      <section
        className={
          open
            ? `${styles['player']} ${styles['open-player']}`
            : `${styles['player']}`
        }
      >
        <PlayerController />
      </section>
      <section
        className={
          open && menuMode === 'songs'
            ? `${styles['songs-container']} ${styles['open-songs']}`
            : `${styles['songs-container']}`
        }
      >
        <PlayerPlaylist />
      </section>
      {open && menuMode === 'main' && (
        <section className={styles['main-menu']}>
          <p onClick={() => setMenuMode('albums')}>Albums</p>
          <p onClick={() => setMenuMode('songs')}>Playlist</p>
        </section>
      )}
    </main>
  );
};

export default PlayerContainer;
