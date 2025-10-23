import React from "react";
import QuantityCounter from "./QuantityCounter";

/*
 item: {id, productName, price, image, quantity, ...}
 onRemove: function(id)
 onChangeQty: function(id, newQty)
 Note: Cart's QuantityCounter minimum is 1 (cannot be 0 in cart; requirement)
*/
export default function CartCard({ item, onRemove, onChangeQty }) {
  const numericPrice = parseFloat(item.price.replace("$", "")) || 0;

  // wrapper to pass setter-style to QuantityCounter
  const setQtyFn = (updater) => {
    // let updater accept either function or number
    if (typeof updater === "function") {
      const newVal = updater(item.quantity);
      onChangeQty(item.id, newVal);
    } else {
      onChangeQty(item.id, updater);
    }
  };

  return (
    <div className="CartCard">
      <img src={item.image} alt={item.productName} />
      <div className="CartCardInfo">
        <h4>{item.productName}</h4>
        <p>Price: {item.price}</p>

        <QuantityCounter
          quantity={item.quantity}
          setQuantity={(fnOrVal) => setQtyFn(fnOrVal)}
          min={1}
        />

        <p>Subtotal: ${(numericPrice * item.quantity).toFixed(2)}</p>
      </div>

      <button className="RemoveButton" onClick={() => onRemove(item.id)}>
        Remove Item
      </button>
    </div>
  );
}
