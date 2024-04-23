import React from "react";

type FooterCardProps = {
  title?: string;
  children?: React.ReactNode;
  links?: {
    external?: boolean;
    name?: string;
    href: string;
  }[];
};

const FooterCard = ({ title, links = [], children }: FooterCardProps) => {
  return (
    <div className="text-white rounded">
      <h2 className="mb-2 text-white text-2xl">{title}</h2>
      {links?.length > 0 && (
        <ul className="list-none m-0 p-0">
          {links.map(({ external, name, href }) => (
            <li>
              <p className="text-base mb-2">
                <a target="_blank" rel="noopener noreferrer" href="none">
                  {name}
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
};

export default FooterCard;

/*

  
   

    a {
      color: ${colors.white};
      text-decoration: none;
      cursor: pointer;
    }

    p {
      margin-top: ${spacing.xs};
      margin-bottom: ${spacing.xs};
    }


*/
