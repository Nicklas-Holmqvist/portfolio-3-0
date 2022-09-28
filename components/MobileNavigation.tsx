import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { HamburgerButton } from './HamburgerButton';

interface MobileNavigationProps {
  data: {
    text: string;
    link: string;
  }[];
  path: string;
  drawer: boolean;
  logo: {
    image: {
      url: string;
      alt: string;
    };
    href: string;
    size: number;
  };
  setDrawer: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  data,
  path,
  drawer,
  logo,
  setDrawer,
}) => {
  return (
    <>
      <HamburgerButton active={drawer} onClick={setDrawer} />
      <Logo data={logo} />
      {drawer ? (
        <MobileMenu
          variants={motionMobilMenu}
          initial="hidden"
          animate="visible"
        >
          <MobileNav>
            <AnimatePresence>
              {data.map((navLink, index) => (
                <motion.a
                  key={index}
                  variants={motionNavLink}
                  custom={index}
                  onClick={setDrawer}
                >
                  <NavLink
                    link={navLink.link}
                    text={navLink.text}
                    active={path === navLink.link ? true : false}
                  />
                </motion.a>
              ))}
            </AnimatePresence>
          </MobileNav>
        </MobileMenu>
      ) : null}
    </>
  );
};

const motionNavLink = {
  hidden: { opacity: 0, y: -10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.3,
      duration: 0.1,
    },
  }),
};

const motionMobilMenu = {
  hidden: { opacity: 0, margin: '-100%' },
  visible: {
    opacity: 1,
    margin: 0,
    transition: {
      delay: 0.1,
      stiffness: 100,
    },
  },
  exit: { opacity: 0, margin: '-100%' },
};

const MobileNav = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  a {
    margin: 1.8rem 0;
    padding-bottom: 0.5rem;
    font-size: 3rem;
  }
`;

const MobileMenu = styled(motion.aside)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  bottom: 0;
  background: #2a2a2a;
  overflow: hidden;
  z-index: 200;
  transition: all;
`;
