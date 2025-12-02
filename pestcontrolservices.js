import React from "react";
import "./pestcontrolservices.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRobot,faLightbulb,faCogs,faShieldAlt} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const PestControl = () => {
  return (
    <div className="best-container3">
      <div className="best-con13">
        <img
          src="https://mothernaturesinc.com/wp-content/uploads/2024/02/WhyProfessionalPestControlServicesareVitalforHomes.jpg"
          alt="SS Automation"
          className="best-image13"
        />
        <div className="best-text3">
          <h1>Professional Pest Control Services</h1>
          <p>Protect your home and family with our comprehensive pest control solutions</p>
        </div>
      </div>

<div className="best-boxes3">
  <div className="bestbox3">
    <i class="fa-regular fa-address-card"></i>
    <h3>Residential Pest Control</h3>
    <p>Complete pest management for homes</p>
  </div>

  <div className="bestbox3">
   <i class="fa-solid fa-bug"></i>
    <h3>Commercial Services</h3>
    <p>Business and industrial solutions</p>
  </div>

  <div className="bestbox3">
    <i class="fa-solid fa-spray-can"></i>
    <h3>Emergency Response</h3>
    <p>24/7 urgent pest control service</p>
  </div>

  <div className="bestbox3">
   <i class="fa-solid fa-calendar"></i>
    <h3>Preventive Treatment</h3>
    <p>Regular maintenance plans</p>
  </div>
</div>

<div className="best-products3">
  <h2>Our Products</h2>
  <div className="best-grid3">
    <div className="best-card3">
      <img src="https://img.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg" alt="Product 1" className="best-image3" />
      <p className="best-title3">Pest Control</p>
      <p className="best-desc3">Natural pest control solution</p>
    </div>
    <div className="best-card3">
      <img src="https://bestbeebrothers.com/cdn/shop/articles/termite-1.jpg?v=1615929342&width=2048" alt="Product 2" className="best-image3" />
      <p className="best-title3">Termite Control</p>
      <p className="best-desc3">Effective termite protection solutions</p>
    </div>
    <div className="best-card3">
      <img src="https://5.imimg.com/data5/SELLER/Default/2024/7/434236343/VV/II/VJ/26816921/pre-construction-pest-control-service.jpg" className="best-image3" />
      <p className="best-title3">Pre Construction Termite</p>
      <p className="best-desc3">Preventive termite control service</p>
    </div>
    <div className="best-card3">
      <img src="https://5.imimg.com/data5/SELLER/Default/2024/4/409145737/KK/VS/PG/56948131/wood-borer-pest-control-services-500x500.png" alt="Product 4" className="best-image3" />
      <p className="best-title3">Wood Borrer control</p>
      <p className="best-desc3">Effective wood borer treatment</p>
    </div>
    <div className="best-card3">
      <img src="https://cpcindia.in/wp-content/uploads/2023/07/bed-bug-min.jpg" alt="Product 5" className="best-image3" />
      <p className="best-title3">Bed Bugs Control</p>
      <p className="best-desc3">Weatherproof, Durable, Effective</p>
    </div>
    <div className="best-card3">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/046/371/329/small/pest-control-man-spraying-cockroach-on-the-carpet-in-the-living-room-at-home-photo.jpg" alt="Product 6" className="best-image3" />
      <p className="best-title3">Lizard Control</p>
      <p className="best-desc3">Safe lizard removal service</p>
    </div>
    <div className="best-card3">
      <img src="https://internalsecurity.in/wp-content/uploads/2024/02/pest-roadent-control.png" alt="Product 7" className="best-image3" />
      <p className="best-title3">Flying Insect Control</p>
      <p className="best-desc3">Insulating, Private, Energy-efficient</p>
    </div>
    <div className="best-card3">
      <img src="https://mothernaturesinc.com/wp-content/uploads/2024/02/WhyProfessionalPestControlServicesareVitalforHomes.jpg" alt="Product 8" className="best-image3" />
      <p className="best-title3">Rodent Control</p>
      <p className="best-desc3">Expert rodent removal service</p>
    </div>
  
  </div>
</div>

<div className="best-intro3">
  <h1>Why Choose Our Pest Control?</h1>
  <p>We deliver professional and reliable pest control services with guaranteed results</p>
</div>
<div className="best-section3">
  <div className="best-left3">
    <div className="best-points3">
          <p><FontAwesomeIcon icon={faCheck} className="best-icon3" />Eco-friendly pest control solutions</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" /> Licensed and experienced technicians</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" /> Same-day service available</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" />Free inspection and quotation</p>
    <p><FontAwesomeIcon icon={faCheck} className="best-icon3" />Guaranteed results</p>
      <p><FontAwesomeIcon icon={faCheck} className="best-icon3" />Safe for children and pets</p>
    </div>
  </div>

  <div className="best-right3">
    <img
      src="https://img.freepik.com/free-vector/pest-control-service-illustration_1284-8981.jpg"
      alt="Automation Feature"
      className="best-image33"
    />
  </div>
</div>

      

    </div>
  );
};

export default PestControl;
