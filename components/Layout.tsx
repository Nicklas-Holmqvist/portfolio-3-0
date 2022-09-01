import React from 'react';
import styled from 'styled-components';

import { Hero } from './Hero';
import { About } from './About';
import { Section } from '../queries/dataQuery';
import { GalleryCenter } from './GalleryCenter';
import { ProjectSection } from './ProjectSection';
import { GalleryStandard } from './GalleryStandard';
export interface Layout {
  sectionData: Section[];
}

export const Layout: React.FC<Layout> = ({ sectionData }) => {
  const findSection = (sectionId: string) => {
    return sectionData.find((section) => section.sectionId === sectionId);
  };

  const sections: { [key: string]: Section } = {
    project: findSection('project') || sectionData[0],
    landscapes: findSection('landscapes') || sectionData[1],
    oldBuildings: findSection('oldBuildings') || sectionData[2],
    details: findSection('details') || sectionData[3],
    about: findSection('about') || sectionData[4],
  };

  return (
    <Main>
      <Hero />
      <ProjectSection data={sections.project} />
      <GalleryStandard data={sections.landscapes} />
      <GalleryCenter data={sections.oldBuildings} />
      <GalleryStandard data={sections.details} />
      <About data={sections.about} />
    </Main>
  );
};
const Main = styled.main``;
