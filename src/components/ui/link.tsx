import React from 'react';
import clsx from 'clsx';

import { OverwritableType } from 'types/common';
import * as css from './link.module.scss';

export type LinkBaseProps<T extends React.ElementType = 'a'> = {
  /** Element type (React component or string) that will be used */
  as: T;
  color?: 'inherit';
  withUnderline?: boolean;
  children?: React.ReactNode;
};

export type LinkProps<T extends React.ElementType = 'a'> = OverwritableType<
  LinkBaseProps<T>,
  T
>;

function Link<T extends React.ElementType = 'a'>({
  as,
  children,
  className,
  withUnderline,
  color,
  ...rest
}: LinkProps<T>) {
  const cn = clsx([
    className,
    css.base,
    {
      [css.underline]: withUnderline,
      [css.colorInherit]: color === 'inherit',
    },
  ]);

  const ElementType: React.ElementType = as;

  return (
    <ElementType className={cn} {...rest}>
      {children}
    </ElementType>
  );
}

Link.defaultProps = {
  as: 'a',
};

export default Link;
