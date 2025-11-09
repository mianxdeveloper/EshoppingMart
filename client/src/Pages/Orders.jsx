import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import Footer from "../components/Footer";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    fetch("http://localhost:8000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load orders:", err);
        setLoading(false);
      });
  };

  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to remove this order?")) return;

    try {
      const res = await fetch(`http://localhost:8000/api/orders/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setOrders((prev) => prev.filter((order) => order._id !== id));
      } else {
        alert("Failed to delete order.");
      }
    } catch (error) {
      console.error("Error deleting order:", error);
      alert("Error occurred while deleting.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="orders-page">
        <p>Loading orders...</p>
      </div>
    );

  return (
    <>
      <div className="orders-page">
        <div className="orders-container">
          <h1>All Orders</h1>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <div className="orders-grid">
              {orders.map((order) => (
                <div className="order-card" key={order._id}>
                  <div className="order-header">
                    <h2>Order #{order._id.slice(-6).toUpperCase()}</h2>
                    <span className="badge">
                      {new Date(order.placedAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="order-info">
                    <p>
                      <strong>Name:</strong> {order.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {order.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {order.phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {order.address}, {order.city},{" "}
                      {order.country} — {order.postal}
                    </p>
                  </div>

                  <div className="items-section">
                    <h3>Items:</h3>
                    {order.items.map((item, i) => {
                      console.log(
                        `name: ${item.name}, price: ${item.price}, quantity: ${
                          item.quantity
                        }, total: ${+item.price * +item.quantity}`
                      );
                      console.log("ITEM:", item);
                      return (
                        <div className="item-row" key={i}>
                          <img src={item.image} alt={item.name} />
                          <div className="item-info2">
                            <p>
                              <strong>{item.name}</strong> ×{item.quantity}
                            </p>
                            <p className="price">
                              ${(+item.price * +item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="order-footer">
                    <p>
                      <strong>Total:</strong> ${order.total}
                    </p>
                    <p>
                      <strong>Payment:</strong> {order.payment}
                    </p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => deleteOrder(order._id)}
                  >
                    Remove Order
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
