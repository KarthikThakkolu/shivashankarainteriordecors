import React, { useState, useEffect, useCallback } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("✅ Message sent to WhatsApp!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Error: " + result.error);
      }
    } catch (err) {
      alert("❌ Failed to send message.");
    }
  };




  const [feedbackList, setFeedbackList] = useState([]);
  
    const totalFeedbacks = feedbackList.length;
    const averageRating = totalFeedbacks > 0
      ? (feedbackList.reduce((sum, fb) => sum + fb.rating, 0) / totalFeedbacks).toFixed(1)
      : 0;
  
  
    useEffect(() => {
      const fetchFeedbacks = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/feedback");
          const data = await response.json();
          if (data.success && Array.isArray(data.feedbacks)) {
            console.log("Fetched Feedbacks:", data.feedbacks); // 👈 Add this line
            setFeedbackList(data.feedbacks);
          } else {
            console.error("Invalid feedback data format:", data);
            setFeedbackList([]);
          }
        } catch (err) {
          console.error("Error fetching feedbacks:", err);
        }
      };
  
      fetchFeedbacks();
    }, []);
  

  return (
    <div className="about-container">
      {/* ===== WHO WE ARE SECTION ===== */}
      {/* <section className="about-hero">
        <div className="about-left-image">
          <img
            src="https://previews.123rf.com/images/antoniodiaz/antoniodiaz1506/antoniodiaz150600015/41597583-portrait-of-a-group-of-people-looking-at-a-laptop-computer-and-doing-some-work-in-an-office.jpg"
            alt="Our Team"
          />
        </div>

        <div className="about-right">
          <h1 className="about-right-h1">Who We Are</h1>
          <p className="about-right-p">
            At <strong>Shiva Shankara Interiors</strong>, we combine creativity,
            craftsmanship, and innovation to transform spaces into stylish and
            functional environments. With years of expertise in interior design,
            we specialize in creating elegant, modern, and customized designs
            tailored to your lifestyle. Our mission is to turn your dream space
            into a reality with precision and passion.
          </p>
        </div>
      </section> */}
      <section class="about-hero">
  <img src="https://previews.123rf.com/images/antoniodiaz/antoniodiaz1506/antoniodiaz150600015/41597583-portrait-of-a-group-of-people-looking-at-a-laptop-computer-and-doing-some-work-in-an-office.jpg" class="about-left-image" />

  <div class="about-right">
    <h1 class="about-right-h1">Who We Are</h1>
    <p class="about-right-p">
       At <strong>Shiva Shankara Interiors</strong>, we combine creativity,
            craftsmanship, and innovation to transform spaces into stylish and
            functional environments. With years of expertise in interior design,
            we specialize in creating elegant, modern, and customized designs
            tailored to your lifestyle. Our mission is to turn your dream space
            into a reality with precision and passion.
    </p>
  </div>
</section>


<div className="service-grid">
  <div className="service-card">
    <i className="fa-solid fa-lock service-icon"></i>
    <h2 className="service-card-h2">Home Security</h2>
    <p className="service-card-p">Advanced locking systems</p>
  </div>

  <div className="service-card">
    <i className="fa-solid fa-user-nurse service-icon"></i>
    <h2 className="service-card-h2">Floor Services</h2>
    <p className="service-card-p">Expert flooring solutions</p>
  </div>

  <div className="service-card">
    <i className="fa-solid fa-palette service-icon"></i>
    <h2 className="service-card-h2">Home Decor</h2>
    <p className="service-card-p">Interior design excellence</p>
  </div>

  <div className="service-card">
    <i className="fa-solid fa-spaghetti-monster-flying service-icon"></i>
    <h2 className="service-card-h2">Pest Control</h2>
    <p className="service-card-p">pest control services</p>
  </div>
</div>


<div className="stats-section">
  <div className="stats-card">
    <i className="fa-solid fa-user-group stats-icon"></i>
    <h2 className="stats-card-h2">10K+</h2>
    <p className="stats-card-p">Happy Customers</p>
  </div>

  <div className="stats-card">
    <i className="fa-solid fa-rocket stats-icon"></i>
    <h2 className="stats-card-h2">500+</h2>
    <p className="stats-card-p">Projects Delivered</p>
  </div>

  <div className="stats-card">
    <i className="fa-solid fa-podcast stats-icon"></i>
    <h2 className="stats-card-h2">99%</h2>
    <p className="stats-card-p">Success Rate</p>
  </div>

  <div className="stats-card">
    <i className="fa-solid fa-medal stats-icon"></i>
    <h2 className="stats-card-h2" >15+</h2>
    <p className="stats-card-p">Industry Awards</p>
  </div>
</div>

{/* ===== CLIENT REVIEW SECTION ===== */}
{/* <div className="review-section">
  <h1>What Clients Say About Us</h1>

  <div className="review-boxes">
    <div className="review-card">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Client"
      />
      <h3>Priya Sharma</h3>
      <p className="title">Interior Designer</p>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>
        “They completely transformed my living room! The design was elegant and
        modern, just what I wanted.”
      </p>
    </div>

    <div className="review-card">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Client"
      />
      <h3>Rahul Verma</h3>
      <p className="title">Architect</p>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p>
        “Professional and creative team! They delivered the project on time and
        beyond expectations.”
      </p>
    </div>

    <div className="review-card">
      <img
        src="https://randomuser.me/api/portraits/women/65.jpg"
        alt="Client"
      />
      <h3>Anita Rao</h3>
      <p className="title">Home Owner</p>
      <div className="stars">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <p>
        “Loved their service! My home feels brand new, and the decor matches my
        personality perfectly.”
      </p>
    </div>
  </div>
</div> */}


{/* <div className="review-section">
  <h1>What Clients Say About Us</h1>

   <div className="feedback-list">
        {feedbackList.map((fb, i) => (
          <div className="feedback-card" key={i}>
            <div className="feedback-card-name">{fb.name}</div>
            <div className="feedback-card-stars">
              {"★".repeat(fb.rating)}{"☆".repeat(5 - fb.rating)}
            </div>
            <div className="feedback-card-message">{fb.message}</div>
            <div className="feedback-card-date">
              <p>
                {fb.timestamp
                  ? new Date(fb.timestamp).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  : "No date"}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div> */}

    <div className="client-feedback-section">
  <div className="client-feedback-title">
    What Clients Say About Us
  </div>

  <div className="client-feedback-average">
    Average Rating: {averageRating} / 5
    <div className="average-stars">
      {Array.from({ length: Math.floor(averageRating) }).map((_, i) => (
        <span className="star-filled" key={i}></span>
      ))}
      {averageRating % 1 !== 0 && <span className="star-half"></span>}
      {Array.from({ length: 5 - Math.ceil(averageRating) }).map((_, i) => (
        <span className="star-empty" key={i}></span>
      ))}
    </div>
  </div>

  <div className="client-feedback-wrapper">
    {feedbackList.map((fb, i) => (
      <div className="client-feedback-card" key={i}>
        <div className="client-feedback-name">{fb.name}</div>

        <div className="client-feedback-stars">
          {Array.from({ length: fb.rating }).map((_, idx) => (
            <span className="star-filled" key={idx}></span>
          ))}
          {Array.from({ length: 5 - fb.rating }).map((_, idx) => (
            <span className="star-empty" key={idx}></span>
          ))}
        </div>

        <div className="client-feedback-message">{fb.message}</div>

        <div className="client-feedback-date">
          {fb.timestamp
            ? new Date(fb.timestamp).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "No date"}
        </div>
      </div>
    ))}
  </div>
</div>




      {/* ===== CONTACT SECTION ===== */}
      {/* ===== CONTACT SECTION ===== */}
<div className="contact-section">
  <div className="contact-left">
    <h1 className="contact-title">Get in Touch</h1>
    <p className="contact-subtext">
      Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    </p>

    <div className="contact-details-box-information">
      <p className="contact-detail">
        <i className="location-icon fa-solid fa-location-dot"></i>
        <span className="contact-information">Our Office</span><br />
        <p className="address-location">
        2nd floor sridhar krishna towers ,annamayya circle mini bypass road Nellore , Nellore district,Andhra Pradesh -524004</p>
      </p>

      <p className="contact-detail">
        <i className="location-icon fa-solid fa-phone-volume"></i>
        <span className="contact-information">Phone</span><br />
        <p className="address-location">
        +91 638-343-1936</p>
      </p>

      <p className="contact-detail">
        <i className="location-icon fa-solid fa-envelope-circle-check"></i>
        <span className="contact-information">Email</span><br />
        <p className="address-location">ssinteriors99@gmail.com</p>
       
      </p>
    </div>
  </div>

  <div className="contact-right">
    <h2 className="contact-form-title">Contact Us</h2>

    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        className="contact-input"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="contact-input"
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="contact-input"
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <textarea
        className="contact-textarea"
        name="message"
        placeholder="Your Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button className="contact-button" type="submit">Send Message</button>
    </form>
  </div>
</div>
    </div>
  );
};

export default About;
