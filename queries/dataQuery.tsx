export interface DataQuery {
  allSections: AllSection[];
  allHeads: AllHeads;
  allIcons: AllIcon[];
  allNavigations: AllNavigation[];
}

export interface AllSection {
  titleFirst: string;
  textFieldFirst: string;
}

export interface AllHeads {
  title: string;
  metaName: string;
  metaContent: string;
}

export interface AllIcon {
  icon: {
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
  order: number;
}

export const dataQuery = `query allData {
  allSections {
    titleFirst
    textFieldFirst
  }
  allHeads {
    title
    metaName
    metaContent
  }
  allIcons {
    icon {
      url
      alt
    }
    title
    hasHover
    size
    href
  }
  allNavigations(orderBy: [order_ASC]){
    text
    link
    order
  }
}`;
