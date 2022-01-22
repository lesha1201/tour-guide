import clsx from 'clsx';
import React from 'react';

import css from './section-title.module.scss';

export type SectionTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  align: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

function SectionTitle({ children, className, align, ...rest }: SectionTitleProps) {
  const cn = clsx(className, css.base, {
    [css.alignLeft]: align === 'left',
    [css.alignCenter]: align === 'center',
    [css.alignRight]: align === 'right',
  });

  return (
    <h2 className={cn} {...rest}>
      {children}
    </h2>
  );
}

export default SectionTitle;
