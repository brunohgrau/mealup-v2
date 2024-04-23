import React from "react";

type LogoProps = {
  large?: boolean;
  logoOnly?: boolean;
};

export const Logo = ({ large = false, logoOnly = false }: LogoProps) => {
  return (
    <div className="flex items-center">
      <svg viewBox="0 0 23 20" fill="none">
        <path
          className="logo--face-left"
          d="M11.74 19.1662L6.66566 14.0788L0.82428 11.0619L1.76834 4.49574L0.82428 0.029541L11.74 2.1887V19.1662Z"
        />
        <path
          className="logo--face-right"
          d="M11.74 19.1366L16.8143 14.0493L22.6557 11.0619L21.7116 4.49574L22.6557 0.029541L11.74 2.1887V19.1366Z"
        />
        <path
          className="logo--ear-bottom-right"
          d="M22.6262 10.8549L14.4246 2.72113L22.6262 0L21.7411 4.61408L22.6262 10.8549Z"
        />
        <path
          className="logo--ear-bottom-left"
          d="M0.883118 10.8549L9.11415 2.69155L0.883118 0L1.79768 4.61408L0.883118 10.8549Z"
        />
        <path
          className="logo--ear-top-right"
          d="M21.7115 4.55497C21.564 4.58455 14.454 2.78033 14.454 2.78033L22.5671 0.0592041L21.7115 4.55497Z"
        />
        <path
          className="logo--ear-top-left"
          d="M1.79794 4.58452C1.94545 4.6141 9.05541 2.80987 9.05541 2.80987L0.942383 0.0887451L1.79794 4.58452Z"
        />
        <path
          className="logo--nose"
          d="M13.3626 17.5394L11.74 16.4451L10.1174 17.5394L11.74 19.1366L13.3626 17.5394Z"
        />
      </svg>
    </div>
  );
};
