import React from "react";
import "../css/TrustBadge.css";

const trustItems = [
  {
    icon: "ri-shield-check-line",
    title: "100% Secure Checkout",
    description: "Your payment information is processed securely.",
  },
  {
    icon: "ri-refresh-line",
    title: "Easy Returns",
    description: "7-day hassle-free return or exchange policy.",
  },
  {
    icon: "ri-medal-line",
    title: "Quality Assurance",
    description: "Every product is quality checked before dispatch.",
  },
  {
    icon: "ri-truck-line",
    title: "Fast Delivery",
    description: "Nationwide shipping within 3–5 working days.",
  },
];

const TrustBadge = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        {trustItems.map((item, index) => (
          <div className="trust-card" key={index}>
            <i className={`${item.icon} trust-icon`}></i>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadge;
