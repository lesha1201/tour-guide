import React from 'react';

import InputBase, { InputBaseProps } from './input-base';

export type InputProps = Omit<InputBaseProps<'input'>, 'as'>;

function Input(props: InputProps) {
  return <InputBase as="input" {...props} />;
}

export default Input;
