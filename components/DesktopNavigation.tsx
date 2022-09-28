import React from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { NavLink } from './NavLink';

interface DesktopNavigationProps {
  data: {
    text: string;
    link: string;
  }[];
  path: string;
  logo: {
    image: {
      url: string;
      alt: string;
    };
    href: string;
    size: number;
  };
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  data,
  path,
  logo,
}) => {
  return (
    <DesktopMenu>
      <Logo data={logo} />
      <DesktopNav>
        {data.map((navLink, index) => (
          <NavLink
            key={index}
            link={navLink.link}
            text={navLink.text}
            active={path === navLink.link ? true : false}
          />
        ))}
      </DesktopNav>
    </DesktopMenu>
  );
};

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1900px;
  padding: 0 10rem;
  margin: auto;
  @media (max-width: 1500px) {
    padding: 0 5rem;
  }
  @media (max-width: 1300px) {
    padding: 0 2rem;
  }
  @media (max-width: 1100px) {
    padding: 0 4rem;
  }
  @media (max-width: 800px) {
    padding: 0 2rem;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 30rem;
`;
