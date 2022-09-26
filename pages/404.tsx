import React from 'react';
import { NextPage } from 'next/types';
import styled from 'styled-components';
import { BackArrow } from '../components/BackArrow';

interface ErrorPageProps {}

const ErrorPage: NextPage<ErrorPageProps> = () => {
  return (
    <ErrorPageContainer>
      <h2>Inget här att se!</h2>
      <div>
        <BackArrow />
        <p>Gå tillbaka!</p>
      </div>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

const ErrorPageContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    padding-left: 1.5rem;
  }
`;
