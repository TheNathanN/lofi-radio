import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../../context/app-context';
import { getAlbumInfo } from '../../data/music';

import styles from './player-playlist.module.scss';

const PlayerPlaylist = () => {
  const { setSelectedSong, selectedAlbum } = useContext(AppContext);

  const albumArray = getAlbumInfo(selectedAlbum);
  const _albumInfo = albumArray[0];

  return (
    <>
      {/* This shows if there is an album selected */}
      {_albumInfo && (
        <div className={styles.playlist}>
          <Image
            src={_albumInfo.img}
            alt={_albumInfo.name}
            width={500}
            height={500}
          />
          <div className={styles['album-info']}>
            <h2>{_albumInfo.name}</h2>
            <p>{_albumInfo.artist}</p>
          </div>
          <div className={styles['song-list']}>
            {_albumInfo.songs.map(song => (
              <div
                className={styles['song-details']}
                key={song.id}
                onClick={() => setSelectedSong(song.name)}
              >
                <p className={styles['song-name']}>
                  {`${_albumInfo.songs.indexOf(song) + 1}. ${song.name}`}
                </p>
                <p className={styles['song-credits']}>{song.credits}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* This shows if there isn't an album selected */}
      {!_albumInfo && <p className={styles['no-album']}>No album selected!</p>}
    </>
  );
};

export default PlayerPlaylist;
