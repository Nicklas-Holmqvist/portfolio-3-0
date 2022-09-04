export interface DataQuery {
  allSections: Section[];
  allHeads: AllHeads;
  allFooters: AllFooter[];
  allIcons: AllIcon[];
  allNavigations: AllNavigation[];
  hero: Hero;
  logo: Logo;
}

export interface Section {
  titleFirst: string;
  subTitle: string;
  contentFirst: {
    value: any;
  };
  titleSecond: string;
  contentSecond: {
    value: any;
  };
  galleryButtonBoolean: boolean;
  galleryButtonLink: string;
  galleryButtonText: string;
  imageBoolean: boolean;
  image: {
    url: string;
    alt: string;
  };
  width: number;
  height: number;
  imageSubText: string;
  sectionId: string;
  ariaRole: string;
  ariaLabel: string;
}

export interface AllHeads {
  title: string;
  metaName: string;
  metaContent: string;
}

export interface AllFooter {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  hasHover: boolean;
  size: number;
  href: string;
}
export interface AllIcon {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  hasHover: boolean;
  size: number;
  href: string;
}

export interface AllNavigation {
  text: string;
  link: string;
}

export interface Hero {
  image: {
    url: string;
    alt: string;
  };
}

export interface Logo {
  image: {
    url: string;
    alt: string;
  };
  href: string;
  size: number;
}

export const dataQuery = `query allData {
  allSections(orderBy: order_ASC) {
    titleFirst
    subTitle
    contentFirst {
      value
    }
    titleSecond
    contentSecond {
      value
    }
    galleryButtonBoolean
    galleryButtonLink
    galleryButtonText
    imageBoolean
    image {
      url
      alt
    }
    width
    height
    imageSubText
    sectionId
    ariaRole
    ariaLabel
  }
  allHeads {
    title
    metaName
    metaContent
  }
  allFooters(orderBy: order_ASC) {
    image {
      url
      alt
    }
    size
    href
    hasHover
    title
  }
  allIcons(orderBy: order_ASC) {
    image {
      url
      alt
    }
    size
    href
    hasHover
    title
  }
  allNavigations(orderBy: order_ASC) {
    text
    link
  }
  hero {
    image {
      url
      alt
    }
  }
  logo {
    image {
      url
      alt
    }
    href
    size
  }
}
`;
