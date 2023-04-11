import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';

import { MobileNavigation } from './MobileNavigation';
import { DesktopNavigation } from './DesktopNavigation';

export interface NavHeaderProps {}

export interface StyledHeaderProps {
  height: number;
  active: boolean;
}

interface HeaderDataQuery {
  allNavigations: {
    text: string;
    link: string;
  }[];
  logo: {
    image: {
      url: string;
      alt: string;
    };
    href: string;
    size: number;
  };
}

export const NavHeader: React.FC<NavHeaderProps> = () => {
  const [activeBackgroundColor, setActiveBackgroundColor] =
    useState<boolean>(false);
  const [drawer, setDrawer] = useState<boolean>(false);
  const [headerData, setHeaderData] = useState<HeaderDataQuery | undefined>(
    undefined
  );

  const path = useRouter();
  const headerHeight: number = 70;

  const mobileView = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const changeBackgroundColor: () => void = () => {
    window.scrollY >= headerHeight
      ? setActiveBackgroundColor(true)
      : setActiveBackgroundColor(false);
  };

  const autoCloseDrawer = () => {
    mobileView ? undefined : setDrawer(false);
  };

  useEffect(() => {
    const fetchHeaderData = async () => {
      const response = await fetch('/api/get-header');
      const data = await response.json();
      if (data.status === false) setHeaderData(undefined);
      setHeaderData(data);
    };
    fetchHeaderData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeBackgroundColor);
    window.addEventListener('resize', autoCloseDrawer);
  });

  return (
    <>
      <Header
        height={headerHeight}
        active={activeBackgroundColor}
        variants={motionHeader}
        initial="hidden"
        animate="visible"
      >
        {!headerData ? undefined : (
          <>
            {mobileView ? (
              <MobileNavigation
                data={headerData.allNavigations}
                path={path.asPath}
                logo={headerData.logo}
                drawer={drawer}
                setDrawer={() => setDrawer(!drawer)}
              />
            ) : (
              <DesktopNavigation
                data={headerData.allNavigations}
                path={path.asPath}
                logo={headerData.logo}
              />
            )}
          </>
        )}
      </Header>
    </>
  );
};

const motionHeader = {
  hidden: { opacity: 0, y: -70 },
  visible: { opacity: 1, y: 0 },
};

const Header = styled(motion.header)<StyledHeaderProps>`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: ${(props) => props.height}px;
  z-index: 100;
  ${({ active }) =>
    active
      ? css`
          background-color: #2a2a2ada;
        `
      : css`
          background-color: none;
        `}
  transition: all 0.5s;
`;
