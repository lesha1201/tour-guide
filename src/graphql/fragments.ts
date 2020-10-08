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

export const EXCURSION_COVER_FRAGMENT = graphql`
  fragment ExcursionCover on File {
    childImageSharp {
      fluid(maxWidth: 1480) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const EXCURSION_GALLERY_IMAGE_FRAGMENT = graphql`
  fragment ExcursionGalleryImage on File {
    childImageSharp {
      fluid(maxWidth: 352) {
        ...GatsbyImageSharpFluid_withWebp
      }
      original {
        src
      }
    }
  }
`;

export const TESTIMONIAL_FRAGMENT = graphql`
  fragment Testimonial on TestimonialsYaml {
    id
    fullName
    avatar {
      childImageSharp {
        fixed(width: 64, height: 64, cropFocus: CENTER) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    excursion {
      name
    }
    text
  }
`;
