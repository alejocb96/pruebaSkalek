import React, { useContext } from 'react';
import { SkalekLayaout } from '../layaout/SkalekLayaout';
import { Box,Typography } from '@mui/material';


export const Home = () => {
  return (

    <SkalekLayaout>
      <Box
        component="section"
        sx={{
          p: 0,
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

        }}
      >
       
        <Typography variant='h1' component='h1' sx={{ fontWeight: 'bold' }}>
          Coleccion de Apple!
        </Typography>
        <hr />
        <Typography variant='h4' sx={{ mt: 2, mb: 4 }}>
          desbloquea todo tu potencial en un estilo sin igual.
          Bienvenido a la excelencia Apple.
        </Typography>
        <hr />

        <Box
          component="img"
          src="https://www.celudmovil.com.co/cdn/shop/collections/IPHONEEE.webp?v=1701567463&width=1920"
          sx={{
            mt: 2,
            mb: 0,
            width: "100%"
          }}
        />
      </Box>

    </SkalekLayaout>

  )
}

