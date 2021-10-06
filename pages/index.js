import Head from 'next/head';
import { motion } from 'framer-motion';

import Hero from '../components/home-page/hero';
import Albums from '../components/home-page/albums';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Lofi Radio| Home</title>
        <meta
          name='description'
          content='A relaxing radio app for all of your lofi needs.'
        />
      </Head>
      <motion.div exit={{ opacity: 0 }}>
        <Hero />
        <Albums />
      </motion.div>
    </>
  );
};

export default HomePage;
