import React, { useState } from "react";
import image1 from "../../assets/image2Copy.png";
import image2 from "../../assets/image10Copy.png";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 2,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 3,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 4,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 5,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 6,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 1,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
    {
      id: 7,
      name: "product 1",
      image: image1,
      alt_image: image2,
      price: 100,
    },
  ];

  return (
    <div className="container mx-auto mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((p) => <Product key={p.id} p={p}></Product>)}
      </div>
    </div>
  );
};

export default Products;
