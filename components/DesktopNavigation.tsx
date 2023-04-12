import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
    <DesktopMenu
      variants={motionDesktopMenu}
      initial="hidden"
      animate="visible"
    >
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

const motionDesktopMenu = {
  hidden: { opacity: 0, y: -70 },
  visible: { opacity: 1, y: 0 },
};

const DesktopMenu = styled(motion.div)`
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
