import React from 'react';
import clsx from 'clsx';

import { OverwritableType } from 'types/common';
import css from './container.module.scss';

export type ContainerBaseProps<T extends React.ElementType> = {
  /** Element type (React component or string) that will be used */
  as: T;
  variant: 'default' | 'page';
};

export type ContainerProps<T extends React.ElementType = 'div'> = OverwritableType<
  ContainerBaseProps<T>,
  T
>;

function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  variant,
  ...rest
}: ContainerProps<T>) {
  const ElementType: React.ElementType = as;

  return <ElementType className={clsx(css[variant], className)} {...rest} />;
}

Container.defaultProps = {
  as: 'div',
  variant: 'default',
};

export default Container;
