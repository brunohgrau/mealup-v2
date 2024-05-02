import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";

type Props = {};

const RestaurantsSection = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          pt: "4rem",
          pl: "1rem",
          pr: "0rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "1.5rem",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Our favourite picks
          </Typography>
        </Box>
        <RestaurantCard />
      </Box>
    </>
  );
};

export default RestaurantsSection;

/*

const TopContainer = styled.div`

  align-items: center;
 
`


*/
