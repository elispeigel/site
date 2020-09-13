interface IColorsTheme {
  tan: string;
  black: string;
  green: string;
  blue: string;
  brown: string;
  red: string;
}
const colorsTheme: IColorsTheme = {
  tan: '#DFCDAE',
  black: '#2B2B30',
  green: '#1E673C',
  blue: '#2840AF',
  brown: '#482613',
  red: '#D00000'
}

interface ISizes {
  xxsmall: string;
  xsmall: string;
  small: string;
  smaller: string;
  regular: string;
  large: string;
  xlarge: string;
}

const sizeConstants: ISizes = {
  xxsmall: '.25',
  xsmall: '.5',
  small: '1',
  smaller: '2',
  regular: '3',
  large: '6',
  xlarge: '9',
}

const fontSizesTheme: ISizes = {
  xxsmall: `clamp(3px, calc(${sizeConstants.xxsmall}vh + ${sizeConstants.xxsmall}vw), 6px)`,
  xsmall: `clamp(6px, calc(${sizeConstants.xsmall}vh + ${sizeConstants.xsmall}vw), 12px)`,
  small: `clamp(12px, calc(${sizeConstants.small}vh + ${sizeConstants.small}vw), 24px)`,
  smaller: `clamp(18px, calc(${sizeConstants.smaller}vh + ${sizeConstants.smaller}vw), 36px)`,
  regular: `clamp(24px, calc(${sizeConstants.regular}vh + ${sizeConstants.regular}vw), 48px)`,
  large: `clamp(48px, calc(${sizeConstants.large}vh + ${sizeConstants.large}vw), 96px)`,
  xlarge: `clamp(72px, calc(${sizeConstants.large}vh + ${sizeConstants.large}vw), 144px)`,
}

interface IRelationalSizesTheme {
  vertical: ISizes,
  horizontal: ISizes,
  regular: ISizes
}

const relationalSizesTheme: IRelationalSizesTheme = {
  vertical: {
    xxsmall: `${sizeConstants.xxsmall}vh`,
    xsmall: `${sizeConstants.xsmall}vh`,
    small: `${sizeConstants.small}vh`,
    smaller: `${sizeConstants.smaller}vh`,
    regular: `${sizeConstants.regular}vh`,
    large: `${sizeConstants.large}vh`,
    xlarge: `${sizeConstants.xlarge}vh`
  },
  horizontal: {
    xxsmall: `${sizeConstants.xxsmall}vw`,
    xsmall: `${sizeConstants.xsmall}vw`,
    small: `${sizeConstants.small}vw`,
    smaller: `${sizeConstants.smaller}vh`,
    regular: `${sizeConstants.regular}vw`,
    large: `${sizeConstants.large}vw`,
    xlarge: `${sizeConstants.xlarge}vw`
  },
  regular: {
    ...sizeConstants
  }
}

export interface ITheme {
  colors: IColorsTheme,
  fontSizes: ISizes,
  relationalSizes: IRelationalSizesTheme,
  borderRadius: string,
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  colors: colorsTheme,
  fontSizes: fontSizesTheme,
  relationalSizes: relationalSizesTheme,
  borderRadius: '30px',
}