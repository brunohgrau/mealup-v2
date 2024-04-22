import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";

type ButtonIconTextProps = {};

const ButtonIconText = (props: ButtonIconTextProps) => {
  return (
    <button className="inline-flex z-10 items-center justify-center py-4 px-4 bg-grey-dark6 text-white outline-none rounded hover:cursor-pointer hover:bg-grey-dark5 focus:shadow disabled:opacity-40">
      <IconContext.Provider value={{ color: "white", className: "mr-2" }}>
        <div>
          <FiShoppingCart size="1.5rem" />
        </div>
      </IconContext.Provider>
      <div className="text-grey-light3 ml-4 mr-2"> Order</div>
      <span>$8</span>
    </button>
  );
};

export default ButtonIconText;
