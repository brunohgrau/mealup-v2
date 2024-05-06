import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

type FooterCardProps = {
  title?: string;
  links?: {
    external?: boolean;
    name: string;
    href: string;
  }[];
};

const FooterCard: React.FC<React.PropsWithChildren<FooterCardProps>> = ({
  title,
  links = [],
  children,
}) => {
  return (
    <>
      <Box
        sx={{
          color: "white",
          borderRadius: "4px",
          h2: { color: "white", marginBottom: "0.5em", fontSize: "1.5rem" },
          ul: { listStyle: "none", margin: 0, padding: 0 },
          a: { color: "white", textDecoration: "none", cursor: "pointer" },
          p: { marginTop: "0.5em", marginBottom: "0.5em" },
        }}
      >
        <h2>{title}</h2>
        {links.length > 0 && (
          <ul>
            {links.map(({ external, name, href }) => (
              <li key={name}>
                <p>
                  {external ? (
                    <a target="_blank" rel="noopener noreferrer" href={href}>
                      {name}
                    </a>
                  ) : (
                    <Link to={href}>{name}</Link>
                  )}
                </p>
              </li>
            ))}
          </ul>
        )}
        {children}
      </Box>
    </>
  );
};

export default FooterCard;

/* 

const FooterCardContainer = styled.div(

 

    p {
      margin-top: ${spacing.xs};
      margin-bottom: ${spacing.xs};
    }
  `
)


*/
