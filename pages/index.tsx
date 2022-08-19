import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { createGlobalStyle } from 'styled-components';

import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nicklas Holmqvist portfolio | Fotograf och utvecklare</title>
        <meta
          name="description"
          content="En portfolio skapad av Nicklas Holmqvist som en frontend utvecklare för att visa fotografier ur projektet Glömd värld i marks härad."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <header>
        {/* <Image src="" alt="" width="10" height="10" /> */}
        <nav></nav>
      </header>
      <Layout />
      <footer>Footer</footer>
    </>
  );
};

export default Home;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: #2A2A2A;
    color: #F0F0F0;
    font-family: 'Noto Sans', sans-serif;
  }

  h2 {
    font-family: 'Alike', serif;
    font-weight: lighter;
  }

  p {
    font-family: 'Lato', sans-serif;
  }
`;
