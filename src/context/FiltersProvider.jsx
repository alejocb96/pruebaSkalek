import { FiltersContext } from "./FiltersContext";
import { useState } from 'react';


export const FiltersProvider = ({ children }) => {

  
  const [prices, setPrices] = useState('allPrices');
  const [brands, setBrands] = useState('allBrands');
  const [stock, setStock] = useState('allStock');
  const [orderByPrice, setOrderByPrice] = useState("asc");


  return (
    <FiltersContext.Provider value={{
      prices, setPrices,
      brands, setBrands,
      stock, setStock,
      orderByPrice, setOrderByPrice
    }}>
      {children}
    </FiltersContext.Provider>
  )
}