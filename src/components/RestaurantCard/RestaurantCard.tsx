import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import StarRateIcon from "@mui/icons-material/StarRate";

type RestaurantCardProps = {
  name?: string;
  rating?: number;
  specialty?: string;
  photoUrl?: string;
  isClosed?: boolean;
  categories?: string[];
  isLoading?: boolean;
  isNew?: boolean;
  onClick?: () => void;
  className?: string;
};

const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <Card sx={{ maxWidth: "400px" }}>
      <CardMedia
        sx={{ height: "200px" }}
        image="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Burger Kingdom
        </Typography>
        <Typography
          sx={{ display: "flex", alignItems: "center", mb: "0.5rem" }}
          variant="body1"
          color="text.secondary "
        >
          <StarRateIcon
            sx={{ width: "20px", height: "15px", ml: "-0.25rem" }}
          />{" "}
          4.2 Very Good
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Nicest place for burger
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={1} sx={{ ml: "0.5rem" }}>
          <Chip label="Burger" component="a" href="#basic-chip" />
          <Chip label="Comfort Food" component="a" href="#basic-chip" />
        </Stack>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;

/* 

const Container = styled.div(
  ({ theme: { borderRadius } }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: ${borderRadius.s};
    width: 100%;
    max-width: 500px;
    &:hover {
      opacity: 0.9;
    }
  `
)


*/
