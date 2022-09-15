import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { Hero } from '../components/Hero';
import { ToTop } from '../components/ToTop';
import { About } from '../components/About';
import { request } from '../lib/datocms';
import { ProjectSection } from '../components/ProjectSection';
import { GalleryCenterSection } from '../components/GalleryCenterSection';
import { GalleryStandardSection } from '../components/GalleryStandardSection';
import { dataQuery, DataQuery, Section } from '../queries/dataQuery';

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
  const activeGallery = useRouter();
  const findGallery = data.allSections.filter((section) => {
    return section.galleryButtonLink === activeGallery.asPath;
  });

  const motionKey = activeGallery.asPath.includes('gallery');

  const findSection = (sectionId: string) => {
    return data.allSections.find((section) => section.sectionId === sectionId);
  };
  const [showToTop, setShowToTop] = useState<boolean>(false);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const sections: { [key: string]: Section } = {
    project: findSection('project') || data.allSections[0],
    landscapes: findSection('landscapes') || data.allSections[1],
    oldBuildings: findSection('oldBuildings') || data.allSections[2],
    details: findSection('details') || data.allSections[3],
    about: findSection('about') || data.allSections[4],
  };

  const toggleShowToTop: () => void = () => {
    window.scrollY >= 200 ? setShowToTop(true) : setShowToTop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleShowToTop);
  });

  useEffect(() => {
    if (findGallery.length === 0) return setShowGallery(false);
    if (activeGallery.asPath === findGallery[0].galleryButtonLink)
      setShowGallery(true);
  }, [activeGallery, findGallery, data.allSections]);
  return (
    <>
      <Head>
        <title>{data.allHeads.title}</title>
        <meta
          name={data.allHeads.metaName}
          content={data.allHeads.metaContent}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        <Main
          variants={motionMain}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Hero />
          <ProjectSection data={sections.project} />
          <GalleryStandardSection data={sections.landscapes} />
          <GalleryCenterSection data={sections.oldBuildings} />
          <GalleryStandardSection data={sections.details} />
          <About data={sections.about} />
          {showToTop ? <ToTop /> : null}
        </Main>
      </AnimatePresence>
    </>
  );
};

export default Home;

const motionMain = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};

const Main = styled(motion.main)``;
