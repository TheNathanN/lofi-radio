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
        <link rel='apple-touch-icon' href='/favicon.png' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
          integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
          crossOrigin='anonymous'
        />
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
