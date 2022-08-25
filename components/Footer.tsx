import React from 'react';
import styled from 'styled-components';

import mail from '../assets/svg/mail.svg';
import gitHub from '../assets/svg/akar-icons_github-fill.svg';
import linkedIn from '../assets/svg/akar-icons_linkedin-v1-fill.svg';
import facebook from '../assets/svg/ant-design_facebook-filled.svg';
import instagram from '../assets/svg/instagram.svg';
import { IconLink } from './IconLink';

interface FooterSection {}

interface Icons {
  src: string;
  alt: string;
  href: string;
}

export const FooterSection: React.FC<FooterSection> = () => {
  const date = new Date();

  const icons: Icons[] = [
    {
      src: gitHub,
      alt: 'Github',
      href: 'https://github.com/Nicklas-Holmqvist',
    },
    {
      src: instagram,
      alt: 'Instagram',
      href: 'https://www.instagram.com/nicklas.holmqvist/',
    },
    {
      src: facebook,
      alt: 'Facebook',
      href: 'https://www.facebook.com/glomd.varld.marks.harad',
    },
    {
      src: linkedIn,
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nicklas-holmqvist-b96b901a8/',
    },
    { src: mail, alt: 'Mail', href: 'mailto:nicklas_holmqvist@outlook.com' },
  ];

  return (
    <Footer>
      <IconContainer>
        {icons.map((icon, index) => (
          <span key={index}>
            <IconLink
              src={icon.src}
              alt={icon.alt}
              href={icon.href}
              isHover={true}
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
  margin: auto;
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
