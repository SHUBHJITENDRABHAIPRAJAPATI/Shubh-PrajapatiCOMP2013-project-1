import { useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

/*
  GroceriesAppContainer:
  - Main logical component that handles all states and events.
*/

export default function GroceriesAppContainer() {
  const [cart, setCart] = useState([]); 


  function handleAddToCart(product, qty) {
    let updatedCart = [...cart];
    let found = false;

    updatedCart.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += qty;
        found = true;
      }
    });

    if (!found) {
      updatedCart.push({ ...product, quantity: qty });
    }

    setCart(updatedCart);
  }

  function handleRemoveItem(productId) {
    let updatedCart = [];
    cart.forEach((item) => {
      if (item.id !== productId) {
        updatedCart.push(item);
      }
    });
    setCart(updatedCart);
  }

  function handleUpdateQuantity(productId, newQty) {
    let updatedCart = [];
    cart.forEach((item) => {
      if (item.id === productId) {
        item.quantity = newQty;
      }
      updatedCart.push(item);
    });
    setCart(updatedCart);
  }

  // Empty the entire cart
  function handleEmptyCart() {
    setCart([]);
  }

  function handleSaveCart() {
    console.log("Saved Cart:", cart);
    alert("Cart data saved (check console).");
  }

  return (
    <div id="root">
      <NavBar username="Shubh" cartCount={cart.length} />

      <div className="GroceriesApp-Container">
        {}
        <ProductsContainer products={products} onAdd={handleAddToCart} />

        {}
        <CartContainer
          cartItems={cart}
          onRemove={handleRemoveItem}
          onUpdateQty={handleUpdateQuantity}
          onEmpty={handleEmptyCart}
          onSave={handleSaveCart}
        />
      </div>
    </div>
  );
}
