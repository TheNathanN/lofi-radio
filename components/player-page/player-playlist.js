import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../../context/app-context';
import { getAlbumInfo } from '../../data/music';

import styles from './player-playlist.module.scss';

const PlayerPlaylist = () => {
  const {
    setSelectedSong,
    selectedSong,
    setSelectedAlbum,
    selectedAlbum,
    setPlaylist,
    searchedAlbum,
  } = useContext(AppContext);

  const albumArray = getAlbumInfo(selectedAlbum);
  const searchedAlbumArray = getAlbumInfo(searchedAlbum);
  const _albumInfo = albumArray[0];
  const _searchedAlbumInfo = searchedAlbumArray[0];

  return (
    <>
      {/* --------- This shows if there is only an album selected and no search --------- */}
      {!_searchedAlbumInfo && _albumInfo && (
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
                className={
                  song.name === selectedSong
                    ? styles['selected-song']
                    : styles['song-details']
                }
                key={song.id}
                onClick={() => {
                  const createdPlaylist = [];
                  const albumSongs = _albumInfo.songs;
                  const songIndex = albumSongs.indexOf(song);

                  for (let i = songIndex; i < _albumInfo.songs.length; i++) {
                    createdPlaylist.push(_albumInfo.songs[i]);
                  }
                  setSelectedSong(song.name);
                  setPlaylist(createdPlaylist);
                }}
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
      {/* --------------------- This shows if there is a searched album ----------------*/}
      {_searchedAlbumInfo && (
        <div className={styles.playlist}>
          <Image
            src={_searchedAlbumInfo.img}
            alt={_searchedAlbumInfo.name}
            width={500}
            height={500}
          />
          <div className={styles['album-info']}>
            <h2>{_searchedAlbumInfo.name}</h2>
            <p>{_searchedAlbumInfo.artist}</p>
          </div>
          <div className={styles['song-list']}>
            {_searchedAlbumInfo.songs.map(song => (
              <div
                className={
                  song.name === selectedSong
                    ? styles['selected-song']
                    : styles['song-details']
                }
                key={song.id}
                onClick={() => {
                  const createdPlaylist = [];
                  const albumSongs = _searchedAlbumInfo.songs;
                  const songIndex = albumSongs.indexOf(song);

                  for (
                    let i = songIndex;
                    i < _searchedAlbumInfo.songs.length;
                    i++
                  ) {
                    createdPlaylist.push(_searchedAlbumInfo.songs[i]);
                  }
                  setSelectedAlbum(_searchedAlbumInfo.name);
                  setSelectedSong(song.name);
                  setPlaylist(createdPlaylist);
                }}
              >
                <p className={styles['song-name']}>
                  {`${_searchedAlbumInfo.songs.indexOf(song) + 1}. ${
                    song.name
                  }`}
                </p>
                <p className={styles['song-credits']}>{song.credits}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* ------------ This shows if there isn't an album selected or searched -------------- */}
      {!_albumInfo && <p className={styles['no-album']}>No album selected!</p>}
    </>
  );
};

export default PlayerPlaylist;
