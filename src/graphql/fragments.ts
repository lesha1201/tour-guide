import { graphql } from 'gatsby';

export const EXCURSION_CARD_COVER_FRAGMENT = graphql`
  fragment ExcursionCardCover on File {
    childImageSharp {
      fluid(
        maxWidth: 460
        maxHeight: 260
        cropFocus: CENTER
        sizes: "(min-width: 92.5em) 462px, (min-width: 56.25em) 30vw, 220px"
        srcSetBreakpoints: [340, 690, 920, 1380]
      ) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
