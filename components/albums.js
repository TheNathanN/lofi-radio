import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './albums.module.scss';

import { albums } from '../data/music';

const Albums = () => {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push('/player');
  };

  return (
    <main className={styles.featured}>
      <h2>Albums</h2>
      <div className={styles['ft-container']}>
        {albums.map(album => (
          <div
            className={styles['album-icon']}
            key={album.name}
            onClick={handleClick}
          >
            <Image src={album.img} alt={album.name} width={500} height={500} />
            <p className={styles['album-name']}>{album.name}</p>
            <p className={styles['artist']}>{album.artist}</p>
            <p></p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Albums;
