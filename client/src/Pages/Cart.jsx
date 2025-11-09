import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Cart.css";
import Footer from "../components/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const withQuantities = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(withQuantities);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const handleQuantityChange = (id, delta) => {
    const updated = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
        : item
    );
    updateCart(updated);
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);

  return (
    <>
      <div className="cart-page">
        <div className="cart-container">
          <h1>
            Your <span>Cart</span>
          </h1>
          {cartItems.length === 0 ? (
            <div className="empty-cart-box">
              <i className="ri-shopping-bag-line empty-icon"></i>
              <p className="empty-cart">Your cart is currently empty.</p>
              <NavLink to="/store" className="continue-shopping-btn">
                <i className="ri-arrow-left-line"></i> Continue Shopping
              </NavLink>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>Price: ${item.price}</p>
                      <div className="quantity-control">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <i className="ri-subtract-line"></i>
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          <i className="ri-add-line"></i>
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>Total: ${totalPrice}</h3>
                <NavLink to="/checkout" className="checkout-btn">
                  Proceed to Checkout
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
