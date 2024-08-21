import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Apple, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    background: "-webkit-linear-gradient(90deg, #354e69,#000000)",
    height: "19vh",
  },
  navlinks: {
    display: "flex",
    '@media (max-width: 600px)': {
      display: "none", 
    },
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "30px",
    marginLeft: "50px",
    "&:hover": {
      borderBottom: "1px solid white",
    }
  },
  menuButton: {
    display: "none !important" ,
    // Mostrar el botón de menú en pantallas pequeñas
    '@media (max-width: 600px)': {
      display: "block !important",
    },
  },
  drawer: {
    width: 250,
  },
  drawerLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
  },
}));

export const Navbar = () => {

  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <AppBar position="static" className={classes.headerContainer}>
      <CssBaseline />
      <Toolbar className={classes.navContainer}>
        <Typography variant="h3">
          Celumovil Colombia
        </Typography>
        <Apple style={{ fontSize: 60 }} />

        {/* Botón de menú hamburguesa */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={handleDrawerOpen}
        >
        <MenuIcon />
        </IconButton>

        {/* Links para pantallas grandes */}
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Inicio
          </Link>
          <Link to="/products" className={classes.link}>
            Productos
          </Link>
        </div>
      </Toolbar>

      {/* Drawer (menú lateral) */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem onClick={handleDrawerClose}>
            <ListItemText>
              <Link to="/" className={classes.drawerLink}>
                Inicio
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText>
              <Link to="/products" className={classes.drawerLink}>
                Productos
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};