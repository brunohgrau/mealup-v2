import React from "react";
import { Outlet } from "react-router-dom";
import ErrorBlock from "./components/ErrorBlock/ErrorBlock";
import sushi from "./assets/images/sushi.svg";

function App() {
  return (
    <>
      <ErrorBlock
        title="This is not food you are looking for"
        image={<img alt="no restaurants found" src={sushi} />}
        buttonText="See all restaurants"
      />
      <Outlet />
    </>
  );
}

export default App;
