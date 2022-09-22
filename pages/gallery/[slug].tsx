import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next/types';
import { request } from '../../lib/datocms';
import { ImageGallery } from '../../queries/dataQuery';
import { useState, BaseSyntheticEvent, useEffect } from 'react';
import PhotoAlbum, { Image } from 'react-photo-album';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Modal } from '../../components/Modal';
import { StyledArticle } from '../../components/StyledArticle';
import { ToTop } from '../../components/ToTop';
import Loader from '../../components/Loader';

export const getGallery = (slug: string) => {
  return `query Gallery {
    gallery(filter: {slug: {eq: ${slug}}}) {
      title
      slug
      imageSet {
        responsiveImage {
          title
          src
          srcSet
          width
          height
          alt
            }
      }
    }
  }`;
};

interface Galleries {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res: {
    allGalleries: {
      slug: string;
    }[];
  } = await request({
    query: `query allGallery {
      allGalleries{
        slug
      }
    }`,
  });
  const paths = res.allGalleries.map((item: { slug: string }) => {
    return {
      params: { slug: item.slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  [key: string]: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  }[];
}> = async ({ params }) => {
  const slug = params?.slug;
  const response: ImageGallery = await request({
    query: `query Gallery {
        gallery(filter: {slug: {eq: ${slug}}}) {
          title
          slug
          imageSet {
            responsiveImage {
              title
              src
              srcSet
              width
              height
              alt
                }
          }
        }
      }`,
  });

  const data: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  }[] = response.gallery.imageSet.map((image) => {
    return image.responsiveImage;
  });

  return {
    props: { data },
  };
};

const Gallery: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const gallery: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  }[] = data;

  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [disabledModal, setDisabledModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showToTop, setShowToTop] = useState<boolean>(false);

  const toggleShowToTop: () => void = () => {
    window.scrollY >= 200 ? setShowToTop(true) : setShowToTop(false);
  };

  if (!gallery) setIsLoading(true);

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
      exit="exit"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </StyledGalleryContainer>
  );
};

export default Gallery;

const motionContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  exit: { opacity: 0 },
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
