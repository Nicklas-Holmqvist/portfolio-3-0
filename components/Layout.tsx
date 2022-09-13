import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { Hero } from './Hero';
import { About } from './About';
import { ToTop } from './ToTop';
import { Gallery } from './Gallery';
import { ProjectSection } from './ProjectSection';
import { AllIcon, Section } from '../queries/dataQuery';
import { GalleryCenterSection } from './GalleryCenterSection';
import { GalleryStandardSection } from './GalleryStandardSection';
export interface Layout {
  sectionData: Section[];
  iconData: AllIcon[];
}

export const Layout: React.FC<Layout> = ({ sectionData }) => {
  const activeGallery = useRouter();
  const findGallery = sectionData.filter((section) => {
    return section.galleryButtonLink === activeGallery.asPath;
  });

  const motionKey = activeGallery.asPath.includes('gallery');

  const findSection = (sectionId: string) => {
    return sectionData.find((section) => section.sectionId === sectionId);
  };
  const [showToTop, setShowToTop] = useState<boolean>(false);
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const sections: { [key: string]: Section } = {
    project: findSection('project') || sectionData[0],
    landscapes: findSection('landscapes') || sectionData[1],
    oldBuildings: findSection('oldBuildings') || sectionData[2],
    details: findSection('details') || sectionData[3],
    about: findSection('about') || sectionData[4],
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
  }, [activeGallery, findGallery, sectionData]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Main
        variants={motionMain}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {showGallery && findGallery.length !== 0 ? (
          <Gallery galleryData={findGallery} showToTop={showToTop} />
        ) : (
          <>
            <Hero />
            <ProjectSection data={sections.project} />
            <GalleryStandardSection data={sections.landscapes} />
            <GalleryCenterSection data={sections.oldBuildings} />
            <GalleryStandardSection data={sections.details} />
            <About data={sections.about} />
            {showToTop ? <ToTop /> : null}
          </>
        )}
      </Main>
    </AnimatePresence>
  );
};

const motionMain = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};

const Main = styled(motion.main)``;
