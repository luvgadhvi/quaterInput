import { createTheme } from '@mui/material/styles'

import { getTypographyTheme } from './typography';

const { typography, variants: typographyVariants } = getTypographyTheme()

const primaryColour = '#20368F';
const secondaryColour = '#6E6E6E';


const BaseTheme = createTheme({
  palette: {
    primary: {
      main: primaryColour
    },
    secondary: {
      main: secondaryColour
    }
  },
  typography,
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: typographyVariants
      },
    },
  },
})

export { BaseTheme }