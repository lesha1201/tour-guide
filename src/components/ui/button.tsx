import React from 'react';
import clsx from 'clsx';

import { OverwritableType } from 'types/common';
import * as css from './button.module.scss';

export interface ButtonBaseProps<T extends React.ElementType> {
  /** Element type (React component or string) that will be used */
  as: T;
  variant: 'painted' | 'outlined';
  mainColor: 'primary' | 'white';
  size?: 'wide' | 'full';
  isRounded?: boolean;
  children?: React.ReactNode;
}

export type ButtonProps<T extends React.ElementType = 'button'> = OverwritableType<
  ButtonBaseProps<T>,
  T
>;

function Button<T extends React.ElementType = 'button'>({
  as,
  children,
  className,
  variant,
  mainColor,
  size,
  isRounded,
  ...rest
}: ButtonProps<T>) {
  const cn = clsx(
    className,
    css[variant],
    css[mainColor],
    size && css[size],
    isRounded && css.rounded,
  );

  const ElementType: React.ElementType = as;

  return (
    <ElementType className={cn} {...rest}>
      {children}
    </ElementType>
  );
}

Button.defaultProps = {
  as: 'button',
  variant: 'painted',
  mainColor: 'primary',
};

export default Button;
