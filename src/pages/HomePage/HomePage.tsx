import React from "react";
import Banner from "./components/Banner";
import RestaurantsSection from "./components/RestaurantsSection";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <RestaurantsSection />
    </div>
  );
};

export default HomePage;
