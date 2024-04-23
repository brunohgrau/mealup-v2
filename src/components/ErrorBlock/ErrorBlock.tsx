import React from "react";
import ButtonDefault from "../Button/ButtonDefault";

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
    <div className="flex flex-col items-center py-8 px-0 my-0 mx-0">
      <h1 className="m-0 text-otherBlack text-4xl font-bold">{title}</h1>
      <div className="flex justify-center w-full text-center mt-8">
        {image}{" "}
      </div>
      <p className="text-base mb-6">
        {" "}
        There seems that there are no restaurants in this category yet. Try to
        come back later?
      </p>
      <ButtonDefault onClick={onButtonClick}>{buttonText}</ButtonDefault>
    </div>
  );
};

export default ErrorBlock;
