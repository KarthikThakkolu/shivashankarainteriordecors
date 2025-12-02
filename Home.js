import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import About from "./About";

const Home = () => {
  const navigate = useNavigate();
  // const [feedbackList, setFeedbackList] = useState([]);

  // const totalFeedbacks = feedbackList.length;
  // const averageRating = totalFeedbacks > 0
  //   ? (feedbackList.reduce((sum, fb) => sum + fb.rating, 0) / totalFeedbacks).toFixed(1)
  //   : 0;


  // useEffect(() => {
  //   const fetchFeedbacks = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/feedback");
  //       const data = await response.json();
  //       if (data.success && Array.isArray(data.feedbacks)) {
  //         console.log("Fetched Feedbacks:", data.feedbacks); // 👈 Add this line
  //         setFeedbackList(data.feedbacks);
  //       } else {
  //         console.error("Invalid feedback data format:", data);
  //         setFeedbackList([]);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching feedbacks:", err);
  //     }
  //   };

  //   fetchFeedbacks();
  // }, []);




  const images = [
    {
      url: "https://www.hindustantimes.com/ht-img/img/2024/01/20/550x309/smrt_lock_1705734461390_1705734461631.jpg",
      title: "Modern Interior Design",
      subtitle: "Advanced Locking Systems for Your Safety",
      link: "/services/ss-automation",
    },
    {
      url: "https://customfloorsbymike.com/wp-content/uploads/2024/12/premium-hardwood-middle-04.jpg",
      title: "Floor Designers",
      subtitle: "Transforms Your Space with Elegance",
      link: "/services/floor-designers",
    },
    {
      url: "https://images.hindustantimes.com/img/2022/12/15/550x309/spacejoy-YI2YkyaREHk-unsplash_1671112806479_1671112828103_1671112828103.jpg",
      title: "The Best Interior Products",
      subtitle: "Create Your Dream Living Space",
      link: "/services/the-best",
    },
    {
      url: "https://mothernaturesinc.com/wp-content/uploads/2024/02/WhyProfessionalPestControlServicesareVitalforHomes.jpg",
      title: "Pest Control Services",
      subtitle: "Protect your home from unwanted guests",
      link: "/services/pest-control",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ✅ UseCallback to fix useEffect warning
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = async () => {
    if (!formData.name || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    const response = await fetch("http://localhost:5000/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };


  // Services section
  const services = [
    {
      img: "https://hnthebest.com/services_hn.jpg",
      title: "Home Automation",
      desc: "Advanced security solutions for your peace of mind",
      link: "/services/ss-automation",
    },
    {
      img: "https://hnthebest.com/service_wonder_flooring.jpg",
      title: "Floor Designers",
      desc: "Expert flooring solutions including vinyl, hardwood, and more",
      link: "/services/floor-designers",
    },
    {
      img: "https://hnthebest.com/services_the_best.jpg",
      title: "ALL Product",
      desc: "Transform your space with our interior design services",
      link: "/services/the-best",
    },
    {
      img: "https://hnthebest.com/service_pest_control.jpg",
      title: "Pest Control Services",
      desc: "Professional pest control services for your home and business",
      link: "/services/pest-control",
    },
  ];

  return (
    <div className="home-container">
      {/* 🔁 Image Slider */}
      <div className="slider">
        {images.map((img, index) => (
          <div key={index} className={`slide ${index === current ? "active" : ""}`}>
            {index === current && (
              <>
                <img src={img.url} alt={img.title} />
                <div className="overlay">
                  <h2>{img.title}</h2>
                  {img.subtitle && <p>{img.subtitle}</p>}
                  <button onClick={() => navigate(img.link)}>Get Started</button>
                </div>
              </>
            )}
          </div>
        ))}

        {/* ⬅️➡️ Navigation Arrows */}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>

        {/* ⚪ Navigation Dots */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* 🛠 Services Section */}
      {/* <div className="services-section">
        <h1>Our Services</h1>
        <p>"We offer reliable home services designed to make daily living easier and your home more comfortable  <br/>and your home better."</p>

        <div className="services-boxes">
          {services.map((service, i) => (
            <div key={i} className="service-box">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button onClick={() => navigate(service.link)}>Learn More</button>
            </div>
          ))}
        </div>
      </div> */}
      <div className="services-section">
  <div className="services-section-title">Our Services</div>
  <div className="services-section-subtitle">
    "We offer reliable home services designed to make daily living easier and your home more comfortable, <br/>
    and your home better."
  </div>

  <div className="services-boxes">
    {services.map((service, i) => (
      <div key={i} className="service-box">
        <div
          className="service-box-image"
          style={{ backgroundImage: `url(${service.img})` }}
        ></div>
        <div className="service-box-title">{service.title}</div>
        <div className="service-box-desc">{service.desc}</div>
        <div
          className="service-box-button"
          onClick={() => navigate(service.link)}
        >
          Learn More
        </div>
      </div>
    ))}
  </div>
</div>


  
      {/* <div className="feedback-list">
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
      </div> */}




      {/* 📄 About Section */}
      <About />
    </div>
  );
};

export default Home;
