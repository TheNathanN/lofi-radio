import React from 'react';
import { motion } from 'framer-motion';

import styles from './grass-two.module.scss';

const GrassTwo = () => {
  return (
    <motion.svg
      className={styles['grass-two']}
      width='32'
      height='99'
      viewBox='0 0 32 99'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <path
        d='M20.1423 72.9407C19.9163 81.399 18.5022 89.7832 15.9416 97.8463C15.8831 98.0334 15.8217 98.2177 15.7604 98.4048H0.0836105C0.100334 98.2372 0.11706 98.0501 0.133783 97.8463C1.17909 85.8068 7.20566 12.531 0 0C0.629955 1.01656 21.3577 34.6858 20.1423 72.9407Z'
        fill='#4F8663'
      />
      <path
        d='M18.9661 97.8463C18.835 98.0334 18.6985 98.2205 18.5591 98.4049H6.79868C6.88788 98.2457 6.991 98.0586 7.11083 97.8463C9.0537 94.3331 14.8043 83.8296 20.1423 72.9407C25.879 61.2392 31.1417 49.0935 30.6985 44.6978C30.8352 45.6892 34.8045 75.9121 18.9661 97.8463Z'
        fill='#4F8663'
      />
    </motion.svg>
  );
};

export default GrassTwo;
