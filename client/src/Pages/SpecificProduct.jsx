import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/SpecificProduct.css";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const SpecificProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.manaeshoppingmartllc.com/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product added to cart!");
    } else {
      alert("Product already in cart");
    }
  };

  if (loading) {
    return (
      <div className="spg-wrapper">
        <div className="spg-container">
          <div style={{ textAlign: "center", padding: "50px", width: "100%" }}>
            <h2>Loading product...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="spg-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate(-1)} className="spg-back-btn">
          Go Back
        </button>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <div className="spg-wrapper">
        <div className="spg-container">
          <div className="spg-image-side">
            <img
              src={`https://api.manaeshoppingmartllc.com/img/${product.image}`}
              alt={product.name}
              className="spg-image"
            />
          </div>

          <div className="spg-info">
            <h1 className="spg-title">{product.name}</h1>
            <p className="spg-price">${product.price}</p>
            <p className="spg-desc">
              {product.description || "This is a high-quality product."}
            </p>
            <p className="spg-meta">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="spg-meta">
              <strong>Rating:</strong> {"⭐".repeat(product.rating)}
            </p>
            {product.discount > 0 && (
              <p className="spg-meta">
                <strong>Discount:</strong> {product.discount}% off
              </p>
            )}
            {product.isNew && <p className="spg-new">🔥 New Arrival</p>}
            <button className="spg-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default SpecificProduct;
