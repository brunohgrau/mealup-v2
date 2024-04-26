// ProductList.jsx
import React from "react";
import { useGetRestaurantsQuery } from "../store/apiSlice";

interface Restaurant {
  id: string;
  name: string;
  mapsUrl: string;
  url: string;
  address: string;
  specialty: string;
  photoUrl: string;
  rating: number;
  categories: string[];
}

const RestaurantList: React.FC = () => {
  const { isLoading, error, data } = useGetRestaurantsQuery("restaurants");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <ul>
      {data.map((restaurant: Restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

export default RestaurantList;
