import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './player-controller.module.scss';
import AppContext from '../../context/app-context';
import { getAlbumInfo } from '../../data/music';

const PlayerController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { audioPlayer, selectedAlbum, selectedSong, playlist, setPlaylist } =
    useContext(AppContext);
  const albumArray = getAlbumInfo(selectedAlbum);
  const _albumInfo = albumArray[0];

  const playPauseHandler = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.load();
      audioPlayer.current.play();
    } else if (!isPlaying && selectedSong) {
      audioPlayer.current.load();
      audioPlayer.current.pause();
    } else {
      return;
    }
  }, [isPlaying, audioPlayer, selectedSong]);

  return (
    <div className={styles['controller-container']}>
      {selectedSong && (
        <div className={styles['album-photo']}>
          <Image
            src={_albumInfo.img}
            alt={_albumInfo.name}
            width={500}
            height={500}
          />
          <div className={styles['song-credits']}>
            <p className={styles['song-name']}> {selectedSong} </p>
            <p className={styles['artists-name']}> {playlist[0].credits} </p>
          </div>
          <div className={styles.player}>
            <audio ref={audioPlayer}>
              <source src={playlist[0].audio} />
            </audio>
            <div className={styles['progress-bar']}>
              {/* current time */}
              <div className={styles.time}>0:00</div>
              {/* progress bar */}

              <input type='range' />

              {/* duration */}
              <div className={styles.duration}>2:50</div>
            </div>

            <div className={styles['control-btns']}>
              <button>
                <i className='fas fa-step-backward'></i>
              </button>
              <button onClick={playPauseHandler}>
                {!isPlaying ? (
                  <i className='fas fa-play'></i>
                ) : (
                  <i className='fas fa-pause'></i>
                )}
              </button>
              <button>
                <i className='fas fa-step-forward'></i>
              </button>
            </div>
          </div>
        </div>
      )}
      {!selectedSong && <p>Choose an album and song to start listening!</p>}
    </div>
  );
};

export default PlayerController;
