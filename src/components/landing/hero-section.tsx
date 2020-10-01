import React from 'react';

import mainPhoto from 'static/photo.jpg';
import Header from 'components/header';
import Container from 'components/container';
import Button from 'components/ui/button';
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import * as css from './hero-section.module.scss';

export type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

function HeroSection(props: HeroSectionProps) {
  return (
    <div {...props} className={css.section}>
      <Header variant="light" />

      <div className={css.heroBox}>
        <Container className={css.heroBoxContainer}>
          <div className={css.heroImgBox}>
            <img className={css.heroImg} src={mainPhoto} />
          </div>
          <div>
            <h1 className={css.heroTitle}>Индивидуальный гид по Санкт-Петербургу</h1>
            <div className={css.heroCta}>
              <Button className={css.heroBtn} isRounded>
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
    </div>
  );
}

export default HeroSection;
