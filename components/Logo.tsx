import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface LogoProps {
  data: {
    image: {
      url: string;
      alt: string;
    };
    href: string;
    size: number;
  };
}

export const Logo: React.FC<LogoProps> = ({ data }) => {
  return (
    <LogoContainer
      variants={motionLogoContainer}
      whileTap={{ scale: 0.9 }}
      initial="hidden"
      animate="visible"
    >
      <Link href={data.href}>
        <LogoImage
          priority
          src={data.image.url}
          alt={data.image.alt}
          width={data.size}
          height={data.size}
        />
      </Link>
    </LogoContainer>
  );
};

const motionLogoContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LogoImage = styled(Image)`
  cursor: pointer;
`;
