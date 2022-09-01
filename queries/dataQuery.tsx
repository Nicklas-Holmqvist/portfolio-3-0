export interface DataQuery {
  allSections: AllSection[];
  allHeads: AllHeads;
  allIcons: AllIcon[];
  allNavigations: AllNavigation[];
  hero: Hero;
  logo: Logo;
}

export interface AllSection {
  titleFirst: string;
  textFieldFirst: string;
  titleSecond: string;
  textFieldSecond: string;
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
  ariaRole: string;
  ariaLabel: string;
}

export interface AllHeads {
  title: string;
  metaName: string;
  metaContent: string;
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
  allSections {
    titleFirst
    textFieldFirst
    titleSecond
    textFieldSecond
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
    ariaRole
    ariaLabel
  }
  allHeads {
    title
    metaName
    metaContent
  }
  allIcons {
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
