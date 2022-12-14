import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Section } from '../queries/dataQuery';
import { StyledArticle } from './StyledArticle';
import { StructuredText } from 'react-datocms';
import { useInView } from 'framer-motion';

interface GalleryCenterSectionProps {
  data: Section;
}

export const GalleryCenterSection: React.FC<GalleryCenterSectionProps> = ({
  data,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  return (
    <StyledArticle
      inView={isInView}
      role={data.ariaRole}
      aria-label={data.ariaLabel}
      id={data.sectionId}
      ref={ref}
    >
      <InformationSection>
        <InformationContainer>
          <h2>{data.titleFirst}</h2>
          <StructuredText data={data.contentFirst} />
          <Link href={data.galleryButtonLink}>
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
  &:hover {
    border-color: #f0f0f0;
    background-color: #d9d9d9;
    color: #2a2a2a;
    font-weight: 600;
  }
`;
