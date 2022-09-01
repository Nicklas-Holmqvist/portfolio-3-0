import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../queries/dataQuery';
import { StructuredText } from 'react-datocms';
import { StyledArticle } from './StyledArticle';

interface About {
  data: Section;
}

export const About: React.FC<About> = ({ data }) => {
  return (
    <StyledArticle
      role={data.ariaRole}
      aria-label={data.ariaLabel}
      id={data.sectionId}
    >
      <InformationSection>
        <h2>{data.titleFirst}</h2>
        <StructuredText data={data.contentFirst} />
      </InformationSection>
      <ImageSection>
        <ImageContainer>
          <Image
            src={data.image.url}
            alt={data.image.alt}
            width={data.width}
            height={data.height}
          />
        </ImageContainer>
      </ImageSection>
    </StyledArticle>
  );
};

const ImageSection = styled.section`
  box-sizing: border-box;
  max-width: 475px;
  width: 100%;
  display: flex;
  padding-bottom: 2rem;
  @media (max-width: 1300px) {
    padding-left: 2rem;
  }
  @media (max-width: 1100px) {
    padding-top: 2rem;
    padding-left: 0;
  }
`;

const InformationSection = styled.section`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  p {
    max-width: 650px;
  }
`;

const ImageContainer = styled.div`
  max-width: 465px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  @media (max-width: 1300px) {
    align-items: center;
  }
`;
