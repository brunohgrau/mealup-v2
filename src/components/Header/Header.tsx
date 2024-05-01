import React, { useState } from "react";
import { toggleVisibilityAction } from "../../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, alpha } from "@mui/material/styles";
import DiamondIcon from "@mui/icons-material/Diamond";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { LinkOutlined } from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

type HeaderProps = {
  sticky?: boolean;
  isCartVisible?: boolean;
  totalPrice?: number;
};

const Header = ({}: HeaderProps) => {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state: any) => state.cart.visible);

  const handleToggleVisibility = () => {
    dispatch(toggleVisibilityAction()); // Dispatch the action creator
  };

  /*Drawer Component Logic*/
  const [mobileOpen, setMobileOpen] = useState(false);
  const ToggleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /*Search Component*/

  /*Drawer Component Width*/

  /*Drawer Component*/
  const drawer = (
    <Box onClick={ToggleDrawer} sx={{ textAlign: "center" }}>
      {/* Drawer Header*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ml: 2,
          mr: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DiamondIcon sx={{ mr: 1 }} />

          <Typography variant="h6" sx={{ my: 2 }}>
            Your Order
          </Typography>
        </Box>

        <CloseIcon />
      </Box>
      <Divider />
      {/* Drawer List*/}
      <List sx={{ ml: 2 }}>
        <ListItem disablePadding>
          <ListItemText primary={"Fries"} />
          <Button />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={""} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ bgcolor: "white", px: "1rem" }}>
          <Toolbar>
            {/* Shopname  and Logo*/}
            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <DiamondIcon sx={{ color: "black" }} />
              <Link to="/" color={"white"}>
                <Button sx={{ color: "#fff" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "black" }}
                  >
                    Mealup
                  </Typography>
                </Button>
              </Link>
            </Box>

            {/*Buttons*/}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/">
                <Button sx={{ textTransform: "none", color: "black" }}>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ color: "black" }}
                  >
                    Home
                  </Typography>
                </Button>
              </Link>
              <Link to="/">
                <Button sx={{ color: "black", textTransform: "none" }}>
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ color: "black" }}
                  >
                    All Restaurants
                  </Typography>
                </Button>
              </Link>

              <IconButton sx={{ color: "black" }}>
                <Badge badgeContent={1} color="secondary">
                  <ShoppingCartIcon sx={{ mr: -2 }} />
                </Badge>
              </IconButton>

              <Button
                sx={{ color: "black", textTransform: "none", ml: -1 }}
                onClick={ToggleDrawer}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ color: "black" }}
                >
                  Cart
                </Typography>
              </Button>
            </Box>
            {/* Menu Icon*/}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={ToggleDrawer}
              sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
            >
              <Badge badgeContent={1} color="secondary">
                <ShoppingCartIcon sx={{ mr: -2 }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Drawer*/}
        <nav>
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={ToggleDrawer}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { xs: "100%", md: "50%" },
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};

export default Header;
