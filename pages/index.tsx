import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { Layout } from '../components/Layout';
import { request } from '../lib/datocms';
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
      <NavHeader navLinks={data.allNavigations} logoData={data.logo} />
      <Layout sectionData={data.allSections} iconData={data.allIcons} />
      <FooterSection footerData={data.allFooters} />
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
  padding-bottom: 0.8rem;  
}

a {
  margin: 0px;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  color: #f0f0f0;
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  p {
    padding: 0;
  }
}

`;
