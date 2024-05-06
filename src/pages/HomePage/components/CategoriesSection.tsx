import React from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RoundCategoryCard from "../../../components/RoundCategoryCard/RoundCategoryCard";
import { Link } from "react-router-dom";

type CategoriesSectionProps = {
  title: string;
};

const CategoriesSection = ({ title }: CategoriesSectionProps) => {
  return (
    <>
      {/*Container*/}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "1rem",
        }}
      >
        {/*Top Container*/}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <h1>{title}</h1>
          <Link to="/restaurants">
            <Button
              variant="contained"
              sx={{
                p: 1,
                textTransform: "none",
                backgroundColor: "#BCBCBC",
                "&.MuiButton-root:hover": { bgcolor: "#BCBCBC" },
              }}
            >
              <Typography variant="body1">View All Categories</Typography>
            </Button>
          </Link>
        </Box>

        {/*Bottom Container*/}
        <RoundCategoryCard></RoundCategoryCard>
      </Box>
    </>
  );
};

export default CategoriesSection;

/* 



*/
