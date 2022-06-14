import React from 'react';

export default function TextArea({ name, placeholder, value, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}
