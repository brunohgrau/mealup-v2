import React from "react";

type CategoryRoundedProps = {
  title?: string;
  photoUrl?: string;
};

const CategoryRounded = ({ title, photoUrl: url }: CategoryRoundedProps) => {
  return (
    <figure className="relative flex flex-col items-center  py-6 px-8 md:px-0 h-full max-h-48 w-full min-w-12 max-w-48 m-0 rounded bg-grey-light6 cursor-pointer hover:opacity-90">
      <img
        className="w-16 md:w-24 min-w-16 md:min-w-24 h-16 md:h-24 min-h-16  md:min-h-24 max-h-52 rounded-full"
        src={url}
        alt="restaurant category"
      />
      <figcaption className="mt-4">
        <span className="font-medium text-black ">{title}</span>
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
