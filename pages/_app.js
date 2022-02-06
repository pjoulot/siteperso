import "../styles/globals.scss";

import * as React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: '#f2ffde',
    100: '#defcb2',
    200: '#caf884',
    300: '#b5f554',
    400: '#a1f226',
    500: '#88d90d',
    600: '#69a905',
    700: '#4a7801',
    800: '#2b4800',
    900: '#0b1900',
   },
 }
 const theme = extendTheme({ colors })
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
  </ChakraProvider>
  );
}
