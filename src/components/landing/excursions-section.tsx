import React from 'react';

import landingBg from 'static/landing-bg.jpg';
import SectionTitle from 'components/ui/section-title';
import Button from 'components/ui/button';
import ExcursionCard from 'components/excursion-card';
import Section from './section';
import * as css from './excursions-section.module.scss';

const EXCURSIONS = [
  {
    coverImgSrc: landingBg,
    title: 'Экскурсия в Царское Село',
    duration: 'от 3 часов',
    price: 6000,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
  },
  {
    coverImgSrc: landingBg,
    title: 'Экскурсия в Царское Село',
    duration: 'от 3 часов',
    price: 6000,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
  },
  {
    coverImgSrc: landingBg,
    title: 'Экскурсия в Царское Село',
    duration: 'от 3 часов',
    price: 6000,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
  },
  {
    coverImgSrc: landingBg,
    title: 'Экскурсия в Царское Село',
    duration: 'от 3 часов',
    price: 6000,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
  },
  {
    coverImgSrc: landingBg,
    title: 'Экскурсия в Царское Село',
    duration: 'от 3 часов',
    price: 6000,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
  },
  {
    coverImgSrc: landingBg,
    title: 'Экскурсия в Царское Село',
    duration: 'от 3 часов',
    price: 6000,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos',
  },
];

function ExcursionsSection() {
  return (
    <Section variant="secondary">
      <SectionTitle align="center">Экскурсии</SectionTitle>
      <div className={css.excursions}>
        <div className={css.excursionsWrapper}>
          {EXCURSIONS.map((excursion, index) => (
            <a key={index} href="#" className={css.excursionCardWrapper}>
              <ExcursionCard {...excursion} />
            </a>
          ))}
        </div>
      </div>
      <Button className={css.button} size="lg" isRounded>
        Смотреть все
      </Button>
    </Section>
  );
}

export default ExcursionsSection;
