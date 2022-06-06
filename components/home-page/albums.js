import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { albums } from '../../data/music';
import styles from './albums.module.scss';

import AppContext from '../../context/app-context';

const Albums = () => {
  const { setSelectedAlbum, setMenuMode, setOpen } = useContext(AppContext);

  const router = useRouter();
  const headerAnimation = useAnimation();
  const albumsAnimation = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.05,
  });

  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        opacity: 1,
        transition: { duration: 1 },
      });
      albumsAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [headerAnimation, albumsAnimation, inView]);

  return (
    <main className={styles.featured} ref={ref}>
      <motion.h2 initial={{ opacity: 0 }} animate={headerAnimation}>
        Albums
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        animate={albumsAnimation}
        className={styles['ft-container']}
      >
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
      </motion.div>
    </main>
  );
};

export default Albums;
