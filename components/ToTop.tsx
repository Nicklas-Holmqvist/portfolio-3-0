import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { AllIcon } from '../queries/dataQuery';
import { Icon } from './Icon';

interface ToTopProps {
  iconData: AllIcon[];
}

export const ToTop: React.FC<ToTopProps> = ({ iconData }) => {
  const toTopIcon = iconData.filter((icon) => icon.title === 'Arrow up');
  return (
    <StyledToTop
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Icon
        src={toTopIcon[0].image.url}
        alt={toTopIcon[0].image.alt}
        hasHover={false}
        size={toTopIcon[0].size}
      />
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
