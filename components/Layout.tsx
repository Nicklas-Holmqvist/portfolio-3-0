import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Hero } from './Hero';
import { About } from './About';
import { AllIcon, Section } from '../queries/dataQuery';
import { GalleryCenter } from './GalleryCenter';
import { ProjectSection } from './ProjectSection';
import { GalleryStandard } from './GalleryStandard';
import { ToTop } from './ToTop';
export interface Layout {
  sectionData: Section[];
  iconData: AllIcon[];
}

export const Layout: React.FC<Layout> = ({ sectionData, iconData }) => {
  const findSection = (sectionId: string) => {
    return sectionData.find((section) => section.sectionId === sectionId);
  };
  const [showToTop, setShowToTop] = useState<boolean>(false);

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

  return (
    <Main>
      <Hero />
      <ProjectSection data={sections.project} />
      <GalleryStandard data={sections.landscapes} />
      <GalleryCenter data={sections.oldBuildings} />
      <GalleryStandard data={sections.details} />
      <About data={sections.about} />
      {showToTop ? <ToTop iconData={iconData} /> : null}
    </Main>
  );
};
const Main = styled.main``;
