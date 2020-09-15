import clsx from 'clsx';
import React from 'react';

import Container from 'components/container';
import * as css from './section.module.scss';

export type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
};

function Section({ variant, className, children, ...rest }: SectionProps) {
  const sectionCn = clsx(className, css[variant]);

  return (
    <section className={sectionCn} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}

Section.defaultProps = {
  variant: 'primary',
};

export default Section;
