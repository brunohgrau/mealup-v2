import React from "react";
import { Outlet } from "react-router-dom";
import ButtonIcon from "./components/Button/ButtonIcon";

function App() {
  return (
    <>
      <ButtonIcon />
      <Outlet />
    </>
  );
}

export default App;
