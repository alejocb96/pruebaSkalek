import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import { Apple } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    background: "-webkit-linear-gradient(90deg, #354e69,#000000)",
    height: 100
  },
  navlinks: {
    marginLeft: "50px",
    display: "flex",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "50px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    }
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.headerContainer}>
      <CssBaseline />
      <Toolbar className={classes.navContainer}>
        <Typography variant="h4" className={classes.logo}>
          Celumovil Alejandro
        </Typography>
        <Apple style={{ fontSize: 40 }} />
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Inicio
          </Link>
          <Link to="/products" className={classes.link}>
            Productos
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
