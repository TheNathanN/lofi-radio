import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './player-controller.module.scss';
import AppContext from '../../context/app-context';
import { getAlbumInfo } from '../../data/music';

const PlayerController = () => {
  const { selectedAlbum, selectedSong, playlist, setPlaylist } =
    useContext(AppContext);
  const albumArray = getAlbumInfo(selectedAlbum);
  const _albumInfo = albumArray[0];

  console.log(albumArray);
  return (
    <div className={styles.controller}>
      {selectedSong && (
        <>
          <Image
            src={_albumInfo.img}
            alt={_albumInfo.name}
            width={500}
            height={500}
          />
          <div>
            <p> {selectedSong} </p>
            <p> {selectedSong.credits} </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerController;
