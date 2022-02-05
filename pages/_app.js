import "../styles/globals.scss";

import * as React from 'react';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
     900: "#1a365d",
     800: "#153e75",
     700: "#2a69ac",
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
