import React, { useContext } from 'react';
import AppContext from '../../context/app-context';
import { albums } from '../../data/music';

import styles from './player-playlist.module.scss';

const PlayerPlaylist = () => {
  const { selectedAlbum, selectedSong, searchedAlbum } = useContext(AppContext);
  return (
    <section>
      <div></div>
    </section>
  );
};

export default PlayerPlaylist;
