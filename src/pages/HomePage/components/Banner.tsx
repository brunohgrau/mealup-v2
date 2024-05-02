import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ladies from "../../../assets/images/ladies.svg";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#bdbdbd",
        width: "100%",
        height: { xs: "480px", md: "566px" },
        paddingTop: {
          xs: "3rem",
          md: "5rem",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <Typography variant="h4" sx={{ paddingTop: 7, marginBottom: "2.5rem" }}>
          Hungry? Find your next meal
        </Typography>
        <Link to="/restaurants">
          <Button
            variant="contained"
            fullWidth
            sx={{
              p: 2,
              textTransform: "none",
              backgroundColor: "black",
              "&.MuiButton-root:hover": { bgcolor: "black" },
            }}
          >
            <Typography variant="body1">View All Restaurants</Typography>
          </Button>
        </Link>
      </Box>
      <Box
        component="img"
        sx={{
          position: "absolute",
          bottom: 0,
          backgroundImage: `url(${ladies})`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: {
            xs: "700px",
            md: "1000px",
          },
        }}
      />
    </Box>
  );
};

export default Banner;

/* 



*/
