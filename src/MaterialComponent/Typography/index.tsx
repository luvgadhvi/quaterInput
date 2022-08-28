import React from "react";
import Typography from '@mui/material/Typography';
import { CustomTypographyType } from './type';

function CustomTypography(props: CustomTypographyType) {
  const { variant = 'subtitle1', align = 'left', component = 'span', children = '' } = props
  return (
    <Typography variant={variant} align={align} component={component} >
      {children}
    </Typography>)
}

export default CustomTypography;