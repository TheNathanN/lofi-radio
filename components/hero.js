import React from 'react';
import Link from 'next/link';

import styles from './hero.module.scss';

import Person from './svgs/person';
import TreeOne from './svgs/tree-one';
import TreeTwo from './svgs/tree-two';

const Hero = () => {
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

      <TreeOne />
      <TreeTwo />
      <Person />
      <div className={styles.grass}></div>
    </header>
  );
};

export default Hero;
