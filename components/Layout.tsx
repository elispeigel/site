import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { theme, ITheme } from 'styles/theme'
import Card from './Card';

export const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  body {
    background: ${({ theme }) => theme.white};
  }
  
`;

const Layout = ({ children }: { children: any }) => (
  <>
    <GlobalStyle theme={theme}/>
    <Card>
      {children}
    </Card>
  </>
)

export default Layout;