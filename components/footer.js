import React from 'react';
import Link from 'next/link';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['footer-links']}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/player'>
            <a>Player</a>
          </Link>
        </div>
        <p>
          Coded by{' '}
          <Link href='/'>
            <a target='blank'>Nathan Nicholson</a>
          </Link>
        </p>
        <p>
          Music Sourced from{' '}
          <Link href='https://chillhop.com/'>
            <a target='blank'>Chillhop.com</a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
