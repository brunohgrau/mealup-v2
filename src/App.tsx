import React from "react";
import { Outlet } from "react-router-dom";
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
