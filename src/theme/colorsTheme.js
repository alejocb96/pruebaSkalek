import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const colorsTheme = createTheme({
    palette: {
        primary: {
            main: "#2196f3"
        },
        secondary: {
            main: "#dd2c00"
        },
        error: {
            main: red.A400
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.75rem',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: "bold"
        },
        body1: {
            fontSize: '1.5rem',
        },
        body2: {
            fontSize: '4rem',
        },

        p: {
            fontSize: '4rem',

        },
    },
});




