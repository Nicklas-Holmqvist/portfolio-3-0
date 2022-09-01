import React from 'react';
import styled from 'styled-components';
import { StructuredText } from 'react-datocms';

import { Section } from '../queries/dataQuery';
import { LinkText } from './StyledLink';
import { StyledArticle } from './StyledArticle';

interface ProjectSection {
  data: Section;
}

export const ProjectSection: React.FC<ProjectSection> = ({ data }) => {
  return (
    <StyledArticle
      role={data.ariaRole}
      aria-label={data.ariaLabel}
      id={data.sectionId}
    >
      <ProjectInformation>
        <h2>{data.titleFirst}</h2>
        <h3>{data.subTitle}</h3>
        <StructuredText data={data.contentFirst} />
        <LinkText
          href="https://www.instagram.com/explore/tags/gl%C3%B6mdv%C3%A4rld/"
          target="_blank"
        >
          #glömdvärld
        </LinkText>
      </ProjectInformation>
      <ProjectReference>
        <h2>{data.titleSecond}</h2>
        <StructuredText data={data.contentSecond} />
      </ProjectReference>
    </StyledArticle>
  );
};

const ProjectInformation = styled.section`
    max-width: 1000px;
    width: 100%;
    align-self: center;
    }
    p {
        max-width: 650px;
        width: 100%;
        line-height: 1.4rem;
        padding-bottom: 0.8rem;
    }
    @media (max-width: 1300px) {
        align-self: start;
      }
`;

const ProjectReference = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  max-width: 475px;
  width: 100%;
  padding-bottom: 1rem;
  h2 {
  }
  li {
    margin-left: 1rem;
    padding: 0.2rem;
  }
  @media (max-width: 1300px) {
    padding-top: 2rem;
  }
`;
