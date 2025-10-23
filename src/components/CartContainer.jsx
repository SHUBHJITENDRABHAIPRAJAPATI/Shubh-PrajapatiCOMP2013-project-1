import React from "react";
import CartCard from "./CartCard";

/*
 cartItems: array of cart item objects
 onRemove: function(id)
 onUpdateQty: function(id, newQty)
 onEmpty: function()
 onSave: function() - save cart to localStorage
*/
export default function CartContainer({
  cartItems,
  onRemove,
  onUpdateQty,
  onEmpty,
  onSave,
}) {
  // build cart listings using forEach to match professor's code style
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="CartContainer">
        <p>No items in the cart.</p>
        <div style={{ marginTop: "1rem" }}>
          <button onClick={onSave}>Save Cart</button>
        </div>
      </div>
    );
  }

  const listings = [];
  cartItems.forEach((item) => {
    listings.push(
      <CartCard
        key={item.id}
        item={item}
        onRemove={onRemove}
        onChangeQty={onUpdateQty}
      />
    );
  });

  // total price
  const total = cartItems.reduce((acc, it) => {
    const p = parseFloat(it.price.replace("$", "")) || 0;
    return acc + p * it.quantity;
  }, 0);

  return (
    <div className="CartContainer">
      <h3>Cart ({cartItems.length})</h3>
      {listings}
      <div className="CartListBtns" style={{ marginTop: "1rem" }}>
        <button className="RemoveButton" onClick={onEmpty}>
          Empty Cart
        </button>
        <button id="BuyButton">Buy (${total.toFixed(2)})</button>
      </div>

      <div style={{ marginTop: "1rem" }}>
        {/* Save button: professor asked for onclick to save data */}
        <button onClick={onSave}>Save Cart</button>
      </div>
    </div>
  );
}
