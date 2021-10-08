import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './nav-bar.module.scss';

import AppContext from '../context/app-context';

const NavBar = () => {
  const { onPlayer, setOpen, open, setMenuMode } = useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);

  const closeHandler = () => {
    setOpen(!open);
    setMenuMode('main');
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    if (windowWidth <= 1200) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  }, [setWindowWidth, windowWidth, setMobileNav]);

  return (
    <nav className={onPlayer ? styles['player-nav'] : styles['nav-bar']}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>Lofi Radio</a>
        </Link>
      </div>
      {mobileNav && onPlayer && (
        <div className={styles.icons}>
          {!open && (
            <i className='fas fa-bars' onClick={() => setOpen(!open)}></i>
          )}
          {open && <i className='fas fa-times' onClick={closeHandler}></i>}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
