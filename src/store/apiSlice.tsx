// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(), // Adjust port if needed
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/api/products",
    }),
    getRestaurants: builder.query({
      query: () => "/api/restaurants",
    }),
  }),
});

export const { useGetProductsQuery, useGetRestaurantsQuery } = apiSlice;
