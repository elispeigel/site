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
  small: string;
  regular: string;
  large: string;
  xlarge: string;
}

const sizeConstants: ISizes = {
  small: '1.5',
  regular: '3',
  large: '6',
  xlarge: '12',
}

const fontSizesTheme: ISizes = {
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
    small: `${sizeConstants.small}vh`,
    regular: `${sizeConstants.regular}vh`,
    large: `${sizeConstants.large}vh`,
    xlarge: `${sizeConstants.xlarge}vh`
  },
  horizontal: {
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