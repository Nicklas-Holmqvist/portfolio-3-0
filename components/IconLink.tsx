import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
  hasHover: boolean;
}

export const IconLink: React.FC<IconLinkProps> = ({
  href,
  src,
  alt,
  hasHover,
}) => {
  return (
    <StyledIconLink href={href} target="_blank">
      <Icon src={src} alt={alt} hasHover={hasHover} />
    </StyledIconLink>
  );
};

const StyledIconLink = styled.a``;
