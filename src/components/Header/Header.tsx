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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="sticky" component="nav" sx={{ padding: "1rem" }}>
          {/* Shopname  and Logo*/}
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <DiamondIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="div">
              <Link to="/" color={"white"}>
                <Button sx={{ color: "#fff" }}>Shop Name</Button>
              </Link>
            </Typography>
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
