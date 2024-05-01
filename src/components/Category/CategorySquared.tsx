import React from "react";

type CategorySquaredProps = {
  title?: string;
  photoUrl?: string;
};

const CategorySquared = ({ title, photoUrl: url }: CategorySquaredProps) => {
  return (
    <figure>
      <img src={url} alt="restaurant category" />
      <figcaption>
        <span>{title}</span>
      </figcaption>
    </figure>
  );
};

export default CategorySquared;
