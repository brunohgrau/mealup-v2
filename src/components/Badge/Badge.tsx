import React from "react";

type BadgeProps = {
  text: string;
};

const Badge = ({ text }: BadgeProps) => {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

export default Badge;
