import clsx from 'clsx';
import React from 'react';

import * as css from './feature.module.scss';

export type FeatureProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  // TODO: make it required once we have icons
  icon?: React.ReactNode;
};

function Feature({ title, description, icon, className, ...rest }: FeatureProps) {
  const cn = clsx(className, css.base);

  return (
    <div className={cn} {...rest}>
      <div className={css.iconBox}>{icon}</div>
      <h4 className={css.title}>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Feature;
