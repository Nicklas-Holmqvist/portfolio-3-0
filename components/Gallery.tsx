import React from 'react';
import styled from 'styled-components';

import { Section } from '../queries/dataQuery';

interface GalleryProps {
  galleryData: Section[];
}

export const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  return (
    <StyledGalleryContainer>
      <h2>{galleryData[0].titleFirst}</h2>
    </StyledGalleryContainer>
  );
};

const StyledGalleryContainer = styled.article`
  text-align: center;
  background: pink;
`;
