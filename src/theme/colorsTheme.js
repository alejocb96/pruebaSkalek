import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react';

export const colorsTheme = createTheme({
    palette: {
        primary: {
            main: "#2196f3"
        },
        secondary: {
            main: "#dd2c00"
        },
        error:{
            main: red.A400
        }
    }
})

    
  

