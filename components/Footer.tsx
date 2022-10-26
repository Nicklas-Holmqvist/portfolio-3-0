import { useInView } from 'framer-motion';
import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

import { IconLink } from './IconLink';
import { AllFooter } from '../queries/dataQuery';

interface FooterSectionProps {}

export interface StyledFooterProps {
  inView: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = () => {
  const date = new Date();
  const [footerData, setFooterData] = useState<AllFooter[]>([]);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    const fetchFooterData = async () => {
      const response = await fetch('/api/get-footer');
      const data = await response.json();
      if (data.status === false) setFooterData([]);
      setFooterData(data.allFooters);
    };
    fetchFooterData();
  }, []);

  return (
    <Footer inView={isInView} ref={ref}>
      <IconContainer>
        {footerData.map((icon, index) => (
          <span key={index}>
            <IconLink
              src={icon.image.url}
              alt={icon.image.url}
              href={icon.href}
              hover={icon.hover}
            />
          </span>
        ))}
      </IconContainer>
      <p>
        Copyright &copy; | {date.getFullYear()} - Nicklas Holmqvist - All rights
        reserved
      </p>
    </Footer>
  );
};

const Footer = styled.footer<StyledFooterProps>`
  ${({ inView }) =>
    inView
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  margin: auto;
  transition: all 1.5s 0.5s;
  p {
    text-align: center;
  }
`;

const IconContainer = styled.div`
  padding-bottom: 0.5rem;
  span {
    padding: 0rem 0.5rem;
  }
`;
