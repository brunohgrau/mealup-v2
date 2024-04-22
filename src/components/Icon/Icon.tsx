import React from "react";
import Icons from "../../assets/icons/sprite-map.svg";

type IconProps = {
  name: string;
  color?: string;
  size?: number | string;
};

const Icon = ({ name, color, size = "1.5rem" }: IconProps) => {
  return (
    <svg className="block max-w-6">
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default Icon;
