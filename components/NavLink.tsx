import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export interface NavLink {
  link: string;
  text: string;
}

export const NavLink: React.FC<NavLink> = ({ link, text }) => {
  return (
    <Link href={`#${link}`}>
      <LinkText>{text}</LinkText>
    </Link>
  );
};

const LinkText = styled.a`
  position: relative;
  text-decoration: none;
  color: #f0f0f0;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    background-color: #f0f0f0;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    transition: 0.2s;
  }
  &:hover:after {
    width: 100%;
  }
`;
