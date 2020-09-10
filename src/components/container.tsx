import React from 'react';
import clsx from 'clsx';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...rest }: ContainerProps) {
  return <div className={clsx('container', className)} {...rest} />;
}
