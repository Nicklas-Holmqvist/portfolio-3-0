import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Hero } from './Hero';
import { About } from './About';
import { ToTop } from './ToTop';
import { GalleryCenterSection } from './GalleryCenterSection';
import { ProjectSection } from './ProjectSection';
import { GalleryStandardSection } from './GalleryStandardSection';
import { AllIcon, Section } from '../queries/dataQuery';
import { Gallery } from './Gallery';
export interface Layout {
  sectionData: Section[];
  iconData: AllIcon[];
}

export const Layout: React.FC<Layout> = ({ sectionData, iconData }) => {
  const activeGallery = useRouter();
  const findGallery = sectionData.filter((section) => {
    return section.galleryButtonLink === activeGallery.asPath;
  });

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

  const toggleGallery = () => {};

  useEffect(() => {
    window.addEventListener('scroll', toggleShowToTop);
  });

  useEffect(() => {
    if (findGallery.length === 0) return setShowGallery(false);
    if (activeGallery.asPath === findGallery[0].galleryButtonLink)
      setShowGallery(true);
  }, [activeGallery, findGallery, sectionData]);

  return (
    <Main>
      {showGallery && findGallery.length !== 0 ? (
        <Gallery galleryData={findGallery} />
      ) : (
        <>
          <Hero />
          <ProjectSection data={sections.project} />
          <GalleryStandardSection data={sections.landscapes} />
          <GalleryCenterSection data={sections.oldBuildings} />
          <GalleryStandardSection data={sections.details} />
          <About data={sections.about} />
          {showToTop ? <ToTop iconData={iconData} /> : null}
        </>
      )}
    </Main>
  );
};
const Main = styled.main``;
