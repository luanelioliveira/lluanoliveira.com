import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { theme } from '../styles/themes/default';

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
