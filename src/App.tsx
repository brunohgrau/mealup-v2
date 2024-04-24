import React from "react";
import { Outlet } from "react-router-dom";
import Button from "./components/Button/Button";
import { FiShoppingCart } from "react-icons/fi";
import ButtonIcon from "./components/Button/ButtonIcon";

function App() {
  return (
    <>
      <Button
        withIcon={true}
        children="Button"
        disabled={true}
        icon={<FiShoppingCart size={"1.5rem"} />}
      />
      <Outlet />
    </>
  );
}

export default App;
