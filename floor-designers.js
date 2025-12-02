import React from "react";
import "./FloorDesigners.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRobot,faLightbulb,faCogs,faShieldAlt} from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const FloorDesigners = () => {
  return (
    <div className="floor-container">
      <div className="floor-con1">
        <img
          src="https://customfloorsbymike.com/wp-content/uploads/2024/12/premium-hardwood-middle-04.jpg"
          alt="SS Automation"
          className="floor-image1"
        />
        <div className="floor-text">
          <h1>Premium Floor Services</h1>
          <p>Transform your space with our professional flooring solutions</p>
        </div>
      </div>

<div className="floor-boxes">
  <div className="floorbox">
    <i class="fa-solid fa-pills"></i>
    <h3>Vinyl Flooring</h3>
    <p>Durable and water-resistant </p>
    <p>flooring solutions</p>
  </div>

  <div className="floorbox">
    <i class="fa-solid fa-brush" ></i>
    <h3>Hardwood Floors</h3>
    <p>Classic and elegant natural wood </p>
    <p>flooring</p>
  </div>

  <div className="floorbox">
    <i class="fa-solid fa-pen-fancy"></i>
    <h3>Laminate Flooring</h3>
    <p>Affordable and stylish flooring </p>
    <p>options</p>
  </div>

  <div className="floorbox">
   <i class="fa-regular fa-circle-check"></i>
    <h3>Tile Installation</h3>
    <p>Custom tile designs and</p>
    <p> professional installation</p>
  </div>
</div>

<div className="floor-products">
  <h2>Our Products</h2>
  <div className="floor-grid">
    <div className="floor-card">
      <img src="https://www.flooringamerica.com/root/clientimages/MF7979WEB/html/page-5045/luxury%20vinyl%20plank%20image%201.jpg?rnd=301" alt="Product 1" className="floor-image" />
      <p className="floor-title">Luxury Vinyl Plank(LVP)</p>
      <p className="floor-desc">Realistic wood & stone</p>
    </div>
    <div className="floor-card">
      <img src="https://res.cloudinary.com/dcspg/image/upload/f_auto,q_auto,w_600/v1/article-images/Flooring%20Superstores%20Calgary%20LLC/298089/featured?v=fc3588d7-f398-4762-934b-360c6ad1a0ed" alt="Product 2" className="floor-image" />
      <p className="floor-title">Luxury Vinyl Tile (LVT)</p>
      <p className="floor-desc">Looks like ceramic, marble, or stone tiles.</p>
    </div>
    <div className="floor-card">
      <img src="https://images.theflooringguys.com.au/wp-content/uploads/2021/07/11144328/vinyl-carousel3.jpeg" alt="Product 3" className="floor-image" />
      <p className="floor-title">SPC Vinyl Flooring</p>
      <p className="floor-desc">Most Popular for High-Traffic Areas</p>
    </div>
    <div className="floor-card">
      <img src="https://5.imimg.com/data5/SELLER/Default/2024/9/453447233/BM/WT/EC/56182624/wpc-flooring.jpg" alt="Product 4" className="floor-image" />
      <p className="floor-title">WPC Vinyl Flooring</p>
      <p className="floor-desc">Luxury & Noise Reduction</p>
    </div>
    <div className="floor-card">
      <img src="https://floorcon.com.au/wp-content/uploads/2023/03/iStock-813674350.jpg" alt="Product 5" className="floor-image" />
      <p className="floor-title">Sheet Vinyl Flooring</p>
      <p className="floor-desc">Budget-Friendly & Seamless</p>
    </div>
    <div className="floor-card">
      <img src="https://www.thespruce.com/thmb/8GX-MpYjcRm6W7WQbgj1t-8CG-g=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-how-to-lay-vinyl-sheet-flooring-5081253-hero_75920-dd838ee0359a45e2ba4d24052c496d80.jpg" alt="Product 6" className="floor-image" />
      <p className="floor-title">Peel and Stick Vinyl Flooring</p>
      <p className="floor-desc">Self-adhesive and easy to install.</p>
    </div>
    <div className="floor-card">
      <img src="https://surfacedesignsolution.com/wp-content/uploads/2023/08/Vinyl-Composite-Tile-900x590.jpg" alt="Product 7" className="floor-image" />
      <p className="floor-title">Vinyl Composite Tile (VCT)</p>
      <p className="floor-desc">Durable but needs waxing & maintenance.</p>
    </div>
    <div className="floor-card">
      <img src="https://www.responsiveindustries.com/wp-content/themes/responsive/images/printed_flooring_main_banner.jpg" alt="Product 8" className="floor-image" />
      <p className="floor-title">Printed Vinyl Flooring</p>
      <p className="floor-desc">Custom prints, including logos and 3D designs.</p>
    </div>
  
  </div>
</div>

<div className="floor-intro">
  <h1>Why Choose Our Floor Services?</h1>
  <p>We deliver professional and reliable flooring solutions with guaranteed results</p>
</div>
<div className="floor-section">
  <div className="floor-left">
    <div className="floor-points">
          <p><FontAwesomeIcon icon={faCheck} className="floor-icon" /> Professional installation team</p>
      <p><FontAwesomeIcon icon={faCheck} className="floor-icon" /> Premium quality materials</p>
      <p><FontAwesomeIcon icon={faCheck} className="floor-icon" /> Extensive product selection</p>
      <p><FontAwesomeIcon icon={faCheck} className="floor-icon" /> Competitive pricing</p>
    <p><FontAwesomeIcon icon={faCheck} className="floor-icon" />Long-lasting durability</p>
      <p><FontAwesomeIcon icon={faCheck} className="floor-icon" /> Expert consultation</p>
    </div>
  </div>

  <div className="floor-right">
    <img
      src="https://kuberfurniture.com/wp-content/uploads/2024/09/Sofa-Set-Wooden-Sofa-Design-Contemporary-Premium-Pine-Wood-Sofa-Set-For-Living-Room-1.png"
      alt="Automation Feature"
      className="floor-image3"
    />
  </div>
</div>

      

    </div>
  );
};

export default FloorDesigners;
