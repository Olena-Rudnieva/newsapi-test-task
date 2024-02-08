export const breakpoints = ['320', '576', '992'];

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#1d2946',
    secondBlack: 'rgba(18, 20, 23, 0.5)',
    accent: '#0b44cd',
    blue: '#3470ff',
    grey: '#99a6b2',
    dark: '#1d2946',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  fontSizes: {
    xxxxxs: '8px',
    xxxxs: '10px',
    xxxs: '12px',
    xxs: '14px',
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '28px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '54px',
    xxxxxl: '90px',
    xxxxxxl: '300px',
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],

  mq: {
    mobile: `@media screen and (max-width: ${breakpoints[0]}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },

  boxShadow: {
    card: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    friends: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    notice: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};
