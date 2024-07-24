import React, { useContext } from "react"
import styles from "./player-albums.module.scss"

import { albums } from "../../data/music"

import AppContext from "../../context/app-context"

const PlayerAlbums = () => {
  const { setSelectedAlbum, setSearchedAlbum, selectedAlbum, setMenuMode } =
    useContext(AppContext)

  return (
    <div className={styles.featured}>
      <h2>Albums</h2>
      <div className={styles["ft-container"]}>
        {albums.map((album) => (
          <div
            className={styles["album-icon"]}
            key={album.name}
            onClick={(e) => {
              if (
                e.target.alt ||
                (e.target.outerText && e.target.outerText === album.name) ||
                (e.target.outerText && e.target.outerText === album.artist)
              ) {
                !selectedAlbum && setSelectedAlbum(album.name)
                selectedAlbum && setSearchedAlbum(album.name)
                setMenuMode("songs")
                window.scrollTo(0, 0)
              }
            }}
          >
            <img src={album.img} alt={album.name} />
            <p className={styles["album-name"]}>{album.name}</p>
            <p className={styles["artist"]}>{album.artist}</p>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerAlbums
