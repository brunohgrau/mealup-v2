import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

const RoundCategoryCard = (props: Props) => {
  return (
    <>
      {/*Container*/}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          maxHeight: "200px",
          width: "100%",
          minWidth: "50px",
          maxWidth: "200px",
          padding: { xs: "1.5rem 2rem", md: "1.5rem 0" },
          margin: 0,
          borderRadius: "8px",
          backgroundColor: "#F9F9F9",
          cursor: "pointer",
          ":hover": {
            opacity: 0.9,
          },
        }}
      >
        <img
          src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550"
          alt="category"
          className="roundImage"
        />
        <Typography variant="body1" sx={{ paddingTop: "1rem" }}>
          Title
        </Typography>
      </Box>
    </>
  );
};

export default RoundCategoryCard;

/* 



 
  */
