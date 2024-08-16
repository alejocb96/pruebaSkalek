import * as React from 'react';
import Box from '@mui/material/Box';
import { colors, Typography } from '@mui/material';

export const CardHome = () => {
  return (
    <Box component="section"
         sx={{ p: 3, 
            backgroundColor: "#2196f3",
            borderRadius:'0.5rem',
            color: "white",
            width: "40%",
            height: "150%",   
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
        }}
         >
          <Typography variant='h3'>
            Hola Disfruta de una experiencia intuitiva y personalizada
          </Typography>

    </Box>
  );
}
