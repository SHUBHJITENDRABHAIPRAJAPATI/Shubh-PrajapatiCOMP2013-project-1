import React  from "react";



/*

     counter component.
     - quantity: number to display quantity in cart
     - setQuantity: function to change quantity (should accept function prev => new)
     - min: minimum allowed (0 for product card, 1 for cart card)
     
*/
export default function QuantityCounter({ quantity, setQuantity, min = 0 }) {
  return (
    <div className="counter-container">
      <div
        className="counter-button"
        onClick={() => setQuantity((prev) => (prev > min ? prev - 1 : prev))}
      >
        -
      </div>
      <div>{quantity}</div>
      <div className="counter-button" onClick={() => setQuantity((prev) => prev + 1)}>
        +
      </div>
    </div>
  );
}