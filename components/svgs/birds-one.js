import React from 'react';
import { motion } from 'framer-motion';

import styles from './birds-one.module.scss';

const BirdsOne = () => {
  return (
    <motion.svg
      className={styles['birds-one']}
      width='251'
      height='147'
      viewBox='0 0 251 147'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <path
        d='M244.524 5.17881L250.898 0.0715254C245.946 -0.475776 243.912 2.22969 243.079 4.37109C239.211 2.76183 235 4.87084 235 4.87084L247.752 9.50914C247.109 7.78755 245.989 6.2854 244.524 5.17881Z'
        fill='#3F3D56'
      />
      <path
        d='M228.524 142.179L234.898 137.072C229.946 136.524 227.912 139.23 227.079 141.371C223.211 139.762 219 141.871 219 141.871L231.752 146.509C231.109 144.788 229.989 143.285 228.524 142.179Z'
        fill='#3F3D56'
      />
      <path
        d='M9.52406 114.179L15.8977 109.072C10.9463 108.524 8.91186 111.23 8.07925 113.371C4.21102 111.762 0 113.871 0 113.871L12.7525 118.509C12.1091 116.788 10.9892 115.285 9.52406 114.179Z'
        fill='#3F3D56'
      />
    </motion.svg>
  );
};

export default BirdsOne;
