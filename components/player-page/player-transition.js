import React from 'react';

import styles from './player-transition.module.scss';

import PhoneContainer from '../svgs/phone-svg/phone-container';

const PlayerTransition = () => {
  return (
    <section className={styles['player-container']}>
      <PhoneContainer />
    </section>
  );
};

export default PlayerTransition;
