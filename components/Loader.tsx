import React from 'react';
import styled, { keyframes } from 'styled-components';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <StyledContainer>
      <StyledLoader></StyledLoader>
      <StyledText>LADDAR</StyledText>
    </StyledContainer>
  );
};

export default Loader;

const KeyframesSpinner = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const KeyframesText = keyframes`
0% { color: black }
      50% { color: rgba(105, 105, 105, 0.637) }
      100% { color: black }
`;
const StyledContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLoader = styled.div`
width: 3rem;
height: 3rem;
border-top: 0.1rem solid rgb(20, 20, 20);
border-radius: 50%;
transition: all;
animation: ${KeyframesSpinner} 1s linear infinite;
}
`;

const StyledText = styled.p`
  animation: ${KeyframesText} 1s linear infinite;
`;
