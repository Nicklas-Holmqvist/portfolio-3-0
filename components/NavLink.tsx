import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

export interface NavLinkProps {
  link: string;
  text: string;
  active: boolean;
}

export interface StyledNavLinkProps {
  active: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, text, active }) => {
  return (
    <Link href={`${link}`}>
      <LinkText active={active}>{text}</LinkText>
    </Link>
  );
};

export const LinkText = styled.a<StyledNavLinkProps>`
  position: relative;
  text-decoration: none;
  color: #f0f0f0;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    background-color: #f0f0f0;
    ${({ active }) =>
      active
        ? css`
            width: 100%;
          `
        : css`
            width: 0;
          `};
    height: 2px;
    bottom: -4px;
    left: 0;
    transition: 0.2s;
  }
  &:hover:after {
    width: 100%;
  }
`;
