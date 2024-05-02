import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DiamondIcon from "@mui/icons-material/Diamond";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

type HeaderProps = {
  sticky?: boolean;
  isCartVisible?: boolean;
  totalPrice?: number;
};

const Header = ({}: HeaderProps) => {
  /*Drawer Component Logic*/
  const [mobileOpen, setMobileOpen] = useState(false);
  const ToggleDrawer = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /*Search Component*/

  /*Drawer Component Width*/

  /*Drawer Component*/
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      {/* Drawer Header*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#bdbdbd",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            ml: 2,
          }}
        >
          <Typography variant="h5" sx={{ my: 2, fontWeight: "bold" }}>
            Your Order
          </Typography>
        </Box>

        <CloseIcon sx={{ mr: 2 }} onClick={ToggleDrawer} />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          ml: 2,
          mr: 2,
          mt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            Fries
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Fried French Fries
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            $5
          </Typography>
        </Box>

        <FormControl sx={{ m: 1, minWidth: 60 }}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            autoWidth
            label="Quantity"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          height: "165px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ ml: 2 }}>
            Total
          </Typography>
          <Typography variant="h6" sx={{ mr: 2 }}>
            $5000
          </Typography>
        </Box>

        <Box sx={{ mt: 4, mx: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ p: 3, textTransform: "none", backgroundColor: "black" }}
          >
            <Typography variant="body1">Checkout</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          elevation={0}
          sx={{ bgcolor: "white", px: "1rem" }}
        >
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
                width: { xs: "100%", md: "30%" },
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
