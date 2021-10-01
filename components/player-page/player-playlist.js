import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../../context/app-context';
import { getAlbumInfo } from '../../data/music';

import styles from './player-playlist.module.scss';

const PlayerPlaylist = () => {
  const { setSelectedSong, selectedAlbum, selectedSong, searchedAlbum } =
    useContext(AppContext);

  const albumArray = getAlbumInfo(selectedAlbum);
  const searchedAlbumArray = getAlbumInfo(searchedAlbum);
  const _albumInfo = albumArray[0];
  const _searchedAlbumInfo = searchedAlbumArray[0];

  return (
    <>
      {/* This shows if there is an album selected */}
      {_albumInfo && (
        <div className={styles.playlist}>
          <Image
            src={_searchedAlbumInfo ? _searchedAlbumInfo.img : _albumInfo.img}
            alt={_searchedAlbumInfo ? _searchedAlbumInfo.name : _albumInfo.name}
            width={500}
            height={500}
          />
          <div>
            <h2>
              {_searchedAlbumInfo ? _searchedAlbumInfo.name : _albumInfo.name}
            </h2>
            <p>
              {_searchedAlbumInfo
                ? _searchedAlbumInfo.artist
                : _albumInfo.artist}
            </p>
          </div>
          <div className={styles['song-list']}>
            {/* If there isn't a searched album the playlist will show the selected album */}
            {!_searchedAlbumInfo &&
              _albumInfo.songs.map(song => (
                <>
                  <div className={styles['song-details']}>
                    {`${_albumInfo.songs.indexOf(song) + 1}. ${song.name}`}
                  </div>
                  <p className={styles['song-credits']}>{song.credits}</p>
                </>
              ))}
            {/* If there is a searched album the playlist will show the searched album */}
            {_searchedAlbumInfo &&
              _searchedAlbumInfo.songs.map(song => (
                <>
                  <div className={styles['song-details']}>
                    {`${_searchedAlbumInfo.songs.indexOf(song) + 1}. ${
                      song.name
                    }`}
                  </div>
                  <p className={styles['song-credits']}>{song.credits}</p>
                </>
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
