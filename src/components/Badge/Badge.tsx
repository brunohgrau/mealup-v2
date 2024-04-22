import React from "react";

type BadgeProps = {
  text: string;
};

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="inline-block px-2 py-1 bg-grey-light4 rounded">
      <span className="text-grey-dark2">{text}</span>
    </div>
  );
};

export default Badge;
