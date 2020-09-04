import React from 'react'

import GlobalStyle from 'styles/GlobalStyles'
import { theme, ITheme } from 'styles/theme'
import Card from 'components/Card';


const Layout = ({ children }: { children: any }) => (
  <>
    <GlobalStyle theme={theme}/>
    <Card>
      {children}
    </Card>
  </>
)

export default Layout;