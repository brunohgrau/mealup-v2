import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header sticky={true} />
      <Outlet />
    </>
  );
}

export default App;
