import React from "react";
import { Outlet } from "react-router-dom";
import CategoryRounded from "./components/Category/CategoryRounded";

function App() {
  return (
    <>
      <CategoryRounded
        photoUrl="https://images.pexels.com/photos/9210/food-japanese-food-photography-sushi.jpg?auto=compress&cs=tinysrgb&dpr=2&h=550"
        title="Sushi"
      />
      <Outlet />
    </>
  );
}

export default App;
