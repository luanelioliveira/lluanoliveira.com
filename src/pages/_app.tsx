import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luan Oliveira | Personal Web Page</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
