import React, { useEffect, useState } from "react";
import "../css/Checkout.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const totalPrice = storedCart.reduce(
      (acc, item) => acc + (item.quantity || 1) * parseFloat(item.price),
      0
    );
    setTotal(totalPrice.toFixed(2));
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postal.trim()) newErrors.postal = "Postal code required";
    if (!formData.country) newErrors.country = "Select a country";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;

    const order = {
      ...formData,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity) || 1,
        image: item.image,
      })),
      total: Number(total),
      payment: "Cash on Delivery",
      placedAt: new Date().toISOString(),
    };

    console.log("📝 Order Prepared:", order); // This will be sent manually or via page submit

    setShowPopup(true);
    setTimeout(() => {
      localStorage.removeItem("cart");
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <div className="checkout-page">
        <div className="checkout-container">
          <h1>Checkout</h1>

          <div className="checkout-sections">
            {/* Shipping Info */}
            <div className="checkout-form">
              <h2>Shipping Information</h2>
              <form>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input
                  name="address"
                  type="text"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {errors.address && <p className="error">{errors.address}</p>}

                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <p className="error">{errors.city}</p>}

                <input
                  name="postal"
                  type="text"
                  placeholder="Postal Code"
                  value={formData.postal}
                  onChange={handleInputChange}
                />
                {errors.postal && <p className="error">{errors.postal}</p>}

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AR">Argentina</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BE">Belgium</option>
                  <option value="BR">Brazil</option>
                  <option value="CA">Canada</option>
                  <option value="CN">China</option>
                  <option value="EG">Egypt</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IT">Italy</option>
                  <option value="JP">Japan</option>
                  <option value="JO">Jordan</option>
                  <option value="KE">Kenya</option>
                  <option value="KW">Kuwait</option>
                  <option value="MY">Malaysia</option>
                  <option value="MX">Mexico</option>
                  <option value="MA">Morocco</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NG">Nigeria</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PH">Philippines</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="QA">Qatar</option>
                  <option value="RU">Russia</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SG">Singapore</option>
                  <option value="ZA">South Africa</option>
                  <option value="KR">South Korea</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syria</option>
                  <option value="TH">Thailand</option>
                  <option value="TR">Turkey</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="VN">Vietnam</option>
                  <option value="YE">Yemen</option>
                </select>

                {errors.country && <p className="error">{errors.country}</p>}

                <h2>Payment Method</h2>
                <div className="payment-options">
                  <label>
                    <input type="radio" name="payment" checked readOnly />
                    &nbsp;Cash on Delivery
                  </label>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="checkout-summary">
              <h2>Order Summary</h2>
              {cartItems.length === 0 ? (
                <p>No products in cart.</p>
              ) : (
                <div className="order-items">
                  {cartItems.map((item) => (
                    <div className="order-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>
                          Quantity: <strong>{item.quantity || 1}</strong>
                        </p>
                        <p>
                          Price: $
                          <strong>
                            {((item.quantity || 1) * item.price).toFixed(2)}
                          </strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="total-section">
                <h3>Total: ${total}</h3>
                <button
                  className="place-order-btn"
                  disabled={cartItems.length === 0}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <i className="ri-checkbox-circle-fill success-icon"></i>
            <h2>Order Placed!</h2>
            <p>Your order has been successfully placed.</p>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Checkout;
