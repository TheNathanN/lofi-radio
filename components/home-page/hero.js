import React, { useEffect, useContext } from 'react';
import router, { useRouter } from 'next/router';

import styles from './hero.module.scss';
import AppContext from '../../context/app-context';

import Person from '../svgs/person';
import GrassOne from '../svgs/grass-one';
import GrassTwo from '../svgs/grass-two';
import GrassThree from '../svgs/grass-three';
import GrassFour from '../svgs/grass-four';
import TreeOne from '../svgs/tree-one';
import TreeTwo from '../svgs/tree-two';
import BirdsOne from '../svgs/birds-one';
import BirdsTwo from '../svgs/birds-two';

const Hero = () => {
  const {
    setOnPlayer,
    setSearchedAlbum,
    setSelectedSong,
    setSelectedAlbum,
    setOpen,
    setMenuMode,
  } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    setOnPlayer(false);
    setSearchedAlbum('');
    setSelectedSong('');
    setSelectedAlbum('');
    setOpen(false);
  }, [
    setOnPlayer,
    setSearchedAlbum,
    setSelectedSong,
    setSelectedAlbum,
    setOpen,
  ]);

  const onClickHandler = () => {
    setMenuMode('albums');
    router.push('player');
    setOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.sun}></div>

      <h1>
        Welcome <span>to</span> Lofi Radio
      </h1>

      <div className={styles.btn} onClick={onClickHandler}>
        OPEN PLAYER
      </div>

      <Person />
      <GrassOne />
      <GrassTwo />
      <GrassThree />
      <GrassFour />
      <TreeOne />
      <TreeTwo />
      <BirdsOne />
      <BirdsTwo />
      <div className={styles.grass}></div>
    </header>
  );
};

export default Hero;
