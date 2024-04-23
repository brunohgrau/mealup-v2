import React from "react";

type ButtonDefaultProps = {
  onClick?: () => void;
  children?: string | React.ReactNode;
  className?: string;
};

const ButtonDefault = ({
  onClick,
  children,
  className,
}: ButtonDefaultProps) => {
  return (
    <button className="inline-flex z-10 items-center justify-center py-3.5 px-6 bg-grey-dark6 text-white outline-none rounded hover:cursor-pointer hover:bg-grey-dark5 focus:shadow disabled:opacity-40">
      {children}
    </button>
  );
};

export default ButtonDefault;
