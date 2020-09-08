import { createGlobalStyle } from "styled-components";
import { ITheme } from "styles/theme";

export default createGlobalStyle<{ theme: ITheme}>`

  @font-face {
    font-family: 'Brandon';
    src: url('/fonts/Brandon_med_it.otf');
    font-display: auto;
  }

  @font-face {
    font-family: 'Recoleta';
    src: url('/fonts/Recoleta-Black.ttf');
    font-display: auto;
  }

  html, body {
    height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.colors.tan};
  }
`;