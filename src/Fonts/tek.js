import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9a96e',
      light: '#dfc08a',
      dark: '#a8884e',
    },
    background: {
      default: '#050505',
      paper: '#111111',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#8a8a8a',
    },
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontWeight: 400,
    },
    h2: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontWeight: 400,
    },
    h3: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050505',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          textTransform: 'none',
          color: '#f0f0f0',
          '&:hover': {
            color: '#c9a96e',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
