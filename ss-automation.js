import React from "react";
import "./SSAutomation.css"; // Create this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faLightbulb,
  faCogs,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const SSAutomation = () => {
  return (
    <div className="ss-automation-container">
      <div className="banner">
        <img
          src="https://www.hindustantimes.com/ht-img/img/2024/01/20/550x309/smrt_lock_1705734461390_1705734461631.jpg"
          alt="SS Automation"
          className="banner-image"
        />
        <div className="banner-text">
          <h1>SS Automation Services</h1>
          <p>Smart, seamless, and secure automation for your space</p>
        </div>
      </div>

<div className="auto-boxes">
  <div className="box">
    <FontAwesomeIcon icon={faRobot} className="box-icon" />
    <h3>AI Integration</h3>
    <p>Smart automation powered</p>
    <p>by intelligent systems</p>
  </div>

  <div className="box">
    <FontAwesomeIcon icon={faLightbulb} className="box-icon" />
    <h3>Lighting Control</h3>
    <p>Custom mood lighting</p>
    <p>with app control</p>
  </div>

  <div className="box">
    <FontAwesomeIcon icon={faCogs} className="box-icon" />
    <h3>Device Sync</h3>
    <p>All devices in sync</p>
    <p>with your commands</p>
  </div>

  <div className="box">
    <FontAwesomeIcon icon={faShieldAlt} className="box-icon" />
    <h3>Security</h3>
    <p>Smart surveillance</p>
    <p>with real-time alerts</p>
  </div>
</div>

<div className="our-products">
  <h2>Our Products</h2>
  <div className="product-grid">
    <div className="product-card">
      <img src="https://www.hindustantimes.com/ht-img/img/2024/01/20/550x309/smrt_lock_1705734461390_1705734461631.jpg" alt="Product 1" className="product-image" />
      <p className="product-title">Smart Lock</p>
      <p className="product-desc">Advanced security door system</p>
    </div>
    <div className="product-card">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*VkkCme8tkb5ah3ugjBkcnQ.png" alt="Product 2" className="product-image" />
      <p className="product-title">Voice Assistant</p>
      <p className="product-desc">Hands-free home control</p>
    </div>
    <div className="product-card">
      <img src="https://images.prismic.io//intuzwebsite/d2883a55-c0cd-4a8b-a9d6-dd0446156414_Banner.png?w=2400&q=80&auto=format,compress&fm=png8" alt="Product 3" className="product-image" />
      <p className="product-title">Smart Thermostat</p>
      <p className="product-desc">Efficient climate management</p>
    </div>
    <div className="product-card">
      <img src="https://cyberpro.in/wp-content/uploads/2021/04/CCTV-Camera-installation-near-me-in-bangalore.jpg" alt="Product 4" className="product-image" />
      <p className="product-title">CCTV Camera</p>
      <p className="product-desc">Real-time surveillance</p>
    </div>
    <div className="product-card">
      <img src="https://swapon.co.in/oc-content/uploads/1079/185245.jpg" alt="Product 5" className="product-image" />
      <p className="product-title">Automated Curtains</p>
      <p className="product-desc">Smart window control</p>
    </div>
    <div className="product-card">
      <img src="https://www.anbre.in/wp-content/uploads/2025/01/2.-Smart-Lighting-Systems.webp" alt="Product 6" className="product-image" />
      <p className="product-title">Lighting Systems</p>
      <p className="product-desc">Mood-based smart lights</p>
    </div>
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTE913YNCfAFu8CpDIgG4y7gqYLhTNdxa1w&s" alt="Product 7" className="product-image" />
      <p className="product-title">Motion Sensors</p>
      <p className="product-desc">Auto-activated lighting</p>
    </div>
    <div className="product-card">
      <img src="https://www.ozokart.com/cdn/shop/files/OZ-Life-WDB-01_Image-1.jpg?v=1697787917" alt="Product 8" className="product-image" />
      <p className="product-title">Smart Doorbell</p>
      <p className="product-desc">Video-enabled entry alerts</p>
    </div>
    <div className="product-card">
      <img src="https://lh3.googleusercontent.com/hMocN5AmKXj8bZF96zINiX8hfZRW-fcsEe0cMHP1ir6cogNe4sbzYspw0WweNm7w7ZWwtdwicDoxZmxoswA-GLMnYOfJQneYSQ=w3840-h2160-c-rw-v3" alt="Product 9" className="product-image" />
      <p className="product-title">Security Alarm</p>
      <p className="product-desc">Real-time threat detection</p>
    </div>
    <div className="product-card">
      <img src="https://m.media-amazon.com/images/I/6119U0+xriL.jpg" alt="Product 10" className="product-image" />
      <p className="product-title">Air Quality Monitor</p>
      <p className="product-desc">Track your home air status</p>
    </div>
    <div className="product-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXMcLQdVEs_HmmtwM2nITGEXGmbq_X2WQWA&s" alt="Product 11" className="product-image" />
      <p className="product-title">Smart Plugs</p>
      <p className="product-desc">Power control via app</p>
    </div>
    <div className="product-card">
      <img src="https://5.imimg.com/data5/ME/PC/PC/SELLER-62848518/wifi-router-500x500.jpg" alt="Product 12" className="product-image" />
      <p className="product-title">Wi-Fi Router</p>
      <p className="product-desc">Fast & stable connectivity</p>
    </div>
  </div>
</div>

<div className="security-intro">
  <h1>Why Choose Our Security Solutions?</h1>
  <p>We provide state-of-the-art security systems with professional installation and support</p>
</div>
<div className="features-section">
  <div className="features-left">
    <div className="feature-points">
          <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Smartphone and voice control enabled</p>
      <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Easy integration with existing systems</p>
      <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> 24/7 customer support and monitoring</p>
      <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Energy-efficient and cost-saving tech</p>
    <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Advanced encryption technology</p>
      <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Professional installation team</p>
      <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Battery backup systems</p>
      <p><FontAwesomeIcon icon={faCheck} className="check-icon" /> Lifetime warranty</p>
    </div>
  </div>

  <div className="features-right">
    <img
      src="https://cdn.sanity.io/images/bg7k3vu8/production/903b129d39b64df447bb97057872ac853c44c3c9-3882x2499.jpg?rect=1,0,3880,2499&w=1500&h=966&auto=format"
      alt="Automation Feature"
      className="feature-image"
    />
  </div>
</div>

      

    </div>
  );
};

export default SSAutomation;
