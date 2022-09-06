import React, {
  BaseSyntheticEvent,
  ReactEventHandler,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import PhotoAlbum, { ClickHandler } from 'react-photo-album';

import { ImageGallery, ResponsiveImage, Section } from '../queries/dataQuery';
import { StyledArticle } from './StyledArticle';
import { Modal } from './Modal';

interface GalleryProps {
  galleryData: Section[];
}

export const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  const data: ImageGallery = galleryData[0].imageGallery;

  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(0);

  const gallery: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  }[] = [];
  data.imageSet.forEach((item) => {
    gallery.push(item.responsiveImage);
  });

  const openModal = (event: BaseSyntheticEvent) => {
    const currentImage = event.target.src;
    const index = gallery.findIndex((image) => {
      return image.src === currentImage;
    });
    setActiveImage(index);
    setActiveModal(true);
  };

  const prevImage = () => {
    if (activeImage === 0) return;
    else setActiveImage(activeImage - 1);
  };

  const nextImage = () => {
    if (activeImage >= gallery.length) return;
    else setActiveImage(activeImage + 1);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <StyledGalleryContainer>
      {activeModal ? (
        <Modal
          image={gallery[activeImage]}
          prev={prevImage}
          next={nextImage}
          close={closeModal}
        />
      ) : null}
      <h2>{data.title}</h2>
      <PhotoAlbum layout="rows" photos={gallery} onClick={openModal} />
    </StyledGalleryContainer>
  );
};

const StyledGalleryContainer = styled(StyledArticle)`
  flex-direction: column;
`;
