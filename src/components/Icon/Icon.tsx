import React from "react";
import Icons from "../../assets/icons/sprite-map.svg";

type IconProps = {
  color?: string;
  size?: number | string;
  children?: React.ReactNode;
};

const Icon = ({ children }: IconProps) => {
  return <div>{children}</div>;
};

export default Icon;
