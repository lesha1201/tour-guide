import clsx from 'clsx';
import React from 'react';

import { OverwritableType } from 'types/common';
import * as css from './button-icon.module.scss';

export interface ButtonIconBaseProps<T extends React.ElementType> {
  /** Element type (React component or string) that will be used */
  as: T;
  children: React.ReactNode;
}

export type ButtonIconProps<T extends React.ElementType = 'button'> = OverwritableType<
  ButtonIconBaseProps<T>,
  T
>;

function ButtonIcon<T extends React.ElementType = 'button'>({
  as,
  children,
  className,
  ...rest
}: ButtonIconProps<T>) {
  const ElementType: React.ElementType = as;

  const cn = clsx(className, css.base);

  return (
    <ElementType className={cn} {...rest}>
      {children}
    </ElementType>
  );
}

ButtonIcon.defaultProps = {
  as: 'button',
};

export default ButtonIcon;
