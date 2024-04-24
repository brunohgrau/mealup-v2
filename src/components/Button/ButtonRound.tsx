import React from "react";
import { IoSunnyOutline } from "react-icons/io5";

type ButtonRoundProps = {
  children?: string | React.ReactNode;
};

const ButtonRound = ({ children }: ButtonRoundProps) => {
  return (
    <button className="inline-flex z-10 items-center justify-center py-3.5 px-6 bg-transparent text-otherBlack outline-none rounded-full hover:cursor-pointer hover:bg-grey-light5 focus:shadow disabled:opacity-40">
      <div>
        <IoSunnyOutline size="1.5rem" />
      </div>
    </button>
  );
};

export default ButtonRound;

/* 

  ({ clear, large, round, withIcon, theme: { color, boxShadow, borderRadius } }) => css`
    outline: none;
    border: 0;
    font-family: 'Hind';
    border-radius: ${round ? borderRadius.xl : borderRadius.xs};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${withIcon ? '0.7rem' : large ? '1.125rem 1rem' : '0.875rem 1rem'};
    color: ${clear ? color.primaryText : color.buttonText};

    transition: box-shadow 150ms ease-in;
    z-index: 1;
    background-color: ${clear ? color.buttonClear : color.buttonPrimary};

    &:hover {
      cursor: pointer;
      background-color: ${clear ? color.buttonClearHover : color.buttonPrimaryHover};
    }

    &:focus {
      box-shadow: ${boxShadow.outerBorder};
    }

    &:disabled {
      background-color: ${clear ? color.buttonClear : color.buttonPrimary};
      opacity: 0.4;
    }

    @media ${breakpoints.M} {
      padding: ${withIcon ? '1rem' : large ? '1.125rem 1.5rem' : '0.875rem 1.5rem'};
    }
  `
)



*/
