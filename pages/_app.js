import Head from 'next/head';
import '../styles/globals.scss';
import NavBar from '../components/nav-bar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <NavBar />
      <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;
