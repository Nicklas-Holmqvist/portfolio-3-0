import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

import logo from '../assets/logo.png';
import { NavLink } from './NavLink';
import { useRouter } from 'next/router';
import { HamburgerButton } from './HamburgerButton';
import { AnimatePresence, motion } from 'framer-motion';

export interface NavHeaderProps {}

export interface StyledHeaderProps {
  height: number;
  active: boolean;
}

export const NavHeader: React.FC<NavHeaderProps> = () => {
  const [activeBackgroundColor, setActiveBackgroundColor] =
    useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(false);

  const path = useRouter();
  const headerHeight: number = 70;

  const changeBackgroundColor: () => void = () => {
    window.scrollY >= headerHeight
      ? setActiveBackgroundColor(true)
      : setActiveBackgroundColor(false);
  };

  const navLinks = [
    { text: 'Projekt', link: '/#project' },
    { text: 'Landskap', link: '/gallery/landscapes' },
    { text: 'Gamla byggnader', link: '/gallery/old_buildings' },
    { text: 'Detaljer', link: '/gallery/details' },
    { text: 'Om mig', link: '/#about' },
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
          <>
            <HamburgerButton
              active={drawer}
              onClick={() => setDrawer(!drawer)}
            />
            <LogoContainer>
              <Link href={'/'}>
                <LogoImage src={logo} alt="logo" width={40} height={40} />
              </Link>
            </LogoContainer>
          </>
        ) : null}
        <AnimatePresence>
          {mobileView ? (
            drawer ? (
              <MobileMenu
                variants={motionMobilMenu}
                initial="hidden"
                animate="visible"
              >
                <MobileNav>
                  <AnimatePresence>
                    {navLinks.map((navLink, index) => (
                      <motion.a
                        key={index}
                        variants={motionNavLink}
                        custom={index}
                        onClick={() => setDrawer(!drawer)}
                      >
                        <NavLink
                          link={navLink.link}
                          text={navLink.text}
                          active={path.asPath === navLink.link ? true : false}
                        />
                      </motion.a>
                    ))}
                  </AnimatePresence>
                </MobileNav>
              </MobileMenu>
            ) : null
          ) : (
            <DesktopMenu>
              <LogoContainer
                variants={motionLogoContainer}
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
              >
                <Link href={'/'}>
                  <LogoImage src={logo} alt="logo" width={40} height={40} />
                </Link>
              </LogoContainer>
              <DesktopNav>
                {navLinks.map((navLink, index) => (
                  <NavLink
                    key={index}
                    link={navLink.link}
                    text={navLink.text}
                    active={path.asPath === navLink.link ? true : false}
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
      delay: index * 0.3,
      duration: 0.1,
    },
  }),
};

const motionLogoContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
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

const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LogoImage = styled(Image)`
  cursor: pointer;
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
  width: 30rem;
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
