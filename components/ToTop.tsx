import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';
import toTopIcon from '../assets/svg/arrow-up.svg';

interface ToTopProps {}

export const ToTop: React.FC<ToTopProps> = () => {
  return (
    <StyledToTop
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Icon src={toTopIcon} alt={'gå upp'} hasHover={false} size={40} />
    </StyledToTop>
  );
};

const StyledToTop = styled(motion.button)`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  background: none;
  border: none;
`;
