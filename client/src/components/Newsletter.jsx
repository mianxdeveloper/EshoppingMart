import React from "react";
import "../css/Newsletter.css";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          Subscribe to Our <span>Newsletter</span>
        </h2>
        <p className="newsletter-text">
          Get exclusive deals, new arrivals & insider updates – directly to your
          inbox.
        </p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </form>

        <p className="newsletter-note">
          Join 2,000+ happy subscribers <i className="ri-mail-send-line"></i>
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
