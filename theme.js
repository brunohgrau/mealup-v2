/* 

SPACING

spacing: {
    xxs(1): "0.25em", 
    xs(2): "0.5em", 
    s(4): "1em",
    m(5): "1.25em",
    l(8): "2em",
    xl(14): "3.25em",
    xxl(20): "5.25em",
  },


SCREENS

export const viewports = {
  XS: 400,
  S: 640,
  M: 768,
  L: 1024,
  XL: 1440,
}

xs  400px
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }




TYPOGRAPHY


const typography = {
  fontSize: {
    body(lg): '1.125rem',
    body(base): '1rem',
    bodyXS(sm): '0.9rem',
    bodyXXS(xs): '0.72rem',
    heading1(5xl): '2.74rem',
    heading2(4xl): '2.19rem',
    heading3(3xl): '1.75rem',
    heading4(2xl): '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
}

BORDER-RADIUS

const borderRadius = {
  xs: '4px',
  s(sm): '8px',
  m(md): '16px',
  l(lg): '24px',
  xl(xl): '32px',
  xxl(2xl): '40px',
  round: '50%',
}

BOX-SHADOW


const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.blue.dark2}, 0 0 0 4px ${baseColors.blue.light5}`,
}


COLOR

const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  otherBlack: '#2C2C2C ',
  grey: {
    base: '#909090',
    light1: '#A6A6A6',
    light2: '#BCBCBC',
    light3: '#D2D2D2',
    light4: '#E9E9E9',
    light5: '#F5F6F7',
    light6: '#F9F9F9',
    dark1: '#797979',
    dark2: '#636363',
    dark3: '#4D4D4D',
    dark4: '#363636',
    dark5: '#2C2C2C',
    dark6: '#202020',
  },
  green: {
    base: '#E5F8BC',
    light1: '#E8F9C3',
    light2: '#EAF9C9',
    light3: '#EDFAD0',
    light4: '#EFFBD7',
    light5: '#F2FCDE',
    dark1: '#CEDFA9',
    dark2: '#B7C696',
    dark3: '#A0AE84',
    dark4: '#899571',
    dark5: '#737C5E',
  },
  blue: {
    base: '#B1DDE4',
    light1: '#B9E0E7',
    light2: '#C1E4E9',
    light3: '#C8E7EC',
    light4: '#D0EBEF',
    light5: '#D8EEF2',
    dark1: '#9FC7CD',
    dark2: '#8EB1B6',
    dark3: '#7C9BA0',
    dark4: '#6A8589',
    dark5: '#596f72',
  },
}


const color = {
  accentText: baseColors.black,
  badgeBackground: baseColors.grey.light4,
  badgeText: baseColors.grey.dark2,
  cartButtonText: baseColors.grey.base,
  bannerBackground: baseColors.blue.base,
  buttonClear: 'transparent',
  buttonClearHover: baseColors.grey.light5,
  buttonPrimary: baseColors.grey.dark6,
  buttonPrimaryHover: baseColors.grey.dark5, // recheck
  buttonSecondary: baseColors.green.base,
  buttonSecondaryHover: baseColors.green.dark1, // recheck
  buttonText: baseColors.white,
  cardBackground: baseColors.grey.light6,
  checkoutTopBackground: baseColors.green.base,
  checkoutBottomBackground: baseColors.grey.light6,
  formBackground: baseColors.white,
  foodItemBackground: baseColors.white,
  footerBackground: baseColors.grey.dark5,
  headerBackground: baseColors.white,
  restaurantDetailBackground: baseColors.white,
  headerBorder: baseColors.grey.light4,
  inputBackground: baseColors.grey.light5,
  inputHint: baseColors.grey.dark1,
  inputIcon: baseColors.grey.dark6,
  label: baseColors.grey.dark4,
  labelActive: baseColors.grey.dark6,
  menuSectionBackground: baseColors.grey.light6,
  stepsIndicatorInnerBar: baseColors.grey.dark6,
  stepsIndicatorOuterBar: baseColors.grey.light5,
  orderSummaryBackground: baseColors.white,
  overlayBackground: baseColors.white,
  overlayHeader: baseColors.grey.light5,
  primaryText: baseColors.otherBlack,
  reviewText: baseColors.blue.dark5,
  screenBackground: baseColors.white,
  sidebarHeader: baseColors.grey.dark4,
  sidebarFooter: baseColors.white,
  skeletonBase: baseColors.grey.light4,
  skeletonHighlight: baseColors.grey.light5,
  topBannerBackground: baseColors.green.base,
  newRestaurantTag: baseColors.green.base,
  white: baseColors.white,
  black: baseColors.black,
}





*/
