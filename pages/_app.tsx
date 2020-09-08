import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import { theme } from 'styles/theme'
import Layout from 'components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
          <title>Eli Speigel</title>
          <link rel="icon" href="images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
