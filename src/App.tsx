import React from "react";
import { Outlet } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header sticky={true} />
      <RestaurantList />
      <Outlet />
    </>
  );
}

export default App;
