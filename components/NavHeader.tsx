import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { NavLink } from './NavLink';
import { HamburgerButton } from './HamburgerButton';
import { Logo, AllNavigation } from '../queries/dataQuery';
import logo from '../assets/logo.png';

export interface NavHeaderProps {
  // navLinks: AllNavigation[];
  // logoData: Logo;
}

export interface StyledHeaderProps {
  height: number;
  active: boolean;
}

export const NavHeader: React.FC<NavHeaderProps> = () => {
  const [activeBackgroundColor, setActiveBackgroundColor] =
    useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(false);
  const headerHeight: number = 70;

  const changeBackgroundColor: () => void = () => {
    window.scrollY >= headerHeight
      ? setActiveBackgroundColor(true)
      : setActiveBackgroundColor(false);
  };

  const navLinks = [
    { text: 'Projekt', link: 'project' },
    { text: 'Gallerier', link: 'landscapes' },
    { text: 'Om mig', link: 'about' },
  ];

  const changeMobileView = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= 800) setMobileView(true);
    else {
      setMobileView(false);
      setDrawer(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
    window.addEventListener('resize', changeMobileView);
  });

  useEffect(() => {
    changeMobileView();
  }, []);

  return (
    <>
      <Header
        height={headerHeight}
        active={activeBackgroundColor}
        variants={motionHeader}
        initial="hidden"
        animate="visible"
      >
        {mobileView ? (
          <HamburgerButton active={drawer} onClick={() => setDrawer(!drawer)} />
        ) : null}
        <AnimatePresence exitBeforeEnter>
          {mobileView ? (
            drawer ? (
              <MobileMenu
                variants={motionMobilMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <MobileNav>
                  <AnimatePresence exitBeforeEnter>
                    {navLinks.map((navLink, index) => (
                      <motion.a
                        key={index}
                        variants={motionNavLink}
                        custom={index}
                        onClick={() => setDrawer(!drawer)}
                      >
                        <NavLink link={navLink.link} text={navLink.text} />
                      </motion.a>
                    ))}
                  </AnimatePresence>
                </MobileNav>
              </MobileMenu>
            ) : null
          ) : (
            <DesktopMenu>
              <Link href={'/'}>
                <Image src={logo} alt="logo" width={40} height={40} />
              </Link>
              <DesktopNav>
                {navLinks.map((navLink, index) => (
                  <NavLink
                    key={index}
                    link={navLink.link}
                    text={navLink.text}
                  />
                ))}
              </DesktopNav>
            </DesktopMenu>
          )}
        </AnimatePresence>
      </Header>
    </>
  );
};

const motionHeader = {
  hidden: { opacity: 0, y: -70 },
  visible: { opacity: 1, y: 0 },
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

const motionNavLink = {
  hidden: { opacity: 0, y: -10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.5,
      duration: 0.1,
    },
  }),
};

const Header = styled(motion.header)<StyledHeaderProps>`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: ${(props) => props.height}px;
  z-index: 100;
  ${({ active }) =>
    active
      ? css`
          background-color: #2a2a2ada;
        `
      : css`
          background-color: none;
        `}
  transition: all 0.5s;
`;

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

const DesktopNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 18rem;
`;

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
