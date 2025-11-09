import React, { useState } from "react";
import "../css/FAQ.css";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, JazzCash, Easypaisa, and Cash on Delivery for eligible locations.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are typically delivered within 3–5 working days in major cities and 5–7 days in remote areas.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, you can return or exchange a product within 7 days if it's unused and in original packaging. See our return policy for more details.",
  },
  {
    question: "Do you offer warranties on products?",
    answer:
      "Yes, selected items come with a limited-time warranty. Warranty details are mentioned on the product page if applicable.",
  },
  {
    question: "Are your products original and high quality?",
    answer:
      "Absolutely. We only deal in verified and quality-tested products across all categories including kitchen, toys, and furniture.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">
          Frequently <span>Asked</span> Questions
        </h2>
        <p className="faq-subheading">
          Got a question? We’ve got answers. Here's what customers usually ask.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <i
                  className={`ri-arrow-${
                    activeIndex === index ? "up" : "down"
                  }-s-line`}
                ></i>
              </div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
