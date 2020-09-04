import { createGlobalStyle } from "styled-components";
import { ITheme } from "styles/theme";

export default createGlobalStyle<{ theme: ITheme }>`

  @font-face {
    font-family: 'Bold';
    src: url('/fonts/archia-bold-webfont.ttf');
    font-display: auto;
  }

  @font-face {
    font-family: 'Light';
    src: url('/fonts/archia-light-webfont.ttf');
  }

  @font-face {
    font-family: 'Medium';
    src: url('/fonts/archia-medium-webfont.ttf');
  }

  @font-face {
    font-family: 'Regular';
    src: url('/fonts/archia-regular-webfont.ttf');
  }

  @font-face {
    font-family: 'Semibold';
    src: url('/fonts/archia-semibold-webfont.ttf');
  }

  @font-face {
    font-family: 'Thin';
    src: url('/fonts/archia-thin-webfont.ttf');
  }


  body {
    background: ${({ theme }) => theme.colors.white};
  }
`;