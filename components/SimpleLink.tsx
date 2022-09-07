import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface IconLinkProps {
  href: string;
  text: string;
}

export const SimpleLink: React.FC<IconLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <StyledIconLink>{text}</StyledIconLink>
    </Link>
  );
};

const StyledIconLink = styled.a`
  padding-bottom: 0.5rem;
`;
