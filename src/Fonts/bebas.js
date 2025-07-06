import { createTheme } from '@mui/material/styles';

const BebasTheme = createTheme({
  typography: {
    fontFamily: "'Bebas Neue', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'black', // Optional: button text color
        },
      },
    },
  },
});

export default BebasTheme;
