import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

import { NavLink } from './NavLink';
import { AllNavigations } from '../queries/dataQuery';

export interface NavHeaderProps {
  navLinks: AllNavigations[];
}

export interface HeaderProps {
  height: number;
  active: boolean;
}

export const NavHeader: React.FC<NavHeaderProps> = ({ navLinks }) => {
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

  return (
    <Header height={headerHeight} active={activeBackgroundColor}>
      <Link href={'/'}>
        <Image src="/logo.png" alt="logo" width={logoSize} height={logoSize} />
      </Link>
      <Nav>
        {navLinks.map((navLink, index) => (
          <NavLink key={index} link={navLink.link} text={navLink.text} />
        ))}
      </Nav>
    </Header>
  );
};

const Header = styled.header<HeaderProps>`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1900px;
  width: 100%;
  height: ${(props) => props.height}px;
  padding: 0 10rem;
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

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 18rem;
`;
