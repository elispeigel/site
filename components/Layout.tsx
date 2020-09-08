import React from 'react'

import GlobalStyle from 'styles/GlobalStyles'
import { theme } from 'styles/theme'
import { FunctionComponent } from 'react';


export default (({ children }: { children: any }) => (
  <>
    <GlobalStyle theme={theme}/>
    {children}
  </>
)) as FunctionComponent
