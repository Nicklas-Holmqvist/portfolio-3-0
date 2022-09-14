import type { AppProps } from 'next/app';

import '../styles/globals.css';

import { FooterSection } from '../components/Footer';
import { NavHeader } from '../components/NavHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavHeader />
      <Component {...pageProps} />;
      <FooterSection />
    </>
  );
}

export default MyApp;
