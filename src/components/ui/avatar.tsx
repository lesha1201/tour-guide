import clsx from 'clsx';
import React from 'react';

import * as css from './avatar.module.scss';

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  size: 'md' | 'stretch';
};

function Avatar({ size, className, src, ...domAttrs }: AvatarProps) {
  const cn = {
    base: clsx(className, css.base, {
      [css.sizeMd]: size === 'md',
      [css.sizeStretch]: size === 'stretch',
    }),
    image: clsx(css.image),
  };

  return (
    <div className={cn.base} {...domAttrs}>
      <img className={cn.image} alt="Avatar" src={src} />
    </div>
  );
}

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
