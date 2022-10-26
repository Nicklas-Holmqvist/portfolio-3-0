import React from 'react';

import Link from 'next/link';
import backArrow from '../assets/svg/bi_arrow-left.svg';
import { Icon } from './Icon';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BackArrowProps {}

export const BackArrow: React.FC<BackArrowProps> = () => {
  return (
    <GoBackContainer
      variants={motionGoBackArrow}
      whileHover={{ x: 0 }}
      whileTap={{ scale: 0.9 }}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Link href="/" replace>
        <a>
          <Icon src={backArrow} alt={'go back'} hover={false} size={24} />
        </a>
      </Link>
    </GoBackContainer>
  );
};

const GoBackContainer = styled(motion.div)`
  width: 1.8rem;
  padding-bottom: 0.5rem;
`;

const motionGoBackArrow = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, x: 10, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};
