import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './nav-bar.module.scss';

import AppContext from '../context/app-context';

const NavBar = () => {
  const { onPlayer } = useContext(AppContext);

  return (
    <nav className={onPlayer ? styles['player-nav'] : styles['nav-bar']}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Lofi Radio</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
