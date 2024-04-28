import React from "react";
import Icon from "../Icon/Icon";
import { FiShoppingCart } from "react-icons/fi";

const Spacer = <span className="pl-2"></span>;

type ButtonProps = {
  /**
   * Clear button styles leaving just a text
   */
  clear?: boolean;
  round?: boolean;
  /**
   * Is the button large?
   */
  large?: boolean;
  /**
   * Does the button have an icon?
   */

  withIcon?: boolean;

  icon?: any;
  /**
   * Size of the icon
   */
  iconSize?: number;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Does the button have an icon?
   */
  children?: string | React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const Button = ({
  children,
  large = false,
  clear = false,
  round = false,
  icon,
  iconSize,
  withIcon,
  onClick = () => {},

  ...props
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`
      inline-flex z-10 items-center justify-center 
      ${withIcon ? "p-3" : large ? "py-5 px-4" : "py-3.5 px-4"} 
      ${clear ? "bg-transparent" : "bg-grey-dark6"} 
      outline-none
      ${clear ? "text-otherBlack" : "text-white"} 
      border-0 
      ${round ? "rounded-full" : "rounded"}
      hover:cursor-pointer 
      hover:${clear ? "bg-grey-light5" : "bg-grey-dark5"}
      focus:shadow
      disabled:opacity-40
      disabled:${clear ? "bg-transparent" : "bg-grey-dark6"}
      `}
    >
      {icon && <Icon>{icon}</Icon>}
      {icon && children && Spacer}
      {children}
    </div>
  );
};

export default Button;
