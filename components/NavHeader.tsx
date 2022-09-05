import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { NavLink } from './NavLink';
import { HamburgerButton } from './HamburgerButton';
import { Logo, AllNavigation, AllIcon } from '../queries/dataQuery';

export interface NavHeaderProps {
  navLinks: AllNavigation[];
  logoData: Logo;
}

export interface StyledHeaderProps {
  height: number;
  active: boolean;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ navLinks, logoData }) => {
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

  const changeMobileView: () => void = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 800) setMobileView(true);
    else {
      setMobileView(false);
      setDrawer(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
    window.addEventListener('resize', changeMobileView);
  });

  return (
    <>
      <Header height={headerHeight} active={activeBackgroundColor}>
        {mobileView ? (
          <HamburgerButton active={drawer} onClick={() => setDrawer(!drawer)} />
        ) : null}
        <AnimatePresence>
          {mobileView ? (
            drawer ? (
              <MobileMenu
                initial={{ opacity: 0, margin: '-100%' }}
                animate={{ opacity: 1, margin: 0 }}
                exit={{ opacity: 0, margin: '-100%' }}
                transition={{
                  delay: 0.1,
                  stiffness: 100,
                }}
              >
                <MobileNav>
                  {navLinks.map((navLink, index) => (
                    <motion.a
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.4,
                        duration: 0.1,
                      }}
                      onClick={() => setDrawer(!drawer)}
                    >
                      <NavLink link={navLink.link} text={navLink.text} />
                    </motion.a>
                  ))}
                </MobileNav>
              </MobileMenu>
            ) : null
          ) : (
            <DesktopMenu>
              <Link href={logoData.href}>
                <Image
                  src={logoData.image.url}
                  alt={logoData.image.alt}
                  width={logoData.size}
                  height={logoData.size}
                />
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

const Header = styled.header<StyledHeaderProps>`
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
