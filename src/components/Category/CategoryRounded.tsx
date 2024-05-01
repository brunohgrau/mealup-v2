import React from "react";

type CategoryRoundedProps = {
  title?: string;
  photoUrl?: string;
};

const CategoryRounded = ({ title, photoUrl: url }: CategoryRoundedProps) => {
  return (
    <figure>
      <img src={url} alt="restaurant category" />
      <figcaption>
        <span>{title}</span>
      </figcaption>
    </figure>
  );
};

/* 
   
   
 


    &:hover {
      opacity: 0.9;
    }

  `
)




*/

export default CategoryRounded;
