import React, { useState } from "react";

const CartItem = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Aloe Vera", price: 10, quantity: 1 },
    { id: 2, name: "Rose", price: 12, quantity: 1 },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Total calculation
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Checkout button
  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>

          {/* IMPORTANT: className required */}
          <button
            className="delete-btn"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      {/* Checkout button FIX */}
      <button onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CartItem;
