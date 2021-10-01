import React, { useContext, useEffect } from 'react';
import styles from './player-container.module.scss';
import { getAlbumInfo } from '../../data/music';
import AppContext from '../../context/app-context';

import PlayerAlbums from './player-albums';
import PlayerPlaylist from './player-playlist';

const PlayerContainer = () => {
  const {
    setOnPlayer,
    setSelectedAlbum,
    selectedAlbum,
    selectedArtist,
    setSearchedAlbum,
  } = useContext(AppContext);

  useEffect(() => {
    setOnPlayer(true);
    setSearchedAlbum('');

    if (selectedArtist && !selectedAlbum) {
      const selected = getAlbumInfo(selectedAlbum);
      setSelectedAlbum(selected[0].name);
      return;
    }
  }, []);

  return (
    <section className={styles['player-container']}>
      <section className={styles['albums-container']}>
        <PlayerAlbums />
      </section>
      <section className={styles['player']}>player</section>
      <section className={styles['songs-container']}>
        <PlayerPlaylist />
      </section>
    </section>
  );
};

export default PlayerContainer;
