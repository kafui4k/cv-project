import React from 'react';

export default function Input({
  id,
  type,
  name,
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
