import React from 'react';
import styled from 'styled-components';

export const Hero = () => {
  return (
    <HeroSection
      role="contentinfo"
      aria-label="Bakgrundsbild för startsidan"
      id="top"
    ></HeroSection>
  );
};

const HeroSection = styled.section`
  min-height: 960px;
  height: 100%;
  background-image: url('/images/hero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  @media (max-width: 1300px) {
    min-height: 750px;
  }
`;
