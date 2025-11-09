import React from "react";
import "../css/Contact.css";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Newsletter from "../components/Newsletter";

const Contact = () => {
  return (
    <>
      <div className="page3">
        <div className="content3">
          <Form
            formNextClass="ContactForm"
            sideClassName="contactAside"
            sideContent={
              <>
                <h1>
                  Contact <span>Details</span>
                </h1>
                <div className="contact-details">
                  <p>
                    <i className="ri-user-3-line"></i> &nbsp;MANA ESHOPPING MART
                  </p>
                  <p>
                    <i className="ri-phone-fill"></i> &nbsp;{`+1 (305)9950499`}
                  </p>
                  <p>
                    <i className="ri-mail-open-line"></i>{" "}
                    &nbsp;help@manaeshoppingmartllc.com
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> &nbsp;1822 JOHNS DR
                    STE 2, GLENVIEW, IL 60025-1657, US
                  </p>
                </div>
                <div style={{ height: "50vh", width: "100%", zIndex: "1" }}>
                  <MapContainer
                    center={[42.08785, -87.811223]}
                    zoom={10}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  </MapContainer>
                </div>
              </>
            }
          />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
