export interface DataQuery {
  allSections: AllSections[];
  allHeads: AllHeads;
  allIcons: AllIcons[];
  allNavigations: AllNavigations[];
}

export interface AllSections {
  titleFirst: string;
  textFieldFirst: string;
}

export interface AllHeads {
  title: string;
  metaName: string;
  metaContent: string;
}

export interface AllIcons {
  icon: {
    url: string;
    alt: string;
  };
  hasHover: boolean;
  size: number;
  href: string;
}

export interface AllNavigations {
  text: string;
  link: string;
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
    hasHover
    size
    href
  }
  allNavigations {
    text
    link
  }
}`;
