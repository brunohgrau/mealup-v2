import React from "react";
import Icon from "../Icon/Icon";
import Icons from "../../assets/icons/sprite-map.svg";
import { FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";

type ButtonIconProps = {
  iconSize?: number;
};

const ButtonIcon = ({ iconSize }: ButtonIconProps) => {
  return (
    <button className="inline-flex z-10 items-center justify-center py-4 px-4 bg-grey-dark6 text-white outline-none rounded hover:cursor-pointer hover:bg-grey-dark5 focus:shadow disabled:opacity-40">
      <IconContext.Provider value={{ color: "white", className: "mr-2" }}>
        <div>
          <FiShoppingCart size="1.5rem" />
        </div>
      </IconContext.Provider>
      <span>Button</span>
    </button>
  );
};

/* 

<svg className="block min-w-6">
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>



*/

export default ButtonIcon;
