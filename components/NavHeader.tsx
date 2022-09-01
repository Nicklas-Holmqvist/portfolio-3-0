import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

import { NavLink } from './NavLink';
import { Logo, AllNavigation, AllIcon } from '../queries/dataQuery';
import { FooterSection } from './Footer';

export interface NavHeaderProps {
  navLinks: AllNavigation[];
  logoData: Logo;
  iconData: AllIcon[];
}

export interface StyledHeaderProps {
  height: number;
  active: boolean;
}

export const NavHeader: React.FC<NavHeaderProps> = ({
  navLinks,
  logoData,
  iconData,
}) => {
  const [activeBackgroundColor, setActiveBackgroundColor] =
    useState<boolean>(false);

  const headerHeight: number = 70;

  const changeBackgroundColor: () => void = () => {
    window.scrollY >= headerHeight
      ? setActiveBackgroundColor(true)
      : setActiveBackgroundColor(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
  });

  return (
    <>
      <Header height={headerHeight} active={activeBackgroundColor}>
        <MobileMenu>
          <MobileNav>
            {navLinks.map((navLink, index) => (
              <NavLink key={index} link={navLink.link} text={navLink.text} />
            ))}
          </MobileNav>
          <FooterSection iconData={iconData} />
        </MobileMenu>
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
              <NavLink key={index} link={navLink.link} text={navLink.text} />
            ))}
          </DesktopNav>
        </DesktopMenu>
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
  @media (max-width: 1500px) {
    padding: 0 5rem;
  }
  @media (max-width: 1300px) {
    padding: 0 2rem;
  }
  @media (max-width: 1100px) {
    padding: 0 4rem;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1900px;
  display: none;
  padding: 0 10rem;
`;

const MobileMenu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 100vh;
  right: 0;
  left: 0;

  background: black;
  overflow: hidden;
  z-index: 200;
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
    padding: 2rem 0;
    font-size: 3rem;
  }
`;
