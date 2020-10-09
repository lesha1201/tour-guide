import React, { useMemo } from 'react';
import { use100vh } from 'react-div-100vh';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { HeroSection_ProfilePhotoQuery } from 'types/graphql';
import Header from 'components/header';
import Container from 'components/container';
import Button from 'components/ui/button';
import { EXCURSIONS_SECTION } from 'constants/sections';
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import * as css from './hero-section.module.scss';

export type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

function HeroSection(props: HeroSectionProps) {
  const { profilePhoto, background, backgroundMobile } = useStaticQuery<
    HeroSection_ProfilePhotoQuery
  >(graphql`
    query HeroSection_ProfilePhoto {
      profilePhoto: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "profile-photo" }
      ) {
        childImageSharp {
          fluid(maxWidth: 358) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      backgroundMobile: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "landing-bg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 768, maxHeight: 1024, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      background: file(sourceInstanceName: { eq: "images" }, name: { eq: "landing-bg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundSources = useMemo(
    () =>
      [
        backgroundMobile?.childImageSharp?.fluid,
        { ...background?.childImageSharp?.fluid, media: '(min-width: 768px)' },
      ].filter(Boolean) as FluidObject[],
    [background?.childImageSharp?.fluid, backgroundMobile?.childImageSharp?.fluid],
  );

  const profilePhotoImage = profilePhoto?.childImageSharp?.fluid;

  const height = use100vh();

  const content = useMemo(
    () => (
      <>
        <Header variant="light" />

        <div className={css.heroBackground}>
          <Img
            className={css.heroBackgroundImage}
            fluid={backgroundSources}
            durationFadeIn={200}
            loading="eager"
          />
          <div className={css.heroBackgroundOverlay} />
        </div>

        <div className={css.heroBox}>
          <Container className={css.heroBoxContainer}>
            <div className={css.heroImgBox}>
              {profilePhotoImage && (
                <Img
                  className={css.heroImg}
                  fluid={profilePhotoImage as FluidObject}
                  durationFadeIn={200}
                  loading="eager"
                />
              )}
            </div>
            <div>
              <h1 className={css.heroTitle}>Индивидуальный гид по Санкт-Петербургу</h1>
              <div className={css.heroCta}>
                <Button
                  as="a"
                  className={css.heroBtn}
                  href={`#${EXCURSIONS_SECTION.id}`}
                  isRounded
                >
                  Экскурсии
                </Button>
                <Button
                  className={css.heroBtn}
                  variant="outlined"
                  mainColor="white"
                  isRounded
                >
                  Обо мне
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <div className={css.chevronDown}>
          <ChevronDown />
        </div>
      </>
    ),
    [backgroundSources, profilePhotoImage],
  );

  return (
    <div {...props} style={{ minHeight: height || '100vh' }} className={css.section}>
      {content}
    </div>
  );
}

export default HeroSection;
