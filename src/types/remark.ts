export type MarkdownRemarkNode = {
  id: string;
  html: string;
  fields: {
    slug: string;
    categorySlug?: string;
    tagSlugs?: string[];
  };
  frontmatter: {
    date: string;
    title: string;
    description?: string;
    category?: string;
    tags?: string[];
    socialImage?: string;
  };
};

export type MarkdownRemarkEdge = {
  node: MarkdownRemarkNode;
};

export type Edges = Array<MarkdownRemarkEdge>;

export type AllMarkdownRemark = {
  allMarkdownRemark: {
    edges: Edges;
  };
  group: {
    fieldValue: string;
    totalCount: number;
  }[];
};

export type MarkdownRemark = MarkdownRemarkNode;
