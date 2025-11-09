import React, { useState, useEffect } from "react";
import "../css/Home.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import clipboardCopy from "clipboard-copy";
import Product from "../components/Product";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import TrustBadge from "../components/TrustBadge";
import Newsletter from "../components/Newsletter";

const heroImg = new URL("../img/hero.jpg", import.meta.url).href;

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Laravel API
  useEffect(() => {
    fetch("https://api.manaeshoppingmartllc.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  // Get first 6 products for featured section
  const displayProducts = featuredProducts.slice(0, 6);

  const handleWhatsAppClick = () => {
    const phoneNumber = "923227904989";
    const message = "Hi, I want to work with you!";
    const url =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
  };

  const email = "disclaimerface@gmail.com";

  const handleCopy = () => {
    clipboardCopy(email);
    alert("Email copied to clipboard!");
  };

  const isMobile = window.innerWidth <= 490;

  return (
    <div className="page">
      {/* Hero Section */}
      <div
        className="heroSection"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="overlay"></div>
        <div className="frontPage">
          <div className="leftFront">
            <h1 data-aos="fade-right" data-aos-duration="800">
              Improve Your <span>LifeStyle</span>
            </h1>
            <p data-aos="fade-right" data-aos-duration="1000">
              {isMobile
                ? "Select, order and get your favourites."
                : "We have a variety of products in Home and Kitchen. Search and select what is best for your home."}
            </p>
            <span className="leftBtns">
              <NavLink
                to="store"
                data-aos="fade-right"
                data-aos-duration="1200"
                className="leftBtns1"
              >
                Open Store&nbsp;<i className="ri-arrow-right-long-line"></i>
              </NavLink>
              <NavLink
                to="contact"
                data-aos="fade-right"
                data-aos-duration="1300"
                className="leftBtns2"
              >
                <i className="ri-play-large-line"></i>&nbsp; Get in touch
              </NavLink>
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="secondSection">
        <div
          className="secondSectionRight"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="services">
            <h3>150+</h3>
            <p>Active Team</p>
          </div>
          <div className="services">
            <h3>10+</h3>
            <p>Countries</p>
          </div>
          <div className="services">
            <h3>99.9%</h3>
            <p>Success rate</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="productSection">
        <div className="productHeader">
          <h1>
            Featured <span>Products</span>
          </h1>
          <p>Explore our best picks in the Home & Kitchen collection</p>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <h3>Loading featured products...</h3>
          </div>
        ) : (
          <>
            <div className="allProducts">
              {displayProducts.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  discount={product.discount}
                  isNew={product.isNew}
                  category={product.category}
                />
              ))}
            </div>

            <div className="allProductsBtnWrapper">
              <NavLink to="/store" className="allProductsBtn">
                All Products <i className="ri-arrow-right-line"></i>
              </NavLink>
            </div>
          </>
        )}
      </section>

      <Testimonials />
      <FAQ />
      <TrustBadge />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
