interface IColorsTheme {
  tan: string;
  black: string;
  green: string;
  blue: string;
  brown: string;
  red: string;
}

const colorsTheme: IColorsTheme = {
  tan: "#DFCDAE",
  black: "#2B2B30",
  green: "#1E673C",
  blue: "#2840AF",
  brown: "#482613",
  red: "#D00000",
};

interface ISizes {
  xxsmall: string;
  xsmall: string;
  small: string;
  smaller: string;
  regular: string;
  large: string;
  larger: string;
  xlarge: string;
}

const sizeConstants: ISizes = {
  xxsmall: ".25",
  xsmall: ".5",
  small: "1",
  smaller: "2",
  regular: "3",
  large: "4",
  larger: "5",
  xlarge: "6",
};

interface IRelationalSizesTheme {
  vertical: ISizes;
  horizontal: ISizes;
  combined: ISizes;
  combinedCalc: ISizes;
  regular: ISizes;
}

const relationalSizesTheme: IRelationalSizesTheme = {
  vertical: {
    xxsmall: `${sizeConstants.xxsmall}vh`,
    xsmall: `${sizeConstants.xsmall}vh`,
    small: `${sizeConstants.small}vh`,
    smaller: `${sizeConstants.smaller}vh`,
    regular: `${sizeConstants.regular}vh`,
    large: `${sizeConstants.large}vh`,
    larger: `${sizeConstants.larger}vh`,
    xlarge: `${sizeConstants.xlarge}vh`,
  },
  horizontal: {
    xxsmall: `${sizeConstants.xxsmall}vw`,
    xsmall: `${sizeConstants.xsmall}vw`,
    small: `${sizeConstants.small}vw`,
    smaller: `${sizeConstants.smaller}vh`,
    regular: `${sizeConstants.regular}vw`,
    large: `${sizeConstants.large}vw`,
    larger: `${sizeConstants.larger}vw`,
    xlarge: `${sizeConstants.xlarge}vw`,
  },
  combined: {
    xxsmall: `${sizeConstants.xxsmall}vh + ${sizeConstants.xxsmall}vw`,
    xsmall: `${sizeConstants.xsmall}vh + ${sizeConstants.xsmall}vw`,
    small: `${sizeConstants.small}vh + ${sizeConstants.small}vw`,
    smaller: `${sizeConstants.smaller}vh + ${sizeConstants.smaller}vw`,
    regular: `${sizeConstants.regular}vh + ${sizeConstants.regular}vw`,
    large: `${sizeConstants.large}vh + ${sizeConstants.large}vw`,
    larger: `${sizeConstants.larger}vh + ${sizeConstants.larger}vw`,
    xlarge: `${sizeConstants.xlarge}vh + ${sizeConstants.xlarge}vw`,
  },
  combinedCalc: {
    xxsmall: `calc(${sizeConstants.xxsmall}vh + ${sizeConstants.xxsmall}vw)`,
    xsmall: `calc(${sizeConstants.xsmall}vh + ${sizeConstants.xsmall}vw)`,
    small: `calc(${sizeConstants.small}vh + ${sizeConstants.small}vw)`,
    smaller: `calc(${sizeConstants.smaller}vh + ${sizeConstants.smaller}vw)`,
    regular: `calc(${sizeConstants.regular}vh + ${sizeConstants.regular}vw)`,
    large: `calc(${sizeConstants.large}vh + ${sizeConstants.large}vw)`,
    larger: `calc(${sizeConstants.larger}vh + ${sizeConstants.larger}vw)`,
    xlarge: `calc(${sizeConstants.xlarge}vh + ${sizeConstants.xlarge}vw)`,
  },
  regular: {
    ...sizeConstants,
  },
};

const fontSizesTheme: ISizes = {
  xxsmall: `clamp(3px, ${relationalSizesTheme.combinedCalc.xsmall} , 6px)`,
  xsmall: `clamp(6px, ${relationalSizesTheme.combinedCalc.xsmall}, 12px)`,
  small: `clamp(12px, ${relationalSizesTheme.combinedCalc.small}, 24px)`,
  smaller: `clamp(18px, ${relationalSizesTheme.combinedCalc.smaller}, 36px)`,
  regular: `clamp(24px, ${relationalSizesTheme.combinedCalc.regular}, 48px)`,
  large: `clamp(48px, ${relationalSizesTheme.combinedCalc.large}, 96px)`,
  larger: `clamp(60px, ${relationalSizesTheme.combinedCalc.larger}, 120px)`,
  xlarge: `clamp(72px, ${relationalSizesTheme.combinedCalc.xlarge}, 144px)`,
};

interface IFonts {
  brandon: string;
  recoleta: string;
}

const fontsTheme: IFonts = {
  brandon: "'Brandon', 'Helvetica Neue'",
  recoleta: "'Recoleta'"
}

export interface ITheme {
  colors: IColorsTheme;
  fontSizes: ISizes;
  relationalSizes: IRelationalSizesTheme;
  borderRadius: string;
  fonts: IFonts
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  colors: colorsTheme,
  fonts: fontsTheme,
  fontSizes: fontSizesTheme,
  relationalSizes: relationalSizesTheme,
  borderRadius: "30px",
};
