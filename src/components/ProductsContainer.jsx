import React from "react";
import ProductCard from "./ProductCard";

/*
  products:  to get all information data folder
  onAdd: function(product, qty)
     Read data from data file  to build the listings output in to app .
*/
export default function ProductsContainer({ products, onAdd }) {
  const listings = [];
  products.forEach((item) => {
    listings.push(
      <ProductCard key={item.id} product={item} onAdd={onAdd} />
    );
  });

  return <div className="ProductsContainer">{listings}</div>;
}
