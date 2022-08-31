import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

export interface IconProps {
  src: string;
  alt: string;
  size?: number;
  hasHover?: boolean;
}

interface StyledIconProps {
  hasHover: boolean;
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  size = 18,
  hasHover,
}) => {
  if (!src) {
    return <span>{alt}</span>;
  }
  return (
    <StyledIcon
      hasHover={hasHover || false}
      src={src}
      height={size}
      width={size}
      alt={alt}
    />
  );
};

const StyledIcon = styled(Image)<StyledIconProps>`
  cursor: pointer;
  transition: all 0, 2s;
  ${({ hasHover }) =>
    hasHover
      ? css`
          :hover {
            transform: scale(1.1);
          }
        `
      : null};
`;
