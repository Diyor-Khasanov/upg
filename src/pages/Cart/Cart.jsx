import React, { useState, useEffect } from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.name !== product.name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="wrapper">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <h2 className="name">{item.name}</h2>
              <p className="price">Price: ${item.price}</p>

              <button onClick={() => removeFromCart(item)}>
                <DeleteIcon /> Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="total">
          <h2>Total: ${getTotalPrice()}</h2>
          <button className="checkout">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
