import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next/types';

import { BackArrow } from '../components/BackArrow';
import Head from 'next/head';

interface ErrorPageProps {}

const ErrorPage: NextPage<ErrorPageProps> = () => {
  return (
    <>
      <Head>
        <title>Error, du har kommit fel!</title>
      </Head>
      <ErrorPageContainer>
        <h2>Inget här att se!</h2>
        <div>
          <BackArrow />
          <p>Gå tillbaka!</p>
        </div>
      </ErrorPageContainer>
    </>
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
