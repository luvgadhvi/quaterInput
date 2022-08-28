import { ElementType, ReactNode } from "react";
import { TypographyTypeMap } from '@mui/material/Typography';

export interface CustomTypographyType {
  variant?: TypographyTypeMap["props"]["variant"],
  align?: TypographyTypeMap["props"]["align"],
  component?: ElementType,
  children?: ReactNode
}
