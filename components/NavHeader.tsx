import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { NavLink } from './NavLink';

export interface NavHeader {}
// Hämta hem från CMS
const navLinks = ['Projekt', 'Gallerier', 'Om mig'];

export const NavHeader: React.FC<NavHeader> = () => {
  const [activeBackgroundColor, setActiveBackgroundColor] =
    useState<boolean>(false);

  const headerHeight: number = 70;
  const logoSize: number = 40;

  const changeBackgroundColor: () => void = () => {
    window.scrollY >= headerHeight
      ? setActiveBackgroundColor(true)
      : setActiveBackgroundColor(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
  });

  const Header = styled.header`
    box-sizing: border-box;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${headerHeight}px;
    padding: 0 10rem;
    background-color: ${activeBackgroundColor ? '#2a2a2ada' : 'none'};
    transition: all 0.5s;
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: ${navLinks.length * 6}rem;
  `;

  return (
    <Header>
      <Image src="/logo.png" alt="logo" width={logoSize} height={logoSize} />
      <Nav>
        {navLinks.map((navLink, index) => (
          <NavLink key={index} linkText={navLink} />
        ))}
      </Nav>
    </Header>
  );
};
