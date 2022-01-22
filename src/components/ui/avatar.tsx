import clsx from 'clsx';
import React from 'react';

import css from './avatar.module.scss';

/* -- AvatarImg */

export type AvatarImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

function AvatarImg({ className, ...rest }: AvatarImgProps) {
  return <img className={clsx(className, css.image)} alt="Avatar" {...rest} />;
}

/* -- Avatar */

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  size: 'md' | 'stretch';
  src?: string;
} & ({ src: string } | { children: React.ReactNode });

function Avatar({ size, className, src, children, ...domAttrs }: AvatarProps) {
  const cn = {
    base: clsx(className, css.base, {
      [css.sizeMd]: size === 'md',
      [css.sizeStretch]: size === 'stretch',
    }),
  };

  return (
    <div className={cn.base} {...domAttrs}>
      {src ? <AvatarImg src={src} /> : children}
    </div>
  );
}

Avatar.defaultProps = {
  size: 'md',
};

Avatar.Img = AvatarImg;

export default Avatar;
