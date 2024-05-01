import React from "react";

type ErrorBlockProps = {
  title?: string;
  image?: React.ReactNode;
  body?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const ErrorBlock = ({
  title,
  image,
  body,
  buttonText,
  onButtonClick,
}: ErrorBlockProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{image} </div>
      <p>
        {" "}
        There seems that there are no restaurants in this category yet. Try to
        come back later?
      </p>
    </div>
  );
};

export default ErrorBlock;
