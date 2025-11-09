import React from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import "../css/About.css";

const aboutBg = new URL("../img/hero.jpg", import.meta.url).href;
const user1 = new URL("../img/ab-rehman.jpg", import.meta.url).href;
const user2 = new URL("../img/marketing.jpg", import.meta.url).href;
const user3 = new URL("../img/founder.jpg", import.meta.url).href;

const About = () => {
  return (
    <>
      <section className="about-page">
        {/* Hero Section */}
        <div
          className="about-hero"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1>About Us</h1>
          <p>
            Your trusted destination for quality products in Home, Kitchen, Toys
            & more.
          </p>
        </div>

        {/* Main Content */}
        <div className="about-container">
          {/* Who We Are */}
          <div className="about-section">
            <h2>
              <i className="ri-user-star-line"></i>Who We Are
            </h2>
            <p>
              We are a customer-first online store based in Pakistan, dedicated
              to providing high-quality, affordable, and functional products for
              your everyday needs. Whether it's upgrading your kitchen,
              decorating your living space, or buying thoughtful gifts, we've
              got you covered.
            </p>
          </div>

          {/* Our Mission */}
          <div className="about-section">
            <h2>
              <i className="ri-flag-line"></i>Our Mission
            </h2>
            <p>
              Our mission is to make online shopping seamless and reliable. We
              aim to deliver the best value without compromising quality. With
              transparent pricing, responsive support, and fast shipping, we
              ensure your satisfaction.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="about-highlights">
            <div className="highlight-card">
              <i className="ri-star-line"></i>
              <h4>Top Quality</h4>
              <p>
                All products go through strict quality control before delivery.
              </p>
            </div>
            <div className="highlight-card">
              <i className="ri-truck-line"></i>
              <h4>Fast Shipping</h4>
              <p>We ship all across Pakistan in 3–5 business days.</p>
            </div>
            <div className="highlight-card">
              <i className="ri-customer-service-2-line"></i>
              <h4>Great Support</h4>
              <p>We’re here to help, before and after your purchase.</p>
            </div>
            <div className="highlight-card">
              <i className="ri-shield-check-line"></i>
              <h4>Secure Checkout</h4>
              <p>Your transactions are encrypted and safe with us.</p>
            </div>
          </div>

          {/* Team Section */}
          <div className="about-section team-section">
            <h2>
              <i className="ri-team-line"></i>Meet Our Team
            </h2>
            <div className="team-members">
              {/* Member 1 */}

              <div className="team-card">
                <div className="team-img-wrapper">
                  <img src={user3} alt="Sarah Iqbal" />
                </div>
                <div className="overlay">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line"></i>
                  </a>
                </div>
                <h4>Muzamil Ali</h4>
                <p>Founder and CEO</p>
              </div>

              {/* Member 2 */}
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img src={user1} alt="Abdul Rehman" />
                </div>
                <div className="overlay">
                  <a
                    href="https://www.linkedin.com/in/mianxdeveloper/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/mianxdeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </div>
                <h4>Abdul Rehman</h4>
                <p>Designer & Developer</p>
              </div>

              {/* Member 3 */}
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img src={user2} alt="Ali Zain" />
                </div>
                <div className="overlay">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line"></i>
                  </a>
                </div>
                <h4>Ali Hasan</h4>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
