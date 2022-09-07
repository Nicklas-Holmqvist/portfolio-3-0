import styled from 'styled-components';
import PhotoAlbum from 'react-photo-album';
import React, { BaseSyntheticEvent, useState } from 'react';

import { Modal } from './Modal';
import { motion } from 'framer-motion';
import { SimpleLink } from './SimpleLink';
import { StyledArticle } from './StyledArticle';
import { AllIcon, ImageGallery, Section } from '../queries/dataQuery';
import { ToTop } from './ToTop';

interface GalleryProps {
  galleryData: Section[];
  showToTop: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ galleryData, showToTop }) => {
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
    if (activeImage >= gallery.length - 1) return;
    else setActiveImage(activeImage + 1);
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  return (
    <StyledGalleryContainer
      key="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.7 }}
    >
      {activeModal ? (
        <Modal
          image={gallery[activeImage]}
          prev={prevImage}
          next={nextImage}
          close={closeModal}
        />
      ) : null}
      <SimpleLink href={'/'} text={'Gå tillbaka'} />
      <PhotoAlbum layout="rows" photos={gallery} onClick={openModal} />
      {showToTop ? <ToTop /> : null}
    </StyledGalleryContainer>
  );
};

const StyledGalleryContainer = styled(motion(StyledArticle))`
  flex-direction: column;
`;
