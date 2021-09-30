import Head from 'next/head';
import '../styles/globals.scss';

import AppState from '../context/app-state';

import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <AppState>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </AppState>
    </>
  );
}

export default MyApp;
