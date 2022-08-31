import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { request } from '../lib/datocms';

import { Layout } from '../components/Layout';
import { NavHeader } from '../components/NavHeader';
import { FooterSection } from '../components/Footer';
import { dataQuery, DataQuery } from '../queries/dataQuery';

export const getStaticProps: GetStaticProps<{
  [key: string]: DataQuery;
}> = async () => {
  const data: DataQuery = await request({
    query: dataQuery,
  });
  return {
    props: { data },
  };
};

const Home: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{data.allHeads.title}</title>
        <meta
          name={data.allHeads.metaName}
          content={data.allHeads.metaContent}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader navLinks={data.allNavigations} iconData={data.allIcons} />
      <Layout />
      <FooterSection />
    </>
  );
};

export default Home;

const GlobalStyles = createGlobalStyle`
html,body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #2A2A2A;
  color: #F0F0F0;
  font-family: 'Noto Sans', sans-serif;
  scroll-behavior: smooth;
}

h2 {
  margin: 0px;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  font-family: 'Alike', serif;
  font-weight: 100;
}

h3 {
  margin: 0px;
  padding-bottom: 0.5rem;
  font-size: 3rem;
  font-family: 'Lato', sans-serif;
}

p {
  margin: 0px;
  font-family: 'Lato', sans-serif;
  line-height: 1.4rem;
}

a {
  margin: 0px;
  font-family: 'Lato', sans-serif;
}
ul {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}
`;
