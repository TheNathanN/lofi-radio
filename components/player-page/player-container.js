import React, { useContext, useEffect } from 'react';
import styles from './player-container.module.scss';
import { albums } from '../../data/music';
import AppContext from '../../context/app-context';

import PlayerAlbums from './player-albums';

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
      const selected = albums.filter(album => album.artist === selectedArtist);
      setSelectedAlbum(selected[0].name);
      return;
    }
  }, []);

  const albumInfo = albums.filter(album => album.name === selectedAlbum);

  console.log(albumInfo[0]);

  return (
    <section className={styles['player-container']}>
      <div className={styles['albums-container']}>
        <PlayerAlbums />
      </div>
      <div className={styles['player']}>player</div>
      <div className={styles['songs-container']}>songs</div>
    </section>
  );
};

export default PlayerContainer;
