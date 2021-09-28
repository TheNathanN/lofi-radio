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
    </nav>
  );
};

export default NavBar;
