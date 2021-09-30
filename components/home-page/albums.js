import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { albums } from '../../data/music';
import styles from './albums.module.scss';

import AppContext from '../../context/app-context';

const Albums = () => {
  const { setSelectedAlbum, setSelectedArtist, selectedAlbum, selectedArtist } =
    useContext(AppContext);

  const router = useRouter();

  return (
    <main className={styles.featured}>
      <h2>Albums</h2>
      <div className={styles['ft-container']}>
        {albums.map(album => (
          <div
            className={styles['album-icon']}
            key={album.name}
            onClick={e => {
              if (
                e.target.alt ||
                (e.target.outerText && e.target.outerText === album.name)
              ) {
                if (selectedArtist) {
                  setSelectedArtist('');
                }
                setSelectedAlbum(album.name);
                router.push('/player');
              }

              if (e.target.outerText && e.target.outerText === album.artist) {
                if (selectedAlbum) {
                  setSelectedAlbum('');
                }
                setSelectedArtist(e.target.outerText);
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
    </main>
  );
};

export default Albums;
