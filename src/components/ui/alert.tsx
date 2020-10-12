import clsx from 'clsx';
import React from 'react';

import * as css from './alert.module.scss';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: 'success' | 'error';
  children: React.ReactNode;
};

function Alert({ variant, children, className, ...rest }: AlertProps) {
  const cn = clsx(className, css[variant]);

  return (
    <div className={cn} {...rest}>
      {children}
    </div>
  );
}

Alert.defaultProps = {
  variant: 'success',
};

export default Alert;
