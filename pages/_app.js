import "../styles/globals.scss";
import Fonts from '../theme/Fonts';

import * as React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
  </ChakraProvider>
  );
}
