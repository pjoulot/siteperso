import "../styles/globals.scss";

import * as React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
  </ChakraProvider>
  );
}
