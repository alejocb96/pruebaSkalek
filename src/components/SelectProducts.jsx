import { makeStyles } from "@mui/styles"
import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const useStyles = makeStyles(() => ({

    root: {
        "& > *": {
            margin: "50px",
            width: "25ch",
        },
        gridSelect: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "15%",
        },
        gridList: {
            columns: "12",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            height: "100vh",
            gap: "2rem"
        },
    }

}));

export const SelectProducts = () => {

    const classes = useStyles();
    const { prices, setPrices, brands, setBrands, stock, setStock, setOrderByPrice, orderByPrice } = useContext(FiltersContext);
    console.log(prices,brands,stock,orderByPrice)
    const handleOrderByPriceChange = (event) => setOrderByPrice(event.target.value);
    const handleStockChange = (event) => setStock(event.target.value);
    const handlePriceChange = (event) => setPrices(event.target.value);
    const handleBrandChange = (event) => setBrands(event.target.value);
  
    return (
        <Grid className={classes.gridSelect}
            sx={{
                fontSize: "2rem",
                marginLeft: "3rem",
                marginTop: "6rem",
                marginBottom: "3rem",
            }}
        >
            <Box>
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

    )
}
