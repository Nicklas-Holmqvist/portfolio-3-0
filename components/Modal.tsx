import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import closeIcon from '../assets/svg/bi_x-circle.svg';
import prevIcon from '../assets/svg/prev-arrow.svg';
import nextIcon from '../assets/svg/next-arrow.svg';
import { Icon } from './Icon';

interface ModalProps {
  prev: () => void;
  next: () => void;
  close: () => void;
  image: {
    title: string;
    src: string;
    srcSet: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const Modal: React.FC<ModalProps> = ({ image, prev, next, close }) => {
  return (
    <StyledModal>
      <StyledModalContainer>
        <StyledImageContainer>
          <Image
            src={image.src}
            alt={image.alt}
            title={image.alt}
            layout="fill"
            objectFit="contain"
          />
        </StyledImageContainer>
        <StyledImageText>{image.title}</StyledImageText>
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
  );
};

const StyledImageText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #2a2a2a;
`;

const StyledModal = styled.article`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: 1000;
  h2 {
    text-align: center;
    color: white;
  }
`;

const StyledModalContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: 1900px;
  width: 100%;
  margin: auto;
`;
const StyledImageContainer = styled.div`
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
`;

const StyledPrevButton = styled(StyledButton)`
  left: 5%;
  top: 40%;
  padding: 0.2rem 0.3rem 0 0;
`;

const StyledNextButton = styled(StyledButton)`
  right: 5%;
  top: 40%;
  padding: 0.2rem 0 0 0.3rem;
`;