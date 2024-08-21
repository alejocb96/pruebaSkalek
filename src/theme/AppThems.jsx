import { CssBaseline } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { colorsTheme } from './colorsTheme';

export const AppThems = ({ children }) => {
  return (
   <ThemeProvider theme={ colorsTheme }>
    <CssBaseline />
    { children }
   </ThemeProvider>
  );
};
