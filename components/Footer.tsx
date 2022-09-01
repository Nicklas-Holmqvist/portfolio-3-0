import React from 'react';
import styled from 'styled-components';

import { IconLink } from './IconLink';
import { AllIcon } from '../queries/dataQuery';

interface FooterSectionProps {
  iconData: AllIcon[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ iconData }) => {
  const date = new Date();

  return (
    <Footer>
      <IconContainer>
        {iconData.map((icon, index) => (
          <span key={index}>
            <IconLink
              src={icon.image.url}
              alt={icon.image.url}
              href={icon.href}
              hasHover={icon.hasHover}
            />
          </span>
        ))}
      </IconContainer>
      <CopyrightContainer>
        <p>
          Copyright &copy; | {date.getFullYear()} - Nicklas Holmqvist - All
          rights reserved
        </p>
      </CopyrightContainer>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  // margin: auto;
`;

const IconContainer = styled.div`
  padding-bottom: 0.5rem;
  span {
    padding: 0rem 0.5rem;
  }
`;

const CopyrightContainer = styled.div`
  p {
    text-align: center;
  }
`;
