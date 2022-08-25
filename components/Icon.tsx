import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';

export interface IconProps {
  src: string;
  alt: string;
  size?: number;
  isHover?: boolean;
}

interface StyledIconProps {
  isHover: boolean;
}

export const Icon: React.FC<IconProps> = ({ src, alt, size = 18, isHover }) => {
  if (!src) {
    return <span>{alt}</span>;
  }
  return (
    <StyledIcon
      isHover={isHover || false}
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
  ${({ isHover }) =>
    isHover
      ? css`
          :hover {
            transform: scale(1.1);
          }
        `
      : null};
`;
