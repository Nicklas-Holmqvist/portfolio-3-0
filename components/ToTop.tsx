import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Icon } from './Icon';
import toTopIcon from '../assets/svg/arrow-up.svg';

interface ToTopProps {}

export const ToTop: React.FC<ToTopProps> = () => {
  return (
    <StyledToTop
      variants={motionToTop}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={() => window.scrollTo(0, 0)}
    >
      <Icon src={toTopIcon} alt={'gå upp'} hover={false} size={40} />
    </StyledToTop>
  );
};

const motionToTop = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const StyledToTop = styled(motion.button)`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  background: none;
  border: none;
`;
