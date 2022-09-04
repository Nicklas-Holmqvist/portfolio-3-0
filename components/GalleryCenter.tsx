import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../queries/dataQuery';
import { StyledArticle } from './StyledArticle';
import { StructuredText } from 'react-datocms';

interface GalleryCenterProps {
  data: Section;
}

export const GalleryCenter: React.FC<GalleryCenterProps> = ({ data }) => {
  return (
    <StyledArticle
      role={data.ariaRole}
      aria-label={data.ariaLabel}
      id={data.sectionId}
    >
      <InformationSection>
        <InformationContainer>
          <h2>{data.titleFirst}</h2>
          <StructuredText data={data.contentFirst} />
          <Link href={`/`}>
            <LinkButton>{data.galleryButtonText}</LinkButton>
          </Link>
        </InformationContainer>
      </InformationSection>
      <ImageSection>
        <ImageContainer>
          <Image
            src={data.image.url}
            alt={data.image.alt}
            width={data.width}
            height={data.height}
          />
          <p>{data.imageSubText}</p>
        </ImageContainer>
      </ImageSection>
    </StyledArticle>
  );
};

const ImageSection = styled.section`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-left: 2rem;
  @media (max-width: 1100px) {
    justify-content: start;
    padding-left: 0;
    padding-bottom: 2rem;
  }
`;

const InformationSection = styled.section`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 1100px) {
    justify-content: start;
  }
`;

const InformationContainer = styled.div`
  max-width: 475px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (max-width: 1300px) {
    max-width: 650px;
  }
  @media (max-width: 800px) {
    max-width: 650px;
  }
`;

const ImageContainer = styled.div`
  width: 560px;
`;

const LinkButton = styled.a`
  width: 5rem;
  margin-top: 2rem;
  padding: 0.4rem 1.1rem 0.5rem 1.1rem;
  border: 2px solid #d9d9d9;
  border-radius: 3px;
  transition-property: background-color, border-color;
  transition: 0.1s ease-out;
  cursor: pointer;
  &:hashover {
    border-color: #f0f0f0;
    background-color: #d9d9d9;
    color: #2a2a2a;
    font-weight: 600;
  }
`;
