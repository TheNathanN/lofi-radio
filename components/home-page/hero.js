import React, { useEffect, useContext } from 'react';
import Link from 'next/link';

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
  const { setOnPlayer, setSearchedAlbum, setSelectedSong } =
    useContext(AppContext);

  useEffect(() => {
    setOnPlayer(false);
    setSearchedAlbum('');
    setSelectedSong('');
  }, [setOnPlayer, setSearchedAlbum, setSelectedSong]);

  return (
    <header className={styles.header}>
      <div className={styles.sun}></div>

      <h1>
        Welcome <span>to</span> Lofi Radio
      </h1>

      <Link href='/player'>
        <a>
          <button>OPEN PLAYER</button>
        </a>
      </Link>

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
