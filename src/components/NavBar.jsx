import React from "react";
import emptyCart from "../assets/cart-empty.png";
import fullCart from "../assets/cart-full.png";

/*
  NavBar
  ----------------
  it shows the app title, username greeting, 
  and a cart image that changes depending on how many 
  items are in the cart.

*/

export default function NavBar({ username = "Shubh", cartCount = 0 }) {
  // Choosing which image to show
  const cartImage = cartCount > 0 ? fullCart : emptyCart;

  return (
    <div className="NavBar">
      {}
      <div className="NavDiv NavUser">
        Hello, {username}
      </div>

      {}
      <div className="NavDiv NavTitle">
        <h2>Grocery Shopping App</h2>
      </div>

      {}
      <div className="NavDiv NavCart">
        {}
        <img
          src={cartImage}
          alt="cart"
          style={{ height: "30px", width: "30px" }}
        />
      </div>
    </div>
  );
}
