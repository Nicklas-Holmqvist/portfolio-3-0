import styled from 'styled-components';
import PhotoAlbum from 'react-photo-album';
import { AnimatePresence, motion } from 'framer-motion';
import React, { BaseSyntheticEvent, useEffect, useState } from 'react';

import { Modal } from './Modal';
import { ToTop } from './ToTop';
import { StyledArticle } from './StyledArticle';
import { ImageGallery, Section } from '../queries/dataQuery';

interface GalleryProps {
  galleryData: Section[];
  showToTop: boolean;
}

export const Gallery: React.FC<GalleryProps> = ({ galleryData, showToTop }) => {
  const data: ImageGallery = galleryData[0].imageGallery;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [disabledModal, setDisabledModal] = useState<boolean>(false);

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
    setShowModal(true);
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
    setShowModal(false);
  };

  const disableModal = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 800) {
      setDisabledModal(true);
      setShowModal(false);
    } else setDisabledModal(false);
  };

  useEffect(() => {
    window.addEventListener('resize', disableModal);
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    disableModal();
  }, []);

  return (
    <StyledGalleryContainer
      variants={motionContainer}
      initial="hidden"
      animate="visible"
    >
      <Modal
        image={gallery[activeImage]}
        prev={prevImage}
        next={nextImage}
        close={closeModal}
        showModal={showModal}
      />
      <PhotoAlbum
        layout="masonry"
        photos={gallery}
        onClick={!disabledModal ? openModal : undefined}
        columns={(containerWidth) => {
          if (containerWidth < 500) return 1;
          if (containerWidth < 1100) return 2;
          return 4;
        }}
        spacing={5}
      />
      {showToTop ? <ToTop /> : null}
    </StyledGalleryContainer>
  );
};

const motionContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.7, duration: 0.3 } },
};

const StyledGalleryContainer = styled(motion(StyledArticle))`
  flex-direction: column;
  @media (max-width: 1500px) {
    padding-top: 5rem;
  }
  @media (max-width: 1300px) {
    padding-top: 5rem;
  }
  @media (max-width: 800px) {
    padding: 5rem 0 2rem 0;
  }
`;
