import React, { useState, useEffect } from "react";
import "../css/Store.css";
import Product from "../components/Product";
import Footer from "../components/Footer";

const categories = [
  "all",
  "kitchen",
  "accessories",
  "toys",
  "furniture",
  "home",
  "decor",
];

const Store = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);

  // Fetch products from Laravel API
  useEffect(() => {
    fetch("https://api.manaeshoppingmartllc.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "price-low")
        return parseFloat(a.price) - parseFloat(b.price);
      if (sortOrder === "price-high")
        return parseFloat(b.price) - parseFloat(a.price);
      return 0;
    });

  if (loading) {
    return (
      <div className="page">
        <div className="productSection">
          <div className="productHeader">
            <h1>
              All <span>Products</span>
            </h1>
            <p>
              Explore everything we offer in Home, Kitchen, Toys & Accessories
            </p>
          </div>
          <div style={{ textAlign: "center", padding: "50px" }}>
            <h3>Loading products...</h3>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="productSection">
        <div className="productHeader">
          <h1>
            All <span>Products</span>
          </h1>
          <p>
            Explore everything we offer in Home, Kitchen, Toys & Accessories
          </p>
        </div>

        <div
          className="filter-controls"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            style={{ marginLeft: "10px" }}
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="allProductshere">
          {filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Store;
