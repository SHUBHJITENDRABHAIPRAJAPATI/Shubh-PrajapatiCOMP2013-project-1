import React from "react";
import QuantityCounter from "./QuantityCounter";

/*

     items arry: {id, productName, price, image, quantity}
     onRemove: function(id):it will remove it 
     onChangeQty: function(id, newQty):it will chage quty and see either new quantity add or not
     

*/
export default function CartCard({ item, onRemove, onChangeQty }) {
     const numericPrice = parseFloat(item.price.replace("$", "")) || 0;

  
     const setQtyFn = (updater) => {

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
