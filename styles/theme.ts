interface IColorsTheme {
  tan: string;
  black: string;
  green: string;
  blue: string;
  brown: string;
}
const colorsTheme: IColorsTheme = {
    tan: '#DFCDAE',
    black: '#2B2B30',
    green: '#1E673C',
    blue: '#2840AF',
    brown: '#361B0B'
}


export interface ITheme {
  colors: IColorsTheme,
  borderRadius: string,
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  colors: colorsTheme,
  borderRadius: '30px',
}