// ProductList.jsx
import React from "react";
import { useGetProductsQuery } from "../store/apiSlice";

interface Product {
  id?: number;
  name?: string;
  price?: number;
}

const ProductList: React.FC = () => {
  const { isLoading, error, data } = useGetProductsQuery("products");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <ul>
      {data.map((product: Product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
