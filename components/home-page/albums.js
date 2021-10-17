import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { albums } from '../../data/music';
import styles from './albums.module.scss';

import AppContext from '../../context/app-context';

const Albums = () => {
  const { setSelectedAlbum, setMenuMode, setOpen } = useContext(AppContext);

  const router = useRouter();

  return (
    <motion.main
      className={styles.featured}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.3 }}
    >
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
                if (window.innerWidth <= 1200) {
                  setMenuMode('songs');
                  setOpen(true);
                }

                router.push('/player');
              }
            }}
          >
            <Image src={album.img} alt={album.name} width={500} height={500} />
            <p className={styles['album-name']}>{album.name}</p>
            <p className={styles['artist']}>{album.artist}</p>
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default Albums;
