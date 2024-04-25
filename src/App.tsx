import React from "react";
import { Outlet } from "react-router-dom";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <Counter />
      <Outlet />
    </>
  );
}

export default App;
