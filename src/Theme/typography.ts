//Font Size
const fontFamily = ['Poppins', 'Montserrat'].join(',');

//Font Weights

const light = 300;
const regular = 400;
const semiBold = 500;
const bold = 600;
const bolder = 700;

const h1 = {
  component: 'h1',
  styles: {
    fontSize: '2.75rem',
    lineHeight: '3.375rem',
    fontWeight: bolder
  }
}

const h2 = {
  component: 'h2',
  styles: {
    fontSize: '2rem',
    lineHeight: '2.5rem',
    letterSpacing: '0rem',
    fontWeight: bolder
  }
}

const h3 = {
  component: 'h3',
  styles: {
    fontSize: '1.5rem',
    lineHeight: '1.875rem',
    letterSpacing: '0rem',
    fontWeight: bolder
  }
}
const h4 = {
  component: 'h4',
  styles: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    letterSpacing: '0.16px',
    fontWeight: bolder
  }
}
const h5 = {
  component: 'h5',
  styles: {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.16px',
    fontWeight: bolder
  }
}
const h6 = {
  component: 'h6',
  styles: {
    fontSize: '1rem',
    lineHeight: '1.375rem',
    letterSpacing: '0.16px',
    fontWeight: bolder
  }
}
const subHeading = {
  component: 'h6',
  styles: {
    fontSize: '1rem',
    lineHeight: '1.375rem',
    letterSpacing: '0.16px'
  }
}

function getTypographyTheme() {
  return {
    typography: {
      fontFamily,
      fontWeightLight: light,
      fontWeightRegular: regular,
      fontWeightMedium: semiBold,
      fontWeightBold: bold,
      h1: h1.styles,
      h2: h2.styles,
      h3: h3.styles,
      h4: h4.styles,
      h5: h5.styles,
      h6: h6.styles,
      subHeading: subHeading.styles
    },
    variants: {
      h1: h1.component,
      h2: h2.component,
      h3: h3.component,
      h4: h4.component,
      h5: h5.component,
      h6: h6.component,
      subHeading: subHeading.component
    }
  }
}

export {
  getTypographyTheme
}