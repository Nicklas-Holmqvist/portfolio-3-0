import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../queries/dataQuery';
import { StyledArticle } from './StyledArticle';
import { StructuredText } from 'react-datocms';

interface GalleryStandardSectionProps {
  data: Section;
}

export const GalleryStandardSection: React.FC<GalleryStandardSectionProps> = ({
  data,
}) => {
  return (
    <StyledArticle
      role={data.ariaRole}
      aria-label={data.ariaLabel}
      id={data.sectionId}
    >
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
      <InformationSection>
        <h2>{data.titleFirst}</h2>
        <StructuredText data={data.contentFirst} />
        <Link href={data.galleryButtonLink}>
          <LinkButton
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {data.galleryButtonText}
          </LinkButton>
        </Link>
      </InformationSection>
    </StyledArticle>
  );
};

const ImageSection = styled.section`
  box-sizing: border-box;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  p {
    padding-bottom: 0;
  }
`;

const InformationSection = styled.section`
  box-sizing: border-box;
  max-width: 475px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  }
  @media (max-width: 1300px) {
    max-width: 650px;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-right: 3rem;
  @media (max-width: 1300px) {
    padding-right: 2rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 1100px) {
    padding-right: 0rem;
    padding-bottom: 2rem;
  }
`;

const LinkButton = styled.a`
  margin-top: 2rem;
  padding: 0.4rem 1.1rem 0.5rem 1.1rem;
  border: 2px solid #d9d9d9;
  border-radius: 3px;
  transition-property: background-color, border-color;
  transition: 0.1s ease-out;
  cursor: pointer;
  &:hover {
    border-color: #f0f0f0;
    background-color: #d9d9d9;
    color: #2a2a2a;
    font-weight: 600;
  }
`;
