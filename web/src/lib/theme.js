const fonts = {
  bold: 'Archia Bold',
  light: 'Archia Light',
  medium: 'Archia Medium',
  regular: 'Archia Regular',
  semibold: 'Archia Semibold',
  thin: 'Archia Thin',
}

const fontSizes = [12, 14, 16, 20, 24, 32]
fontSizes.sm = 14
fontSizes.md = 16
fontSizes.lg = 20

const colors = {
  black: '#2C2C2C',
  blue: '#14213D',
  orange: '#FCA311',
  grey: '#E5E5E5',
  white: '#ffffff',
  white_shadow: '#D9D9D9',
}

const radii = [3]

const space = [4, 8, 16, 24, 32, 48, 64]
space.sm = 8
space.md = 16
space.lg = 32

const breakpoints = [320, 800]

export default {
  fonts,
  fontSizes,
  colors,
  radii,
  space,
  breakpoints,
}
