import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

import FeaturedAlbums from '../components/featured-albums';

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
      <header className={styles.header}>
        <div className={styles['header-content']}>
          <h1>
            Welcome <span>to</span> Lofi Radio
          </h1>
          <button>
            <Link href='/albums'>
              <a>EXPLORE ALBUMS</a>
            </Link>
          </button>
        </div>
      </header>
      <main>
        <FeaturedAlbums />
      </main>
    </>
  );
};

export default HomePage;
