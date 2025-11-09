import React from "react";
import "../css/Form.css";

const Form = ({ sideContent, sideClassName = "", formNextClass = "" }) => {
  return (
    <>
      <section className={`FormPlus ${formNextClass}`}>
        <div
          className={`sideFormSection ${sideClassName}`}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {sideContent}
        </div>
        <form
          className="Form"
          name="Contact"
          method="POST"
          data-netlify="true"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <input type="hidden" name="form-name" value="Contact" />

          <span className="Formheading">
            <h1>
              Get in <span>Touch</span>
            </h1>
            <p>Questions? We’re Here to Help</p>
          </span>
          <div className="ActualForm">
            <span className="Formname">
              <input
                type="text"
                name="fname"
                placeholder="First Name"
                required
              />
              <input type="text" name="lname" placeholder="Last Name" />
            </span>
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              placeholder="Enter your Message.."
              name="message"
            ></textarea>
            <button type="submit" name="submit">
              Send Message <i className="ri-arrow-right-up-long-line"></i>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
