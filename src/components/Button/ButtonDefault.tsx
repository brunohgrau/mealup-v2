import React from "react";

type ButtonDefaultProps = {};

const ButtonDefault = (props: ButtonDefaultProps) => {
  return (
    <button className="inline-flex z-10 items-center justify-center py-3.5 px-6 bg-grey-dark6 text-white outline-none rounded hover:cursor-pointer hover:bg-grey-dark5 focus:shadow disabled:opacity-40">
      Button
    </button>
  );
};

export default ButtonDefault;
