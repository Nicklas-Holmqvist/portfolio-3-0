import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import nextIcon from '../assets/svg/next-arrow.svg';
import prevIcon from '../assets/svg/prev-arrow.svg';
import closeIcon from '../assets/svg/bi_x-circle.svg';
import { Icon } from './Icon';

interface ModalProps {
  prev: () => void;
  next: () => void;
  close: () => void;
  showModal: boolean;
  image: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const Modal: React.FC<ModalProps> = ({
  image,
  showModal,
  prev,
  next,
  close,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal ? (
        <StyledModal
          variants={motionBackdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <StyledModalContainer>
            <AnimatePresence exitBeforeEnter>
              <StyledImageContainer
                key={image.src}
                variants={motionImage}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </StyledImageContainer>
              <StyledImageText variants={motionText} exit={{ opacity: 0 }}>
                {image.title}
              </StyledImageText>
            </AnimatePresence>
            <StyledCloseButton onClick={close}>
              <Icon src={closeIcon} alt={'close'} hasHover={false} />
            </StyledCloseButton>
            <StyledPrevButton onClick={prev} className={'arrow'}>
              <Icon src={prevIcon} alt={'prev'} hasHover={true} size={30} />
            </StyledPrevButton>
            <StyledNextButton onClick={next} className={'arrow'}>
              <Icon src={nextIcon} alt={'next'} hasHover={true} size={30} />
            </StyledNextButton>
          </StyledModalContainer>
        </StyledModal>
      ) : null}
    </AnimatePresence>
  );
};

const motionBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};

const motionImage = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
  exit: { opacity: 0, x: -25 },
};

const motionText = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.2 } },
};

const StyledImageText = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  color: #2a2a2a;
`;

const StyledModal = styled(motion.article)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  z-index: 1000;
  h2 {
    text-align: center;
    color: white;
  }
`;

const StyledModalContainer = styled(motion.div)`
  position: relative;
  height: 100%;
  max-width: 1900px;
  width: 100%;
  margin: auto;
`;
const StyledImageContainer = styled(motion.div)`
  position: relative;
  height: 80%;
  margin: 4rem 5rem 1rem 5rem;
`;

const StyledButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  &.arrow {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    transition: all, 0.1s;
    cursor: pointer;
    &:hover {
      background: #2a2a2a11;
      transform: scale(1.1);
    }
  }
`;

const StyledCloseButton = styled(StyledButton)`
  top: 1%;
  right: 5%;
  @media (max-width: 1300px) {
    right: 2%;
  }
`;

const StyledPrevButton = styled(StyledButton)`
  left: 5%;
  top: 40%;
  padding: 0.2rem 0.3rem 0 0;
  @media (max-width: 1300px) {
    left: 2%;
  }
`;

const StyledNextButton = styled(StyledButton)`
  right: 5%;
  top: 40%;
  padding: 0.2rem 0 0 0.3rem;
  @media (max-width: 1300px) {
    right: 2%;
  }
`;
