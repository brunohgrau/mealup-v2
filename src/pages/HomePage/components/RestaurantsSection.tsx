import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";

type Props = {};

const RestaurantsSection = (props: Props) => {
  return (
    <>
      {/*Container*/}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          pl: "1rem",
          pr: "0rem",
        }}
      >
        {/*Container*/}
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
        {/*Card*/}
        <RestaurantCard />
      </Box>
    </>
  );
};

export default RestaurantsSection;

/*



*/
