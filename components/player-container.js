import React, { useContext } from 'react';

import AppContext from '../context/app-context';

import styles from './player-container.module.scss';

const PlayerContainer = () => {
  const { selectedAlbum } = useContext(AppContext);
  console.log(selectedAlbum);
  return (
    <section className={styles['player-container']}>
      <div className={styles['albums-container']}>album</div>
      <div className={styles['player']}>player</div>
      <div className={styles['songs-container']}>songs</div>
    </section>
  );
};

export default PlayerContainer;
