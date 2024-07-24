import React, { useContext } from "react"
import AppContext from "../../context/app-context"
import { getAlbumInfo } from "../../data/music"

import styles from "./player-playlist.module.scss"

const PlayerPlaylist = () => {
  const {
    setSelectedSong,
    selectedSong,
    setSelectedAlbum,
    selectedAlbum,
    setPlaylist,
    setOpen,
    setMenuMode,
    searchedAlbum,
    audioRef,
  } = useContext(AppContext)

  const [_albumInfo] = getAlbumInfo(selectedAlbum)
  const [_searchedAlbumInfo] = getAlbumInfo(searchedAlbum)

  const songSelectHandler = (song) => {
    const createdPlaylist = []
    let albumSongs

    if (!searchedAlbum) {
      albumSongs = _albumInfo.songs
    } else {
      albumSongs = _searchedAlbumInfo.songs
    }

    const songIndex = albumSongs.indexOf(song)

    if (!searchedAlbum) {
      for (let i = songIndex; i < _albumInfo.songs.length; i++) {
        createdPlaylist.push(_albumInfo.songs[i])
      }
    } else {
      for (let i = songIndex; i < _searchedAlbumInfo.songs.length; i++) {
        createdPlaylist.push(_searchedAlbumInfo.songs[i])
      }
    }

    if (_searchedAlbumInfo) {
      setSelectedAlbum(_searchedAlbumInfo.name)
    }

    setSelectedSong(song.name)
    setPlaylist(createdPlaylist)

    if (audioRef.current) {
      audioRef.current.load()
    }
  }

  const onClickHandler = (song) => {
    songSelectHandler(song)
    setOpen(false)
    setMenuMode("main")
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* --------- This shows if there is only an album selected and no search --------- */}
      {!_searchedAlbumInfo && _albumInfo && (
        <div className={styles.playlist}>
          <img src={_albumInfo.img} alt={_albumInfo.name} />
          <div className={styles["album-info"]}>
            <h2>{_albumInfo.name}</h2>
            <p>{_albumInfo.artist}</p>
          </div>
          <div className={styles["song-list"]}>
            {_albumInfo.songs.map((song) => (
              <div
                className={
                  song.name === selectedSong
                    ? styles["selected-song"]
                    : styles["song-details"]
                }
                key={song.id}
                onClick={() => onClickHandler(song)}
              >
                <p className={styles["song-name"]}>
                  {`${_albumInfo.songs.indexOf(song) + 1}. ${song.name}`}
                </p>
                <p className={styles["song-credits"]}>{song.credits}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* --------------------- This shows if there is a searched album ----------------*/}
      {_searchedAlbumInfo && (
        <div className={styles.playlist}>
          <img src={_searchedAlbumInfo.img} alt={_searchedAlbumInfo.name} />
          <div className={styles["album-info"]}>
            <h2>{_searchedAlbumInfo.name}</h2>
            <p>{_searchedAlbumInfo.artist}</p>
          </div>
          <div className={styles["song-list"]}>
            {_searchedAlbumInfo.songs.map((song) => (
              <div
                className={
                  song.name === selectedSong
                    ? styles["selected-song"]
                    : styles["song-details"]
                }
                key={song.id}
                onClick={() => onClickHandler(song)}
              >
                <p className={styles["song-name"]}>
                  {`${_searchedAlbumInfo.songs.indexOf(song) + 1}. ${
                    song.name
                  }`}
                </p>
                <p className={styles["song-credits"]}>{song.credits}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* ------------ This shows if there isn't an album selected or searched -------------- */}
      {!_albumInfo && (
        <p className={styles["no-album"]} style={{ height: "100vh" }}>
          No album selected!
        </p>
      )}
    </>
  )
}

export default PlayerPlaylist
