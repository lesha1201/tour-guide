import clsx from 'clsx';
import React from 'react';

import * as css from './excursion-property.module.scss';

export type ExcursionPropertyProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: {
    base?: string;
    icon?: string;
    text?: string;
  };
};

function ExcursionProperty({ className, icon, children }: ExcursionPropertyProps) {
  const cn = {
    base: clsx(className?.base, css.base),
    icon: clsx(className?.icon, css.icon),
    text: clsx(className?.text),
  };

  return (
    <div className={cn.base}>
      <div className={cn.icon}>{icon}</div>
      <div className={cn.text}>{children}</div>
    </div>
  );
}

export default ExcursionProperty;
