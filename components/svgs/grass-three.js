import React from 'react';
import { motion } from 'framer-motion';

import styles from './grass-three.module.scss';

const GrassThree = () => {
  return (
    <motion.svg
      className={styles['grass-three']}
      width='32'
      height='99'
      viewBox='0 0 32 99'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <path
        d='M11.3026 73.1953C11.5286 81.6536 12.9428 90.0378 15.5034 98.1009C15.5619 98.288 15.6232 98.4723 15.6846 98.6595H31.3614C31.3446 98.4919 31.3279 98.3048 31.3112 98.1009C30.2659 86.0614 24.2393 12.7857 31.445 0.254639C30.815 1.2712 10.0873 34.9404 11.3026 73.1953Z'
        fill='#4F8663'
      />
      <path
        d='M12.4789 98.101C12.6099 98.2881 12.7465 98.4752 12.8859 98.6595H24.6463C24.5571 98.5003 24.454 98.3132 24.3341 98.101C22.3913 94.5877 16.6407 84.0842 11.3027 73.1954C5.56601 61.4938 0.303236 49.3482 0.74645 44.9524C0.609802 45.9438 -3.35957 76.1668 12.4789 98.101Z'
        fill='#4F8663'
      />
    </motion.svg>
  );
};

export default GrassThree;
