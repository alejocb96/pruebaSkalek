import React from 'react';
import { dataPhones } from '../data/dataPhones';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CardProduct } from '../components/Card';
import { SkalekLayaout } from '../layaout/SkalekLayaout';

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "50px",
      width: "25ch",
    }
  },
  gridList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: "auto",
    gap: "2rem"
  },
  gridSelect: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "15%",
    
  },

}));
export const Products = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <SkalekLayaout>
      <Grid className={classes.gridSelect}>
        <Box sx={{ minWidth: 120 }} >
          <FormControl fullWidth margin='dense'
           >
            <InputLabel id="demo-simple-select-label">Todos los precios:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>500K a 800K</MenuItem>
              <MenuItem value={20}>800K a 2M</MenuItem>
              <MenuItem value={30}>2M a 5M</MenuItem>
            </Select>
            
          </FormControl>
          <FormControl fullWidth margin='dense'>
            <InputLabel id="demo-simple-select-label">Todos las marcas:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Caterpillar</MenuItem>
              <MenuItem value={20}>Iphone</MenuItem>
              <MenuItem value={30}>Corn</MenuItem>
              <MenuItem value={40}>Samsung</MenuItem>
              <MenuItem value={50}>Honor</MenuItem>
              <MenuItem value={60}>Redmi</MenuItem>
              <MenuItem value={70}>Samsung</MenuItem>
              <MenuItem value={80}>Oppo</MenuItem>
              <MenuItem value={90}>Motorolla</MenuItem>
              <MenuItem value={100}>Asus</MenuItem>
              <MenuItem value={110}>Alkatel</MenuItem>
              <MenuItem value={120}>Nokia</MenuItem>
              <MenuItem value={130}>Celkon</MenuItem>
            </Select>
            
          </FormControl>
          <FormControl fullWidth margin='dense'>
            <InputLabel id="demo-simple-select-label">Inventario:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Disponibles</MenuItem>
              <MenuItem value={20}>Agotados</MenuItem>
              
            </Select>
            
          </FormControl>
        </Box>
      </Grid>

      <Grid  className={classes.gridList}>
        {dataPhones.map((data) => (
          <CardProduct key={data.id} data={data} />
        ))}
      </Grid>
    </SkalekLayaout>

  );
}

