import React from "react";

type CategorySquaredProps = {
  title?: string;
  photoUrl?: string;
};

const CategorySquared = ({ title, photoUrl: url }: CategorySquaredProps) => {
  return (
    <figure className="relative flex items-start p-0 h-full max-h-72 w-full min-w-12 m-0 rounded bg-transparent cursor-pointer hover:opacity-90">
      <img
        className="object-cover w-full min-w-12 h-full min-h-12 max-h-72 border-r-2"
        src={url}
        alt="restaurant category"
      />
      <figcaption className="absolute top-6 left-6 rounded py-2 px-4 bg-otherBlack">
        <span className="font-medium text-white ">{title}</span>
      </figcaption>
    </figure>
  );
};

export default CategorySquared;
