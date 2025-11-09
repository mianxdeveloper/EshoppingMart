import React from "react";
import "../css/Footer.css";
import { Link, NavLink } from "react-router-dom";
const logoFooter = new URL("../img/Mana-logo.png", import.meta.url).href;

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="upper-footer">
          <div className="left-upper-footer">
            <img src={logoFooter} />
            <p>This is a destination where you can buy your desires.</p>
            <span className="footer-icons">
              <NavLink
                to="https://github.com/mianxdeveloper"
                target="_blank"
                className="github"
              >
                <i className="ri-github-fill"></i>
              </NavLink>
              <NavLink
                to="https://www.instagram.com/mianxdeveloper/"
                target="_blank"
                className="instagram"
              >
                <i className="ri-instagram-fill"></i>
              </NavLink>
              <NavLink
                to="https://www.facebook.com/@mianxdeveloper"
                target="_blank"
                className="facebook"
              >
                <i className="ri-facebook-circle-fill"></i>
              </NavLink>
            </span>
          </div>
          <div className="right-upper-footer">
            <div className="social-links">
              <h1>Social</h1>
              <span className="link-span">
                <NavLink
                  to="https://www.facebook.com/@mianxdeveloper"
                  target="_blank"
                  className="footer-links"
                >
                  Facebook
                </NavLink>
                <NavLink
                  to="https://www.instagram.com/mianxdeveloper/"
                  target="_blank"
                  className="footer-links"
                >
                  Instagram
                </NavLink>
                <NavLink
                  to="https://wa.me/923227904989"
                  target="_blank"
                  className="footer-links"
                >
                  WhatsApp
                </NavLink>
                <NavLink
                  to="https://github.com/mianxdeveloper"
                  target="_blank"
                  className="footer-links"
                >
                  Github
                </NavLink>
              </span>
            </div>
            <div className="quick-links">
              <h1>Quick Links</h1>
              <span className="link-span">
                <NavLink to="/" className="footer-links">
                  Home
                </NavLink>
                <NavLink to="/about" className="footer-links">
                  About
                </NavLink>
                <NavLink to="/store" className="footer-links">
                  Store
                </NavLink>
                <NavLink to="/contact" className="footer-links">
                  Contact
                </NavLink>
              </span>
            </div>
            <div className="company-links">
              <h1>Categories</h1>
              <span className="link-span">
                <NavLink className="footer-links">Electronics</NavLink>
                <NavLink className="footer-links">Accessories</NavLink>
                <NavLink className="footer-links">Clothing</NavLink>
                <NavLink className="footer-links">Toys</NavLink>
              </span>
            </div>
            <div className="support-links">
              <h1>Legal Documents</h1>
              <span className="link-span">
                <NavLink className="footer-links">Terms and Conditions</NavLink>
                <NavLink className="footer-links">Privacy Policy</NavLink>
              </span>
            </div>
          </div>
        </div>

        <hr />

        <div className="lower-footer">
          <p>
            Copyright <i className="ri-copyright-line"></i> Mana E-shopping Mart
            2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
