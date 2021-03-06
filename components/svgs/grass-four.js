import React from 'react';
import { motion } from 'framer-motion';

import styles from './grass-four.module.scss';

const GrassFour = () => {
  return (
    <motion.svg
      className={styles['grass-four']}
      width='25'
      height='78'
      viewBox='0 0 25 78'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.1 }}
    >
      <path
        d='M15.9381 57.3066C15.7617 63.9058 14.6584 70.4473 12.6606 76.7382C12.615 76.8841 12.5671 77.0279 12.5193 77.1739H0.288146C0.301193 77.0432 0.314267 76.8972 0.327319 76.7382C1.14287 67.3449 5.84479 10.1747 0.2229 0.397888C0.714409 1.19102 16.8863 27.4599 15.9381 57.3066Z'
        fill='#4F8663'
      />
      <path
        d='M15.0204 76.7382C14.9182 76.8841 14.8116 77.0301 14.7028 77.1739H5.52728C5.59688 77.0497 5.67733 76.9038 5.77084 76.7382C7.2867 73.9971 11.7733 65.8022 15.9381 57.3066C20.4139 48.177 24.52 38.7009 24.1742 35.2713C24.2807 36.0448 27.3777 59.625 15.0204 76.7382Z'
        fill='#4F8663'
      />
    </motion.svg>
  );
};

export default GrassFour;
