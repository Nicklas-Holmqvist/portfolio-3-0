import styled from 'styled-components';

export const LinkText = styled.a`
  position: relative;
  text-decoration: none;
  color: #f0f0f0;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    background-color: #f0f0f0;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    transition: 0.2s;
  }
  &:hover:after {
    width: 100%;
  }
`;
