import type { NextPage } from 'next';
import Head from 'next/head';

import { createGlobalStyle } from 'styled-components';

import { Layout } from '../components/Layout';
import { NavHeader } from '../components/NavHeader';

const Home: NextPage = () => {
  const GlobalStyles = createGlobalStyle`
  html,body {
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

  a {
    font-family: 'Lato', sans-serif;
  }
`;

  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Nicklas Holmqvist portfolio | Fotograf och utvecklare</title>
        <meta
          name="description"
          content="En portfolio skapad av Nicklas Holmqvist som en frontend utvecklare för att visa fotografier ur projektet Glömd värld i marks härad."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader />
      <Layout />
      <footer>Footer</footer>
    </>
  );
};

export default Home;
