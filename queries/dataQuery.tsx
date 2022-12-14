export interface DataQuery {
  allSections: Section[];
  allHeads: AllHeads[];
  allFooters: AllFooter[];
  allIcons: AllIcon[];
  allNavigations: AllNavigation[];
  hero: Hero;
  logo: Logo;
}

export interface Section {
  length: number;
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
  imageGallery: ImageGallery;
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
  hover: boolean;
  size: number;
  href: string;
}
export interface AllIcon {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  hover: boolean;
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

export interface ImageGallery {
  imageSet: any;
  gallery: Gallery;
}

export interface Gallery {
  title: string;
  slug: string;
  metaTitle: string;
  imageSet: ImageSet[];
}

export interface ImageSet {
  src: any;
  responsiveImage: ResponsiveImage;
}

export interface ResponsiveImage {
  title: string;
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
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
    imageGallery {
      title
      slug
      imageSet {
        responsiveImage {
          title
          src
          srcSet
          width
          height
          alt          
        }
      }
    }
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
    hover
    title
  }
  allIcons(orderBy: order_ASC) {
    image {
      url
      alt
    }
    size
    href
    hover
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
