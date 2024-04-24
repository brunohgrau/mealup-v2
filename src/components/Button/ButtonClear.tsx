import React from "react";

type ButtonClearProps = {
  children?: string | React.ReactNode;
  className?: string;
};

const ButtonClear = ({ children, className }: ButtonClearProps) => {
  return (
    <button className="inline-flex z-10 items-center justify-center py-3.5 px-6 bg-transparent text-otherBlack outline-none rounded hover:cursor-pointer hover:bg-grey-light5 focus:shadow disabled:opacity-40">
      {children}
    </button>
  );
};

export default ButtonClear;
