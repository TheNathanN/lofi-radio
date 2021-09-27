import React from 'react';
import Link from 'next/link';
import styles from './nav-bar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles['nav-bar']}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Lofi Radio</a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href='/albums'>
            <a>Albums</a>
          </Link>
        </li>
        <li>
          <Link href='/player'>
            <a>Player</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
