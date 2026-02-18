import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    h1: {
      fontFamily: "'Bodoni Moda', 'Didot', serif",
      fontWeight: 300,
      letterSpacing: '0.5px',
    },
    h2: {
      fontFamily: "'Bodoni Moda', 'Didot', serif",
      fontWeight: 300,
      letterSpacing: '0.5px',
    },
    h3: {
      fontFamily: "'Bodoni Moda', 'Didot', serif",
      fontWeight: 400,
      letterSpacing: '0.5px',
    },
    body1: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 300,
      letterSpacing: '0.3px',
      lineHeight: 1.8,
    },
    button: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 400,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
  },
  palette: {
    primary: {
      main: '#0a0a0a',
    },
    secondary: {
      main: '#d4c5b0',
    },
    text: {
      primary: '#0a0a0a',
      secondary: '#6b6b6b',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
});

export default theme;
