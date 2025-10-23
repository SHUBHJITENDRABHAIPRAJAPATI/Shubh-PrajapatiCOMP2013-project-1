import React, { useEffect, useState } from "react";
import products from "../data/products";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

/*
  Main logical component that:
  - Holds cart state (compound logic)
  - Provides handlers used by child components
  - Loads saved cart from localStorage on mount
  - Saves cart to localStorage via explicit onClick (professor wants onclick)
*/
const STORAGE_KEY = "groceries_cart";

export default function GroceriesAppContainer() {
  // cart: array of items {id, productName, price, image, quantity, ...}
  const [cart, setCart] = useState([]);

  // Load saved cart from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      } catch (e) {
        // if parse fails, ignore
        console.error("Failed to parse saved cart", e);
      }
    }
  }, []);

  // Helper: merge add into cart (compound state management)
  const handleAddToCart = (product, quantityToAdd) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        // update existing quantity (professor requirement)
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantityToAdd } : p
        );
      } else {
        // add new
        return [...prev, { ...product, quantity: quantityToAdd }];
      }
    });
  };

  // Remove item from cart (onClick)
  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };

  // Update quantity in cart (set exact newQty); called from CartCard's QuantityCounter
  const handleUpdateQuantity = (id, newQty) => {
    // professor requested that cart quantities cannot be <= 1 (we enforce min in QuantityCounter)
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: newQty } : it))
    );
  };

  // Empty cart
  const handleEmptyCart = () => {
    setCart([]);
  };

  // Save cart to localStorage - triggered by onClick Save Cart
  const handleSaveCart = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
      alert("Cart saved.");
    } catch (e) {
      console.error("Failed to save cart", e);
      alert("Failed to save cart.");
    }
  };

  return (
    <div id="root">
      <NavBar username="Shubh" cartCount={cart.length} />
      <div className="GroceriesApp-Container">
        <ProductsContainer products={products} onAdd={handleAddToCart} />
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
