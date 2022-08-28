import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonType } from './type';

function CustomButton(props: CustomButtonType) {
  const { children, color = 'primary', disabled = false, fullWidth = false, size = 'medium', variant = 'contained', onClick } = props;
  return (<Button color={color} disabled={disabled} fullWidth={fullWidth} size={size} variant={variant} onClick={onClick} >
    {children}
  </Button>
  )
}

export default CustomButton;