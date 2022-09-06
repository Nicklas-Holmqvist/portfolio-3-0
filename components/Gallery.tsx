import React from 'react';
import styled from 'styled-components';

import { ImageGallery, Section } from '../queries/dataQuery';

interface GalleryProps {
  galleryData: Section[];
}

export const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  const images: ImageGallery = galleryData[0].imageGallery;
  return (
    <StyledGalleryContainer>
      <h2>{images.title}</h2>
    </StyledGalleryContainer>
  );
};

const StyledGalleryContainer = styled.article`
  text-align: center;
  background: pink;
`;
