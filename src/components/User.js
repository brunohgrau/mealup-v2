import React from "react";
import { useGetUserQuery } from "../slices/userApiSlice";

const User = () => {
  const { data, error, isLoading } = useGetUserQuery();

  return <div>{data.firstName}</div>;
};

export default User;
