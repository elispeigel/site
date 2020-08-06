import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import { AuthProvider } from '@redwoodjs/auth'
import { ThemeProvider } from 'styled-components'
import netlifyIdentity from 'netlify-identity-widget'

import Routes from './Routes'
import './index.css'
import theme from './lib/theme'

netlifyIdentity.init()

ReactDOM.render(
  <AuthProvider client={netlifyIdentity} type="netlify">
    <RedwoodProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </RedwoodProvider>
  </AuthProvider>,
  document.getElementById('redwood-app')
)
