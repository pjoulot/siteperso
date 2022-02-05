import "../styles/globals.scss";

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  // React.useEffect(() => {
  //   console.log('passed');
  //   localStorage.setItem("preferred-theme", mode);
  // }, [mode]);

  React.useEffect(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('preferred-theme') : null;
    console.log(savedTheme);
    if (savedTheme !== null) {
      const defaultThemeValue = (savedTheme !== null) ? savedTheme : 'light';
      localStorage.setItem("preferred-theme", defaultThemeValue);
      setMode(defaultThemeValue);
    }
    else {
      localStorage.setItem("preferred-theme", 'light');
      setMode('light');
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
