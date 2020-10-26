import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";

import { theme } from "styles/theme";
import Layout from "components/Layout";

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Eli Speigel</title>
        <link rel='icon' href='images/favicon.ico' />
        <meta name='Description' content='Personal site of Eli Speigel'></meta>
      </Head>
      <Layout>
        <motion.div
          key={router.route}
          initial='pageInitial'
          animate='pageAnimate'
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </ThemeProvider>
  );
}
