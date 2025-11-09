import React from "react";
import "../css/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    image: new URL("../img/ecommerce.png", import.meta.url).href,
    rating: 5,
    review:
      "Absolutely love the kitchen rack! Quality is excellent and delivery was fast. Highly recommended store!",
  },
  {
    id: 2,
    name: "Zain Raza",
    image: new URL("../img/testimonial-boy.jpg", import.meta.url).href,
    rating: 4,
    review:
      "Bought a remote control car for my nephew. He loved it! Great quality products and excellent service.",
  },
  {
    id: 3,
    name: "Mehwish Ali",
    image: new URL("../img/ecommerce.png", import.meta.url).href,
    rating: 5,
    review:
      "The leather key holder is stylish and affordable. I’ll definitely shop again. Loved the packaging too!",
  },
];

const Star = ({ filled }) => (
  <i className={`ri-star-${filled ? "fill" : "line"} star-icon`}></i>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          What Our <span>Customers</span> Say
        </h2>
        <p className="testimonials-subheading">
          Real feedback from people who love our products.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <h4 className="testimonial-name">{t.name}</h4>
              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} filled={i <= t.rating} />
                ))}
              </div>
              <p className="testimonial-review">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
