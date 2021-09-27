import React from 'react';
import Image from 'next/image';
import styles from './featured-albums.module.scss';
import { albums } from '../data/music';

const FeaturedAlbums = () => {
  return (
    <section className={styles.featured}>
      <h2>Featured Albums</h2>
      <div className={styles['ft-container']}>
        {albums.map(
          album =>
            album.featured && (
              <div className={styles['album-icon']}>
                <Image
                  src={`${album.img}`}
                  alt={`${album.name}`}
                  width={400}
                  height={400}
                />
                <p> {`${album.name}`}</p>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default FeaturedAlbums;
