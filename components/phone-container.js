import React from 'react';

import styles from './phone-container.module.scss';

import Phone from './phone-svg/phone-svg';

const PhoneContainer = () => {
  return (
    <div className={styles['phone-container']}>
      <Phone />
    </div>
  );
};

export default PhoneContainer;
