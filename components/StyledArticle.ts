import styled from 'styled-components';

export const StyledArticle = styled.article`
  min-height: 800px;
  height: 100%;
  max-width: 1900px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 6rem 10rem 4rem 10rem;
  display: flex;
  #oldBuildings {
    justify-content: center;
  }
  .about {
    justify-content: space-between;
  }
  @media (max-width: 1500px) {
    padding: 4rem 5rem 3rem 5rem;
  }
  @media (max-width: 1300px) {
    min-height: 750px;
    padding: 2rem 2rem 1rem 2rem;
    &#project {
      flex-direction: column;
    }
  }
  @media (max-width: 1100px) {
    padding: 2rem 4rem 1rem 4rem;
    flex-direction: column;
    &#oldBuildings {
      flex-direction: column-reverse;
    }
  }
  @media (max-width: 800px) {
    padding: 2rem 2rem 1rem 2rem;
    flex-direction: column;
    &#oldBuildings {
      flex-direction: column-reverse;
    }
  }
`;
