import React from 'react';

import { InputWrapper } from './input.styles';

export default function Input({
  id,
  type,
  name,
  placeholder,
  value,
  onChange
}) {
  return (
    <InputWrapper
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
