import React from "react";
import { Outlet } from "react-router-dom";
import ProductList from "./components/ProductList";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <>
      <RestaurantList />
      <Outlet />
    </>
  );
}

export default App;
