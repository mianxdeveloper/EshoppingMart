import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

const logo = new URL("../img/Mana-logo.png", import.meta.url).href;

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
      setCartCount(count);
    };

    updateCart();
    window.addEventListener("storage", updateCart);
    window.addEventListener("focus", updateCart);

    return () => {
      window.removeEventListener("storage", updateCart);
      window.removeEventListener("focus", updateCart);
    };
  }, []);

  // Mobile menu + dropdown toggle
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const devBtn = document.querySelector(".dropdown-click");
    const dropdown = document.querySelector(".dropdown");

    const handleMenuToggle = (e) => {
      menu.classList.toggle("menu-active");
      e.stopPropagation();
    };

    const toggleDropdown = (e) => {
      e.preventDefault();
      dropdown?.classList.toggle("dropdown-show");
    };

    menuToggle?.addEventListener("click", handleMenuToggle);
    devBtn?.addEventListener("click", toggleDropdown);

    return () => {
      menuToggle?.removeEventListener("click", handleMenuToggle);
      devBtn?.removeEventListener("click", toggleDropdown);
    };
  }, []);

  return (
    <div className="upHeader">
      <header>
        <span className="logo">
          <img className="logo-img-click" src={logo} alt="Logo" />
          <p></p>
        </span>

        <nav className="nav" id="menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "clicked active2" : "clicked"
            }
          >
            <i className="ri-home-8-line hidden-icon"></i>&nbsp;Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "clicked active2" : "clicked"
            }
          >
            <i className="ri-bookmark-3-fill hidden-icon"></i>&nbsp;About
          </NavLink>

          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? "clicked active2" : "clicked"
            }
          >
            <i className="ri-store-3-fill hidden-icon"></i>&nbsp;Store
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "clicked active2" : "clicked"
            }
          >
            <i className="ri-contacts-book-3-fill hidden-icon"></i>&nbsp;Contact
          </NavLink>
        </nav>

        <span className="carting-system">
          <NavLink className="cartBTN" to="/cart" title="Cart">
            <span className="cart-text">
              <i className="ri-shopping-cart-line"></i>&nbsp;{cartCount}
            </span>
          </NavLink>
          <button className="menu" id="menu-toggle">
            <i className="ri-menu-3-fill"></i>
          </button>
        </span>
      </header>
    </div>
  );
};

export default Header;
