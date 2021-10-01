import React, { useContext } from 'react';
import Image from 'next/image';
import styles from './player-controller.module.scss';
import AppContext from '../../context/app-context';
import { albums } from '../../data/music';

const PlayerController = () => {
  return (
    <div className={styles.controller}>
      <div></div>
    </div>
  );
};

export default PlayerController;
