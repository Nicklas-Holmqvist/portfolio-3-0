import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

interface IconLinkProps {
  href: string;
  src: string;
  alt: string;
  hover: boolean;
}

export const IconLink: React.FC<IconLinkProps> = ({
  href,
  src,
  alt,
  hover,
}) => {
  return (
    <StyledIconLink href={href} target="_blank">
      <Icon src={src} alt={alt} hover={hover} />
    </StyledIconLink>
  );
};

const StyledIconLink = styled.a``;
