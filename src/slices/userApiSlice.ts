import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../types/index";

export const userApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/fakeApi/users" }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: () => {},
    }),
  }),
});
