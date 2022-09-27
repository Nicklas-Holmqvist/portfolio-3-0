import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next/types';
import Head from 'next/head';
import styled from 'styled-components';
import PhotoAlbum from 'react-photo-album';
import { motion } from 'framer-motion';
import { request } from '../../lib/datocms';
import { ParsedUrlQuery } from 'querystring';
import { useState, BaseSyntheticEvent, useEffect } from 'react';

import Loader from '../../components/Loader';
import { Modal } from '../../components/Modal';
import { ToTop } from '../../components/ToTop';
import { BackArrow } from '../../components/BackArrow';
import { StyledArticle } from '../../components/StyledArticle';
import { ImageGallery, ResponsiveImage } from '../../queries/dataQuery';

interface Galleries {
  slug: string;
}

interface GetStaticPropsResponse {
  images: ResponsiveImage[];
  head: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res: {
    allGalleries: Galleries[];
  } = await request({
    query: `query allGallery {
      allGalleries{
        slug
      }
    }`,
  });
  const paths = res.allGalleries.map((item: Galleries) => {
    return {
      params: { slug: item.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params as ParsedUrlQuery).slug;
  const response: ImageGallery = await request({
    query: `query Gallery {
        gallery(filter: {slug: {eq: ${slug}}}) {
          title
          slug
          imageSet {
            responsiveImage {
              src
              srcSet
              width
              height
                }
          }
        }
      }`,
  });

  const data: GetStaticPropsResponse = {
    images: response.gallery.imageSet.map((image) => {
      return image.responsiveImage;
    }),
    head: response.gallery.title,
  };

  return {
    props: { data },
  };
};

const Gallery: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [disabledModal, setDisabledModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [showToTop, setShowToTop] = useState<boolean>(false);

  const toggleShowToTop: () => void = () => {
    window.scrollY >= 200 ? setShowToTop(true) : setShowToTop(false);
  };

  if (!data) setIsLoading(true);

  const openModal = (event: BaseSyntheticEvent) => {
    const currentImage = event.target.src;
    const index = data.images.findIndex((image: ResponsiveImage) => {
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
    if (activeImage >= data.images.length - 1) return;
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
      <Head>
        <title>{data.head}</title>
      </Head>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Modal
            image={data.images[activeImage]}
            prev={prevImage}
            next={nextImage}
            close={closeModal}
            showModal={showModal}
          />
          <GoBackContainer
            variants={motionGoBackArrow}
            whileHover={{ x: 0 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <BackArrow />
          </GoBackContainer>
          <PhotoAlbum
            layout="masonry"
            photos={data.images}
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

const motionGoBackArrow = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, x: 10, transition: { duration: 0.2 } },
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

const GoBackContainer = styled(motion.div)`
  width: 1.8rem;
  padding-bottom: 0.5rem;
`;
