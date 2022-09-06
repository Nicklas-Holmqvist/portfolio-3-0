import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ResponsiveImage } from '../queries/dataQuery';

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
      <StyledCloseButton onClick={close}>CLOSE</StyledCloseButton>
      <StyledPrevButton onClick={prev}>PREV</StyledPrevButton>
      <StyledImageContainer>
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="contain"
        />
      </StyledImageContainer>
      <StyledNextButton onClick={next}>NEXT</StyledNextButton>
    </StyledModal>
  );
};

const StyledModal = styled.article`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  z-index: 1000;
  h2 {
    text-align: center;
    color: white;
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  height: 80%;
  margin-top: 5%;
`;

const StyledCloseButton = styled.button`
  position: fixed;
  top: 2%;
  right: 2%;
`;

const StyledPrevButton = styled.button`
  position: fixed;
  left: 2%;
  top: 50%;
`;

const StyledNextButton = styled.button`
  position: fixed;
  right: 2%;
  top: 50%;
`;
