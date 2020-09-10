import React from 'react';
import clsx from 'clsx';

import Logo, { LogoColor } from './logo';
import * as css from './logo-text.module.scss';

export type LogoTextProps = {
  color: LogoColor;
  className: {
    base?: string;
    icon?: string;
    title?: string;
    subtitle?: string;
  };
  hasSubtitle?: boolean;
};

function LogoText({ className, color, hasSubtitle }: LogoTextProps) {
  const cn = {
    base: clsx(className.base, css.base),
    icon: clsx(className.icon, css.icon),
    title: clsx(className.title, css.title),
    subtitle: clsx(className.subtitle, css.subtitle),
  };

  return (
    <div className={cn.base}>
      <div className={cn.icon}>
        <Logo color={color} />
      </div>
      <div>
        <div className={cn.title}>Марина Петрова</div>
        {hasSubtitle && <div className={cn.subtitle}>Гид по Санкт-Петербургу</div>}
      </div>
    </div>
  );
}

LogoText.defaultProps = {
  color: 'primary',
  className: {},
};

export default LogoText;
