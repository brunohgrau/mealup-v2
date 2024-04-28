// ProductList.jsx
import React from "react";
import { useGetRestaurantsQuery } from "../store/restaurantApiSlice";

interface FoodMenuItem {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
}

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
  menu: {
    food: FoodMenuItem[];
    dessert: FoodMenuItem[];
    drinks: FoodMenuItem[];
  };
}

const RestaurantList = () => {
  const { isLoading, error, data } = useGetRestaurantsQuery("restaurants");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <ul>
      {data.map((restaurant: Restaurant) => (
        <li key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <ul>
            {restaurant.menu.dessert.map((menuItem: FoodMenuItem) => (
              <li key={menuItem.id}>
                {menuItem.name} - {`$${menuItem.price}`}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;
