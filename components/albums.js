import React from 'react';
import Image from 'next/image';
import styles from './albums.module.scss';
import { albums } from '../data/music';

const Albums = () => {
  return (
    <main className={styles.featured}>
      <h2>Albums</h2>
      <div className={styles['ft-container']}>
        {albums.map(album => (
          <div className={styles['album-icon']}>
            <Image
              src={`${album.img}`}
              alt={`${album.name}`}
              width={400}
              height={400}
            />
            <p> {`${album.name}`}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Albums;
