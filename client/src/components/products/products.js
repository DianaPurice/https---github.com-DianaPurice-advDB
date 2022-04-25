import React from "react";
import { useSelector } from "react-redux";

import Product from "./product/product";

import useStyles from "./styles";

const Products = () => {
  const products = useSelector((state) => state.posts);

  console.log(products);
  return (
    <>
      <h1>Products</h1>;
      <Product />
      <Product />
      <Product />
    </>
  );
};

export default Products;
