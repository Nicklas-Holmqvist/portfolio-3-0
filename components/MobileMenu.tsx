import React from 'react';
import styled from 'styled-components';

interface MobileMenuProps {}

export const MobileMenu: React.FC<MobileMenuProps> = () => {
  return <MenuContainer>MobileMenu</MenuContainer>;
};

const MenuContainer = styled.section`
  position: fixed;
  height: 100vh;
  width: 50%;
  overflow: hidden;
  background-color: black;
  z-index: 200;
`;
