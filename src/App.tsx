import React from "react";
import { Outlet } from "react-router-dom";
import Badge from "./components/Badge/Badge";

function App() {
  return (
    <>
      <Badge text="Comfort Food" />
      <Outlet />
    </>
  );
}

export default App;
