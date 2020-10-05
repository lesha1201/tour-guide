import React, { useMemo } from 'react';
import { use100vh } from 'react-div-100vh';

import mainPhoto from 'static/photo.jpg';
import Header from 'components/header';
import Container from 'components/container';
import Button from 'components/ui/button';
import { EXCURSIONS_SECTION } from 'constants/sections';
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import * as css from './hero-section.module.scss';

export type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

function HeroSection(props: HeroSectionProps) {
  const height = use100vh();

  const content = useMemo(
    () => (
      <>
        <Header variant="light" />

        <div className={css.heroBox}>
          <Container className={css.heroBoxContainer}>
            <div className={css.heroImgBox}>
              <img className={css.heroImg} src={mainPhoto} />
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
    [],
  );

  return (
    <div {...props} style={{ minHeight: height || '100vh' }} className={css.section}>
      {content}
    </div>
  );
}

export default HeroSection;
