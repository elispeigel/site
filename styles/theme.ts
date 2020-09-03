export interface ITheme {
  white: string;
  whiteShadow: string;
  gray: string;
  orange: string;
  blue: string;
  black: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
    white: '#FFFFFF',
    whiteShadow: '#D9D9D9',
    gray: '#E5E5E5',
    orange: '#FCA311',
    blue: '#14213D',
    black: '#2C2C2C'
}