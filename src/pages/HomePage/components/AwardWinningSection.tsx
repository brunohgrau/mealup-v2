import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import restaurants from "../../../assets/images/restaurants.png";

type Props = {};

const AwardWinningSection = (props: Props) => {
  return (
    <>
      {/*Container*/}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "487px",
          backgroundColor: "#bdbdbd",
          overflow: "hidden",
          pl: "1rem",
        }}
      >
        {/*ContentContainer*/}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/*LeftContainer*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
              height: "487px",
              overflow: "hidden",
              justifyContent: "center",
              flex: { xs: 1, md: 0.5 },
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              Award Winning
            </Typography>
            <Typography variant="h4" sx={{ mt: "0.25rem" }}>
              {" "}
              The best restaurants near you!
            </Typography>
            <Link to="/categories">
              <Button
                variant="contained"
                sx={{
                  p: 2,
                  mt: "2rem",
                  textTransform: "none",
                  backgroundColor: "black",
                  "&.MuiButton-root:hover": { bgcolor: "black" },
                }}
              >
                <Typography variant="body1">
                  Explore Best Restaurants
                </Typography>
              </Button>
            </Link>
          </Box>

          {/*SlidingBackground*/}

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "100%",
              height: "5076px",
              backgroundImage: `url(${restaurants})`,
              backgroundRepeat: "repeat-y",
              flex: { xs: 0, md: 0.5 },
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default AwardWinningSection;

/*

const SlidingBackground = styled.div`

  animation: slide 60s linear infinite;



  @keyframes slide {
    0% {
      transform: translate3d(0, -1692px, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media ${breakpoints.M} {

    flex: 0.5;
  }
`



*/
