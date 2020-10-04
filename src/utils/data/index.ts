import { FluidObject } from 'gatsby-image';

import {
  GatsbyImageSharpFluidFragment,
  MarkdownRemarkFrontmatter,
  Maybe,
} from 'types/graphql';

type ExcursionFrontmatter = Pick<
  MarkdownRemarkFrontmatter,
  'title' | 'description' | 'price' | 'duration'
> & {
  coverImage?: Maybe<{
    childImageSharp?: Maybe<{
      fluid?: Maybe<GatsbyImageSharpFluidFragment>;
    }>;
  }>;
};

export function formatExcursionFrontmatterData(data: ExcursionFrontmatter) {
  return {
    coverImage: {
      fluid: (data.coverImage?.childImageSharp?.fluid as FluidObject) || undefined,
    },
    title: data.title || '',
    duration: data.duration || undefined,
    price: data.price || 0,
    description: data.description || '',
  };
}
