export interface DataQuery {
  allSections: Section[];
  allHeads: AllHeads;
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
  textFieldFirst: string;
  titleSecond: string;
  contentSecond: {
    value: any;
  };
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
  sectionId: string;
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
  allSections(orderBy: order_ASC) {
    titleFirst
    subTitle
    contentFirst {
      value
    }
    textFieldFirst
    titleSecond
    contentSecond {
      value
    }
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
    sectionId
    ariaRole
    ariaLabel
  }
  allHeads {
    title
    metaName
    metaContent
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
