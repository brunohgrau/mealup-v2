import React from "react";
import Banner from "./components/Banner";
import RestaurantsSection from "./components/RestaurantsSection";
import AwardWinningSection from "./components/AwardWinningSection";
import CategoriesSection from "./components/CategoriesSection";
import { Box } from "@mui/material";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <Box sx={{ marginBottom: "4.5rem" }}></Box>
      <RestaurantsSection />
      <Box sx={{ marginBottom: "4.5rem" }}></Box>
      <AwardWinningSection />
      <Box sx={{ marginBottom: "4.5rem" }}></Box>
      <CategoriesSection title="Categories" />
      <Box sx={{ marginBottom: "4.5rem" }}></Box>
    </div>
  );
};

export default HomePage;
