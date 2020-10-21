import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'styles/theme';

export default createGlobalStyle<{ theme: ITheme }>`

  @font-face {
    font-family: 'Brandon';
    src: url('/fonts/Brandonmedit.woff2');
    font-display: auto;
  }

  @font-face {
    font-family: 'Recoleta';
    src: url('/fonts/Recoleta-Black.woff2');
    font-display: auto;
  }

  html, body {
    height: 100vh;
    margin: 0;
    background: ${({ theme }: { theme: ITheme }) => theme.colors.tan};
  }
`;
