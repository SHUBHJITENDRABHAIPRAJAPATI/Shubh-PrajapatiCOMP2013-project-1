import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

/*
          product: the single product object from data,it show single product for asspcontainr file
          onAdd: function(productObj, qty) called when user clicks Add it will add items to cart
*/
export default function ProductCard({ product, onAdd }) {
  
  const [qty, setQty] = useState(0);

  const handleAddClick = () => {
    if (qty <= 0) {
      alert("Please select at least 1 before adding to cart.");
      return;
    }
    onAdd(product, qty);
    setQty(0);
  };

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.brand}</p>
      <p>{product.quantity}</p>
      <p>{product.price}</p>

      <QuantityCounter quantity={qty} setQuantity={setQty} min={0} />

      <button onClick={handleAddClick}>Add to Cart</button>
    </div>
  );
}
