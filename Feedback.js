// src/components/Feedback.js
import React, { useState, useEffect } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (value) => {
    localStorage.setItem("selectedRating", value);
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  useEffect(() => {
    const savedRating = localStorage.getItem("selectedRating");
    if (savedRating) {
      setFormData((prev) => ({ ...prev, rating: Number(savedRating) }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Thank you, ${formData.name}! Feedback submitted.`);
        setFormData({ name: "", rating: 0, message: "" });
        localStorage.removeItem("selectedRating");
      } else {
        alert("Failed to send feedback.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <div className="container1">
      {/* LEFT SECTION */}
      <div className="left-content">
        <div className="left-title">We Value Your Feedback</div>

        <div className="left-description">
          Your opinion helps us improve our services. Please share your thoughts.
        </div>

        <div className="contact-details">
          <div className="contact-row">
            <i className="fa-solid fa-location-dot"></i>
            <span className="contact-label">Our Office:</span>
            <span className="contact-value">
              123 Service Avenue, Home Park, Bangalore
            </span>
          </div>

          <div className="contact-row">
            <i className="fa-solid fa-phone-volume"></i>
            <span className="contact-label">Phone:</span>
            <span className="contact-value">+91 638-343-1936</span>
          </div>

          <div className="contact-row">
            <i className="fa-solid fa-envelope-circle-check"></i>
            <span className="contact-label">Email:</span>
            <span className="contact-value">ssinteriors99@gmail.com</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-form">
        <div className="form-title">Submit Feedback</div>

        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="form-row">
            <div className="label-text">Name:</div>
            <input
              className="input-box"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* RATING */}
          <div className="rating-container">
            <div className="rating-label">Your Rating:</div>

            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${formData.rating >= star ? "filled" : ""}`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="form-row">
            <div className="label-text">Feedback:</div>
            <textarea
              className="textarea-box"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button className="submit-btn" type="submit">
            Send Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
