import React from 'react';

import { Button } from './custom-button.styles';

function CustomButton({ type, primary, onClick, text }) {
  return (
    <Button type={type} primary={primary} onClick={() => onClick()}>
      {text}
    </Button>
  );
}

export default CustomButton;
