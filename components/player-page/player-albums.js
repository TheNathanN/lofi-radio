import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './player-albums.module.scss';

import { albums } from '../../data/music';

import AppContext from '../../context/app-context';

const PlayerAlbums = () => {
  const { selectedAlbum, setSelectedAlbum } = useContext(AppContext);

  return (
    <div className={styles.featured}>
      <h2>Albums</h2>
      <div className={styles['ft-container']}>
        {albums.map(album => (
          <div
            className={styles['album-icon']}
            key={album.name}
            onClick={e => {
              if (
                e.target.alt ||
                (e.target.outerText && e.target.outerText === album.name) ||
                (e.target.outerText && e.target.outerText === album.artist)
              ) {
                setSelectedAlbum(album.name);
              }
            }}
          >
            <Image src={album.img} alt={album.name} width={500} height={500} />
            <p className={styles['album-name']}>{album.name}</p>
            <p className={styles['artist']}>{album.artist}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerAlbums;
