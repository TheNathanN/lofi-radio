import Head from 'next/head';

import Hero from '../components/hero';
import Albums from '../components/albums';

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
      <Hero />
      <Albums />
    </>
  );
};

export default HomePage;
