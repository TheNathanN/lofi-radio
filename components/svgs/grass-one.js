import React from 'react';
import { motion } from 'framer-motion';

import styles from './grass-one.module.scss';

const GrassOne = () => {
  return (
    <motion.svg
      className={styles['grass-one']}
      width='32'
      height='99'
      viewBox='0 0 32 99'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <path
        d='M11.0956 72.9407C11.3216 81.399 12.7358 89.7832 15.2964 97.8463C15.3549 98.0334 15.4162 98.2177 15.4775 98.4048H31.1543C31.1376 98.2372 31.1209 98.0501 31.1042 97.8463C30.0589 85.8068 24.0323 12.531 31.2379 0C30.608 1.01656 9.88026 34.6858 11.0956 72.9407Z'
        fill='#4F8663'
      />
      <path
        d='M12.2719 97.8463C12.4029 98.0334 12.5395 98.2205 12.6789 98.4049H24.4393C24.3501 98.2457 24.247 98.0586 24.1271 97.8463C22.1842 94.3331 16.4337 83.8296 11.0956 72.9407C5.35898 61.2392 0.0962044 49.0935 0.539419 44.6978C0.402771 45.6892 -3.5666 75.9121 12.2719 97.8463Z'
        fill='#4F8663'
      />
    </motion.svg>
  );
};

export default GrassOne;
