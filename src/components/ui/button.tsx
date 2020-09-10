import React from 'react';

import * as css from './button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={css.base} {...rest}>
      {children}
    </button>
  );
}

export default Button;
