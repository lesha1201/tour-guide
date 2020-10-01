import clsx from 'clsx';
import React from 'react';

import { OverwritableType } from 'types/common';
import * as css from './input-base.module.scss';

export interface InputBaseBaseProps<T extends React.ElementType> {
  /** Element type (React component or string) that will be used */
  as: T;
  isFullWidth?: boolean;
}

export type InputBaseProps<T extends React.ElementType = 'input'> = OverwritableType<
  InputBaseBaseProps<T>,
  T
>;

function InputBase<T extends React.ElementType = 'input'>({
  as,
  className,
  isFullWidth,
  ...rest
}: InputBaseProps<T>) {
  const cn = clsx(className, css.base, {
    [css.fullWidth]: isFullWidth,
  });

  const ElementType: React.ElementType = as;

  return <ElementType className={cn} {...rest} />;
}

InputBase.defaultProps = {
  as: 'input',
};

export default InputBase;
