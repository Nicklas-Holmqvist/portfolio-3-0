import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
  isHover: boolean;
}

export const IconLink: React.FC<IconLinkProps> = ({
  href,
  src,
  alt,
  isHover,
}) => {
  return (
    <StyledIconLink href={href} target="_blank">
      <Icon src={src} alt={alt} isHover={isHover} />
    </StyledIconLink>
  );
};

const StyledIconLink = styled.a``;
