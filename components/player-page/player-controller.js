import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './player-controller.module.scss';
import AppContext from '../../context/app-context';
import { getAlbumInfo } from '../../data/music';

const PlayerController = () => {
  const {
    audioRef,
    progressRef,
    selectedAlbum,
    setSelectedAlbum,
    setSelectedSong,
    selectedSong,
    playlist,
    setPlaylist,
  } = useContext(AppContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [animationPercentage, setAnimationPercentage] = useState(0);

  const [_albumInfo] = getAlbumInfo(selectedAlbum);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else if (!isPlaying && selectedSong) {
      audioRef.current.pause();
    } else {
      return;
    }
  }, [audioRef, isPlaying, selectedSong, progressRef]);

  // Track Bar Handlers

  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPerc = Math.round((roundedCurrent / roundedDuration) * 100);
    setDuration(duration);
    setCurrentTime(current);
    setAnimationPercentage(animationPerc);
  };

  const formatTime = secs => {
    const minutes = Math.floor(secs / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMinutes}:${returnSeconds}`;
  };

  const progressHandler = e => {
    audioRef.current.currentTime = progressRef.current.value;
  };

  // Control Handlers

  const playPauseHandler = () => {
    const prevVal = isPlaying;
    setIsPlaying(!prevVal);
    if (!prevVal) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const nextSongHandler = () => {
    const currentPlaylist = [...playlist];
    currentPlaylist.shift();
    if (currentPlaylist.length >= 1) {
      setPlaylist(currentPlaylist);
      setSelectedSong(currentPlaylist[0].name);
      audioRef.current.load();
    } else {
      setIsPlaying(false);
      setSelectedSong('');
      setSelectedAlbum('');
    }
  };

  const prevSongHandler = () => {
    const currentPlaylist = [...playlist];
    const albumSongs = _albumInfo.songs;
    const currentSong = playlist[0];
    const currentSongIndex = albumSongs.indexOf(currentSong);
    const prevSongArr = albumSongs.filter(song => {
      return albumSongs.indexOf(song) === currentSongIndex - 1;
    });
    const [prevSong] = prevSongArr;

    currentPlaylist.unshift(prevSong);

    if (prevSong) {
      setPlaylist(currentPlaylist);
      setSelectedSong(currentPlaylist[0].name);
      audioRef.current.load();
    } else {
      setIsPlaying(false);
    }
  };

  //Add the Styles for Track

  const trackAnim = {
    transform: `translateX(${animationPercentage}%)`,
    background: `${_albumInfo ? _albumInfo.color1 : 'black'}`,
  };

  return (
    <div className={styles['controller-container']}>
      {selectedAlbum && (
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
            <audio
              onTimeUpdate={timeUpdateHandler}
              onLoadedMetadata={timeUpdateHandler}
              ref={audioRef}
              onEnded={nextSongHandler}
            >
              <source src={playlist[0].audio} />
            </audio>

            <div className={styles['progress-bar']}>
              {/* current time */}
              <div className={styles.time}>{formatTime(currentTime)}</div>
              {/* progress bar */}
              <div
                className={styles['track']}
                style={{
                  background: `${_albumInfo ? _albumInfo.color2 : 'white'}`,
                  border: `2px solid ${
                    _albumInfo ? _albumInfo.color1 : 'white'
                  }`,
                }}
              >
                <input
                  type='range'
                  min={0}
                  max={duration && !isNaN(duration) ? duration : 0}
                  ref={progressRef}
                  value={currentTime}
                  onChange={progressHandler}
                />
                <div
                  className={styles['animate-track']}
                  style={trackAnim}
                ></div>
              </div>
              {/* duration */}
              <div className={styles.duration}>
                {duration && !isNaN(duration) ? formatTime(duration) : '00:00'}
              </div>
            </div>

            <div className={styles['control-btns']}>
              <button onClick={prevSongHandler}>
                <i className='fas fa-step-backward'></i>
              </button>
              <button onClick={playPauseHandler}>
                {!isPlaying ? (
                  <i className='fas fa-play'></i>
                ) : (
                  <i className='fas fa-pause'></i>
                )}
              </button>
              <button onClick={nextSongHandler}>
                <i className='fas fa-step-forward'></i>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Shows if there is no selected song*/}
      {!selectedAlbum && (
        <p className={styles.empty}>
          Choose an album and song to start listening!
        </p>
      )}
    </div>
  );
};

export default PlayerController;
