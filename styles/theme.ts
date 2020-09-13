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
  regular: string;
  large: string;
  xlarge: string;
}

const sizeConstants: ISizes = {
  xxsmall: '.375',
  xsmall: '.75',
  small: '1.5',
  regular: '3',
  large: '6',
  xlarge: '12',
}

const fontSizesTheme: ISizes = {
  xxsmall: 'clamp(2.5px, calc(.1875vh + .375vw), 5px)',
  xsmall: 'clamp(5px, calc(.375vh + .75vw), 10px)',
  small: 'clamp(10px, calc(.75vh + 1.5vw), 20px)',
  regular: 'clamp(20px, calc(1.5vh + 3vw), 40px)',
  large: 'clamp(40px, calc(3vh + 5vw), 80px)',
  xlarge: 'clamp(80px, calc(6vh + 10vw), 160px)'
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
    regular: `${sizeConstants.regular}vh`,
    large: `${sizeConstants.large}vh`,
    xlarge: `${sizeConstants.xlarge}vh`
  },
  horizontal: {
    xxsmall: `${sizeConstants.xxsmall}vw`,
    xsmall: `${sizeConstants.xsmall}vw`,
    small: `${sizeConstants.small}vw`,
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