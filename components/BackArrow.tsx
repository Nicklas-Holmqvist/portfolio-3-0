import React from 'react';

import Link from 'next/link';
import backArrow from '../assets/svg/bi_arrow-left.svg';
import { Icon } from './Icon';

interface BackArrowProps {}

export const BackArrow: React.FC<BackArrowProps> = () => {
  return (
    <>
      <Link href="/">
        <a>
          <Icon src={backArrow} alt={'go back'} hasHover={false} size={24} />
        </a>
      </Link>
    </>
  );
};
