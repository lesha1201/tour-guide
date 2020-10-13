import { FluidObject } from 'gatsby-image';

import {
  GatsbyImageSharpFluidFragment,
  MdxFrontmatter,
  Maybe,
  ExcursionGalleryImageFragment,
} from 'types/graphql';

type ExcursionFrontmatter =
  | Maybe<
      Pick<MdxFrontmatter, 'title' | 'description' | 'price' | 'duration'> & {
        coverImage?: Maybe<{
          childImageSharp?: Maybe<{
            fluid?: Maybe<GatsbyImageSharpFluidFragment>;
            cover?: Maybe<GatsbyImageSharpFluidFragment>;
          }>;
        }>;
        gallery?: Maybe<Array<Maybe<ExcursionGalleryImageFragment>>>;
      }
    >
  | undefined;

export function formatExcursionFrontmatterData(data: ExcursionFrontmatter) {
  return {
    coverImage: {
      fluid:
        (data?.coverImage?.childImageSharp?.fluid as FluidObject) ||
        (data?.coverImage?.childImageSharp?.cover as FluidObject) ||
        undefined,
    },
    gallery: data?.gallery?.map(image => image?.childImageSharp) || [],
    title: data?.title || '',
    duration: data?.duration || undefined,
    price: data?.price || 0,
    description: data?.description || '',
  };
}
