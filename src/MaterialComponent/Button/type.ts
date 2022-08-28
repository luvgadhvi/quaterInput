import { ReactNode } from "react";
import { ButtonTypeMap } from '@mui/material/Button';

export interface CustomButtonType {
  color?: ButtonTypeMap["props"]["color"],
  children?: ReactNode,
  disabled?: boolean,
  fullWidth?: boolean,
  size?: ButtonTypeMap["props"]["size"],
  variant?: ButtonTypeMap["props"]["variant"],
  onClick?: () => void
}
