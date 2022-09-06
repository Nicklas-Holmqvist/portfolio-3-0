import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PhotoAlbum from 'react-photo-album';

import { ImageGallery, Section } from '../queries/dataQuery';
import { StyledArticle } from './StyledArticle';

interface GalleryProps {
  galleryData: Section[];
}

export const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  const data: ImageGallery = galleryData[0].imageGallery;

  const [gallery, setGallery] = useState([]);

  const galleryArray: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  }[] = [];
  data.imageSet.forEach((item) => {
    galleryArray.push(item.responsiveImage);
  });

  return (
    <StyledGalleryContainer>
      <h2>{data.title}</h2>
      <PhotoAlbum
        layout="rows"
        photos={galleryArray}
        onClick={(event) => console.log(event)}
      />
    </StyledGalleryContainer>
  );
};

const StyledGalleryContainer = styled(StyledArticle)`
  flex-direction: column;
`;
