import React from 'react';
import styled from 'styled-components';

export const HamburgerButton = ({ ...props }) => {
  return (
    <StyledHamburgerButton {...props}>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerButton>
  );
};

const StyledHamburgerButton = styled.button`
  margin: 0;
  padding: 0;
  position: fixed;
  left: 1.2rem;
  top: 1.2rem;
  width: 2rem;
  height: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 300;
  &:hover span {
    width: 50%;
    &:nth-child(2) {
      width: 70%;
    }
    &:nth-child(3) {
      width: 80%;
    }
  }
  //   &:hover span {
  //     &:first-child {
  //       width: 0;
  //     }
  //     &:nth-child(2) {
  //       transform: rotate(-45deg);
  //       top: 50%;
  //     }
  //     &:nth-child(3) {
  //       transform: rotate(45deg);
  //       top: 50%;
  //     }
  //   }
  span {
    position: absolute;
    display: block;
    background-color: white;
    width: 100%;
    height: 3px;
    top: 10%;
    transition: all 0.2s;
    &:first-child {
      top: 50%;
    }
    &:nth-child(3) {
      top: 90%;
    }
  }
`;
