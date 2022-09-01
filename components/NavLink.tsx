import Link from 'next/link';
import React from 'react';

import { LinkText } from './StyledLink';

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
