// src/Pages/OrderRequest.js
import React, { useState } from "react";
import "./Orderrequest.css";

const OrderRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Order request sent via WhatsApp!");
          setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        } else {
          alert("Failed to send message.");
        }
      })
      .catch(() => alert("Something went wrong. Check backend."));
  };

  return (
    <div className="order-container">

      {/* LEFT SECTION */}
      <div className="order-left">

        <div className="title">Request an Order</div>

        <div className="desc">
          Please fill in the form to request your desired service.
          Our team will get back to you shortly.
        </div>

        {/* Contact Details */}
        <div className="order-details">

          <div className="detail-item">
            <i className="fa-solid fa-location-dot icon"></i>
            <div className="detail-text">
              Address: 123 Service Avenue, Bangalore
            </div>
          </div>

          <div className="detail-item">
            <i className="fa-solid fa-phone icon"></i>
            <div className="detail-text">Phone: +91 6383431936</div>
          </div>

          <div className="detail-item">
            <i className="fa-solid fa-envelope icon"></i>
            <div className="detail-text">Email: ssinteriors99@gmail.com</div>
          </div>

        </div>
      </div>

      {/* RIGHT SECTION - FORM */}
      <div className="order-right">

        <div className="form-title">Order Form</div>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              className="input-field"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Service (typing + selection) */}
          <div className="input-box">
            <input
              className="input-field"
              list="service-options"
              name="service"
              type="text"
              value={formData.service}
              onChange={handleChange}
              placeholder="Select or type a service"
              required
            />
            <datalist id="service-options">
              <option value="SS Automation" />
              <option value="Floor Designers" />
              <option value="The Best Interiors" />
              <option value="Pest Control" />
            </datalist>
          </div>

          <div className="textarea-box">
            <textarea
              className="textarea-field"
              name="message"
              placeholder="Additional Details"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Request
          </button>

        </form>
      </div>
    </div>
  );
};

export default OrderRequest;
