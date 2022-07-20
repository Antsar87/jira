import { CssBaseline, ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from '../themes';

import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

function MyApp({ Component, pageProps }) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
