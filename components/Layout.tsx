import React from 'react';
import styled from 'styled-components';

import { ProjectSection } from './ProjectInformation';
import { GalleryDetails } from './GalleryDetails';
import { GalleryLandscapes } from './GalleryLandscapes';
import { GalleryOldBuildings } from './GalleryOldBuildings';
import { About } from './About';

export interface Layout {}

export const Layout: React.FC<Layout> = () => {
  return (
    <Main>
      <Section
        role="contentinfo"
        aria-label="Bakgrundsbild för startsidan"
      ></Section>
      <Article
        role="contentinfo"
        aria-label="Information om det fotografiska projektet Glömd värld i Marks härad"
        id="projekt"
        className="projekt"
      >
        <ProjectSection />
      </Article>
      <Article
        role="contentinfo"
        aria-label='Information om fotogalleriet "Det glömda landskapet"'
        id="gallerier"
      >
        <GalleryLandscapes />
      </Article>
      <Article
        role="contentinfo"
        aria-label='Information om fotogalleriet "Torp, backstuga och ladugård"'
        className="oldBuildings"
      >
        <GalleryOldBuildings />
      </Article>
      <Article
        role="contentinfo"
        aria-label='Information om fotogalleriet "De vackra detaljerna"'
      >
        <GalleryDetails />
      </Article>
      <Article
        role="contentinfo"
        aria-label="Vem är Nicklas Holmqvist"
        id="about"
        className="about"
      >
        <About />
      </Article>
    </Main>
  );
};
const Main = styled.main``;

const Section = styled.section`
  min-height: 960px;
  height: 100%;
  background-image: url('/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  @media (max-width: 1300px) {
    min-height: 750px;
  }
`;

const Article = styled.article`
  min-height: 960px;
  height: 100%;
  max-width: 1900px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 6rem 10rem 4rem 10rem;
  display: flex;
  .about {
    justify-content: space-between;
  }
  @media (max-width: 1500px) {
    padding: 4rem 5rem 3rem 5rem;
  }
  @media (max-width: 1300px) {
    min-height: 750px;
    padding: 2rem 2rem 1rem 2rem;
    &.projekt {
      flex-direction: column;
    }
  }
  @media (max-width: 1100px) {
    padding: 2rem 4rem 1rem 4rem;
    flex-direction: column;
    &.oldBuildings {
      flex-direction: row;
    }
  }
`;
