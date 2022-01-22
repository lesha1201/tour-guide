import React from 'react';

import SectionTitle from 'components/ui/section-title';
import Section, { SectionProps } from './section';
import Feature from './feature';
import css from './features-section.module.scss';

export type HeroSectionProps = Partial<SectionProps>;

const FEATURES = [
  {
    title: 'Заголовок',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim mollis lacus, id porta urna ultrices id.',
  },
  {
    title: 'Заголовок',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim mollis lacus, id porta urna ultrices id.',
  },
  {
    title: 'Заголовок',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim mollis lacus, id porta urna ultrices id.',
  },
  {
    title: 'Заголовок',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim mollis lacus, id porta urna ultrices id.',
  },
];

function FeaturesSection(props: HeroSectionProps) {
  return (
    <Section {...props} className={css.section}>
      <SectionTitle align="center">Преимущества</SectionTitle>
      <div className={css.features}>
        {FEATURES.map((feature, index) => (
          <div key={index} className={css.featureBox}>
            <Feature {...feature} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default FeaturesSection;
