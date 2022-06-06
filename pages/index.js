import Head from 'next/head';

import Hero from '../components/home-page/hero';
import Albums from '../components/home-page/albums';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Lofi Radio | Home</title>
        <meta
          name='description'
          content='A relaxing radio app for all of your lofi needs.'
        />
      </Head>
      <div>
        <Hero />
        <Albums />
      </div>
    </>
  );
};

export default HomePage;
