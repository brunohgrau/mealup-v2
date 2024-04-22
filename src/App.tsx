import React from "react";
import { Outlet } from "react-router-dom";
import ButtonIconText from "./components/Button/ButtonIconText";

function App() {
  return (
    <>
      <ButtonIconText />
      <Outlet />
    </>
  );
}

export default App;
