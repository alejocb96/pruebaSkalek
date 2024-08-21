import { dataPhones } from '../data/dataPhones';
import { Grid } from '@mui/material';
import { CardProduct } from '../components/Card';
import { SkalekLayaout } from '../layaout/SkalekLayaout';
import { FiltersContext } from '../context/FiltersContext';
import React, { useContext } from 'react';
import { SelectProducts } from '../components/SelectProducts';


export const Products =  () => {

  const { prices, brands, stock, orderByPrice } = useContext(FiltersContext);

  const filteredPhones = dataPhones.filter((phone) => {
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

      <SelectProducts />
      <Grid sx={{
        columns: "12",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        height: "100vh",
        gap: "2rem"
      }}>
        {filteredPhones.map((data) => (
          <CardProduct key={data.id} data={data} />
        ))}
      </Grid>
    </SkalekLayaout>

  );
}

