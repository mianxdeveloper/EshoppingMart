import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Product.css";

const Product = ({
  id,
  image,
  name,
  price,
  rating,
  discount,
  isNew,
  category,
}) => {
  // ✅ FIXED: Construct full image URL
  const imageUrl = `https://api.manaeshoppingmartllc.com/img/${image}`;

  // Generate star icons based on rating
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <i key={`full-${i}`} className="ri-star-fill"></i>
          ))}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <i key={`empty-${i}`} className="ri-star-line"></i>
          ))}
      </>
    );
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === id);
    if (!exists) {
      cart.push({
        id,
        name,
        price,
        image: `https://api.manaeshoppingmartllc.com/img/${image}`,
      }); // ✅ Store full URL in cart
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart!");
    } else {
      alert("Already in cart");
    }
  };

  return (
    <NavLink
      to={`/product/${id}`}
      className="product-card"
      data-product-id={id}
      data-category={category}
    >
      <div className="product-img-wrapper">
        {/* ✅ FIXED: Use full image URL */}
        <img src={imageUrl} alt={name} className="product-img" />
        {discount && <span className="discount-box">-{discount}%</span>}
        {isNew && <span className="new-tag">NEW</span>}
      </div>
      <div className="product-info">
        <div className="product-text">
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
        <div className="product-rating">{renderStars()}</div>
        <button className="product-add-to-cart" onClick={handleAddToCart}>
          <span className="cart-link">
            Cart &nbsp;<i className="ri-shopping-cart-line"></i>
          </span>
        </button>
      </div>
    </NavLink>
  );
};

export default Product;
