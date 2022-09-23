import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { NavHeader } from './NavHeader';
import { FooterSection } from './Footer';
export interface Layout {}

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Main>
      <NavHeader />
      {children}
      <FooterSection />
    </Main>
  );
};

const Main = styled(motion.main)``;
