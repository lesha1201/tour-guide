import clsx from 'clsx';
import { camelCase } from 'lodash';
import React from 'react';

import InputBase, { InputBaseProps } from './input-base';
import css from './textarea.module.scss';

export type TextareaProps = Omit<InputBaseProps<'textarea'>, 'as'> & {
  resize: 'vertical' | 'horizontal' | 'none';
};

function Textarea({ className, resize, ...rest }: TextareaProps) {
  const resizeCnKey = camelCase(`resize-${resize}`) as keyof typeof css;
  const cn = clsx(className, css[resizeCnKey]);

  return <InputBase as="textarea" className={cn} {...rest} />;
}

Textarea.defaultProps = {
  resize: 'vertical',
};

export default Textarea;
