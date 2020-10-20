import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import GlobalStyle from 'styles/GlobalStyles';
import { ITheme, theme } from 'styles/theme';
import Name from 'components/Name';
import Content from 'components/Content';

const Style = styled.div`
  height: 100vh;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.tan};
  display: grid;
  grid-template-rows: min-content auto;
`;

const Layout: FunctionComponent = ({ children }: { children: any }) => (
  <Style>
    <GlobalStyle theme={theme} />
    <Name />
    <Content>{children}</Content>
  </Style>
);

export default Layout;
