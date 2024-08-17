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
    columns: "12",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    minWidth: "100vh",
    height: "100vh",
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
  const [prices, setPrices] = React.useState('allPrices');
  const [brands, setBrands] = React.useState('allBrands');
  const [stock, setStock] = React.useState('allStock');
  const [orderByPrice, setOrderByPrice] = React.useState("asc");

  const handlePriceChange = (event) => setPrices(event.target.value);
  const handleBrandChange = (event) => setBrands(event.target.value);
  const handleStockChange = (event) => setStock(event.target.value);
  const handleOrderByPriceChange = (event) => setOrderByPrice(event.target.value);

  const filteredPhones = dataPhones
    .filter((phone) => {
      if (prices !== 'allPrices') {
        if (prices === '0-500K' && (phone.price < 0 || phone.price > 500000)) return false;
        if (prices === '500K-800K' && (phone.price < 500000 || phone.price > 800000)) return false;
        if (prices === '800K-2M' && (phone.price < 800000 || phone.price > 2000000)) return false;
        if (prices === '2M-5M' && (phone.price < 2000000 || phone.price > 5000000)) return false;
      }
      if (brands !== 'allBrands' && phone.brand !== brands) return false;
      if (stock !== 'allStock') {
        if (stock === 'inStock' && !phone.isStock) return false;
        if (stock === 'outOfStock' && phone.isStock) return false;
      }
      return true;
    })
    .sort((a, b) => {
      return orderByPrice === 'asc' ? a.price - b.price : b.price - a.price;
    });



  return (
    <SkalekLayaout>
      <Grid className={classes.gridSelect}
        sx={{
          fontSize: "2rem",
          marginLeft: "54rem",
          marginTop: "6rem",
          marginBottom: "3rem",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth margin='dense'>
            <InputLabel id="price-select-label">Todos los precios:</InputLabel>
            <Select
              labelId="price-select-label"
              id="price-select"
              value={prices}
              onChange={handlePriceChange}
            >
              <MenuItem value='allPrices'>Todos los precios</MenuItem>
              <MenuItem value='0-500K'>0 a 500K</MenuItem>
              <MenuItem value='500K-800K'>500K a 800K</MenuItem>
              <MenuItem value='800K-2M'>800K a 2M</MenuItem>
              <MenuItem value='2M-5M'>2M a 5M</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin='dense'>
            <InputLabel id="brand-select-label">Todas las marcas:</InputLabel>
            <Select
              labelId="brand-select-label"
              id="brand-select"
              value={brands}
              onChange={handleBrandChange}
            >
              <MenuItem value='allBrands'>Todas las marcas</MenuItem>
              <MenuItem value='Caterpillar'>Caterpillar</MenuItem>
              <MenuItem value='Iphone'>Iphone</MenuItem>
              <MenuItem value='Corn'>Corn</MenuItem>
              <MenuItem value='Samsung'>Samsung</MenuItem>
              <MenuItem value='Honor'>Honor</MenuItem>
              <MenuItem value='Redmi'>Redmi</MenuItem>
              <MenuItem value='Oppo'>Oppo</MenuItem>
              <MenuItem value='Motorolla'>Motorolla</MenuItem>
              <MenuItem value='Azus'>Azus</MenuItem>
              <MenuItem value='Alkatel'>Alkatel</MenuItem>
              <MenuItem value='Nokia'>Nokia</MenuItem>
              <MenuItem value='Celkon'>Celkon</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin='dense'>
            <InputLabel id="stock-select-label">Inventario:</InputLabel>
            <Select
              labelId="stock-select-label"
              id="stock-select"
              value={stock}
              onChange={handleStockChange}
            >
              <MenuItem value='allStock'>Todos</MenuItem>
              <MenuItem value='inStock'>Disponibles</MenuItem>
              <MenuItem value='outOfStock'>Agotados</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin='dense'>
            <InputLabel id="order-price-select-label">Ordenar Precio:</InputLabel>
            <Select
              labelId="order-price-select-label"
              id="order-price-select"
              value={orderByPrice}
              onChange={handleOrderByPriceChange}
            >
              <MenuItem value='asc'>Menor a mayor</MenuItem>
              <MenuItem value='desc'>Mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid className={classes.gridList} margin="10px">
        {filteredPhones.map((data) => (
          <CardProduct key={data.id} data={data} />
        ))}
      </Grid>
    </SkalekLayaout>

  );
}

