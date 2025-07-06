// Fonts/theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Bebas Neue', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black', // Optional: all button text black
        },
      },
    },
  },
});

export default theme;
