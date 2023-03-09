import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import '@/styles/globals.css'
import { blueGrey } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Potta One, cursive',
    },
    h2: {
      fontFamily: 'Potta One, cursive',
    },
    h3: {
      fontFamily: 'Chela One, cursive',
    },
    h4: {
      fontFamily: 'Chela One, cursive',
    },
    h5: {
      fontFamily: 'Chela One, cursive',
    },
    h6: {
      fontFamily: 'Imprima, sans-serif',
    },
    body1: {
      fontFamily: 'Imprima, sans-serif',
    },
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

